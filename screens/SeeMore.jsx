import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import Header from '../HomeComponents/Header';
import { Ionicons } from '@expo/vector-icons';

const SeeMore = () => {
  const [cardData, setCardData] = useState([
    {
      id: '1',
      image: 'https://picsum.photos/id/1/200/200',
      name: 'Event 1',
      status: 'Missing',
      time: '2023-07-03',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/2/200/200',
      name: 'Event 2',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '3',
      image: 'https://picsum.photos/id/3/200/200',
      name: 'Event 3',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '4',
      image: 'https://picsum.photos/id/4/200/200',
      name: 'Event 4',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '5',
      image: 'https://picsum.photos/id/5/200/200',
      name: 'Event 5',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '6',
      image: 'https://picsum.photos/id/6/200/200',
      name: 'Event 6',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '7',
      image: 'https://picsum.photos/id/7/200/200',
      name: 'Event 7',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '8',
      image: 'https://picsum.photos/id/8/200/200',
      name: 'Event 8',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '9',
      image: 'https://picsum.photos/id/9/200/200',
      name: 'Event 9',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '10',
      image: 'https://picsum.photos/id/9/200/200',
      name: 'Event 10',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '11',
      image: 'https://picsum.photos/id/9/200/200',
      name: 'Event 11',
      status: 'Found',
      time: '2023-06-28',
    },
    {
      id: '12',
      image: 'https://picsum.photos/id/9/200/200',
      name: 'Event 12',
      status: 'Found',
      time: '2023-06-28',
    },
  ]);

  const handleShare = (item) => {
    // Implement your share functionality here
    console.log('Sharing:', item);
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={[styles.status, item.status === 'Missing' ? styles.missing : styles.found]}>{item.status}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <TouchableOpacity style={styles.shareButton} onPress={() => handleShare(item)}>
              {/* <Text style={styles.shareText}>Share</Text> */}
              <Ionicons name="share-social-outline" size={24} color="#333" style={styles.shareText}  />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={true}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 140,
    width: '48%',
    marginHorizontal: '1%',
  },
  // image: {
  //   width: 100,
  //   height: '100%',
  //   resizeMode: 'cover',
  // },
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
  // shareButton: {
  //   padding: 12,
  //   backgroundColor: '#001D4A',
  //   borderRadius: 5,
  // },
  shareText: {
    color: '#001D4A',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default SeeMore;