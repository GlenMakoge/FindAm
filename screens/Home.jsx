import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../HomeComponents/Header';
import ItemCard from '../HomeComponents/ItemCard';
import SeeMore from './SeeMore';
import CardVertical from '../HomeComponents/CardVertical';

export default function Home() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SeeMore');
  };



  const [recentItems, setRecentItems] = React.useState([
    {
    id: '1',
    image: 'https://picsum.photos/id/1/200/200',
    name: 'Missing Wallet',
    status: 'Missing',
    timeUploaded: '2 hours ago',
    date: '06/06/2024'
  },
  {
    id: '2',
    image: 'https://picsum.photos/id/2/200/200',
    name: 'Found Keys',
    status: 'Found',
    timeUploaded: '1 day ago',
    date: '06/06/2024'
  },
  {
    id: '3',
    image: 'https://picsum.photos/id/3/200/200',
    name: 'Missing Phone',
    status: 'Missing',
    timeUploaded: '3 days ago',
    date: '06/06/2024'
  },
  {
    id: '4',
    image: 'https://picsum.photos/id/3/200/200',
    name: 'Missing Phone',
    status: 'Missing',
    timeUploaded: '4 days ago',
    date: '06/06/2024'
  },
  ]);
  
  const addRecentItem = (newItem) => {
    setRecentItems([newItem, ...recentItems]);
  };

  

  // const recentItems = [
  //   {
  //     id: '1',
  //     image: 'https://picsum.photos/id/1/200/200',
  //     name: 'Missing Wallet',
  //     status: 'Missing',
  //     timeUploaded: '2 hours ago',
  //   },
  //   {
  //     id: '2',
  //     image: 'https://picsum.photos/id/2/200/200',
  //     name: 'Found Keys',
  //     status: 'Found',
  //     timeUploaded: '1 day ago',
  //   },
  //   {
  //     id: '3',
  //     image: 'https://picsum.photos/id/3/200/200',
  //     name: 'Missing Phone',
  //     status: 'Missing',
  //     timeUploaded: '3 days ago',
  //   },
  //   {
  //     id: '4',
  //     image: 'https://picsum.photos/id/3/200/200',
  //     name: 'Missing Phone',
  //     status: 'Missing',
  //     timeUploaded: '4 days ago',
  //   },
  // ];

  const verticalItems = [
    {
      id: 1,
      image: 'https://picsum.photos/id/3/200/200',
      name: 'Item 1',
      location: 'Location 1',
      date: '2 days ago',
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/3/200/200',
      name: 'Item 2',
      location: 'Location 2',
      date: '1 week ago',
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/3/200/200',
      name: 'Item 3',
      location: 'Location 3',
      date: '1 week ago',
    },
    {
      id: 4,
      image: 'https://picsum.photos/id/3/200/200',
      name: 'Item 4',
      location: 'Location 4',
      date: '1 week ago',
    },
    {
      id: 5,
      image: 'https://picsum.photos/id/3/200/200',
      name: 'Item 5',
      location: 'Location 5',
      date: '1 week ago',
    },
    {
      id: 6,
      image: 'https://picsum.photos/id/3/200/200',
      name: 'Item 6',
      location: 'Location 6',
      date: '1 week ago',
    },
    
    // Add more vertical items as needed
  ];


  return (
    <View style={styles.Homecontainer}>
      <Header />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {recentItems.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            name={item.name}
            status={item.status}
            timeUploaded={item.timeUploaded}
          />
        ))}
      </ScrollView>

      <View style={styles.Button}>
        <View style={styles.seven}>
          <Button title='SevenDays' />
        </View>
        <View style={styles.seemore}>
        <Button  title='SeeMore' onPress={handlePress} />
        </View>
      </View>
      <View style={[styles.verticalContainer, { height: 350 }]}>
      <ScrollView style={styles.verticalScrollView}>
        {verticalItems.map((item) => (
          <CardVertical
            key={item.id}
            image={item.image}
            name={item.name}
            location={item.location}
            date={item.date}
          />
        ))}
      </ScrollView>
      </View>
    </View>

    
  )
}

const styles = StyleSheet.create({

  Homecontainer: {
    //flex: 1,
    marginTop: 40,
    
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  seven: {
    borderRadius: 10,
    width: 100,
    //backgroundColor: 'red',
  },
  seemore: {
    width: 100,
    borderRadius: 10,
    //backgroundColor: 'red',
  },
  verticalScrollView: {
    flex: 1,
    paddingVertical: 12,
  },
  
  
});