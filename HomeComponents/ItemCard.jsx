import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


  //  const handlePress = () => {
  //    navigation.navigate('Claim', { image, name, status, timeUploaded });
  //  };

const ItemCard = ({ id, image, name, status, date, timeUploaded }) => {
  const navigation = useNavigation();
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this item: ${name}`,
      });
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (

    <TouchableOpacity  onPress={() => navigation.navigate('Claim', { id, image, name, status, timeUploaded })}>
      {/* existing card content */}
      <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.status, status === 'Missing' ? styles.missingStatus : styles.foundStatus]}>
          {status}
        </Text>
        <Text style={styles.timeUploaded}>{date}</Text>
        <Text style={styles.timeUploaded}>{timeUploaded}</Text>
      </View>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Ionicons name="share-social-outline" size={24} color="#333" />
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#001D4A',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    height: 140,
    marginTop: 30,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
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
  missingStatus: {
    color: '#E53935',
  },
  foundStatus: {
    color: '#4CAF50',
  },
  timeUploaded: {
    fontSize: 12,
    color: '#666',
  },
  shareButton: {
    padding: 8,
  },
});

export default ItemCard;