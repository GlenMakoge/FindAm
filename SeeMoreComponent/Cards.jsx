import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Card = ({ image, name, status, time, onShare }) => {
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this event: ${name} - Status: ${status} (Uploaded: ${time})`,
        url: image,
      });
    } catch (error) {
      console.log('Error sharing:', error.message);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.status, status === 'Missing' ? styles.missing : styles.found]}>
          {status}
        </Text>
        <Text style={styles.time}>Uploaded: {time}</Text>
      </View>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <FontAwesome name="share" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    paddingLeft: 20,
    width: '45%',
    margin: 2,
    
  },
  image: {
    width: 100,
    height: '50%',
    resizeMode: 'cover',
    marginBottom: 60,

  },
  textContainer: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    marginBottom: 4,
  },
  missing: {
    color: '#E53935',
  },
  found: {
    color: '#4CAF50',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  shareButton: {
    padding: 12,
  },
});

export default Card;