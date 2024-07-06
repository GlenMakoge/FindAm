import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import SideMenu from './SideMenu';

export default function Header() {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuVisible(!isSideMenuVisible);
  };

  const handleMenuItemPress = (itemId) => {
    // Handle the menu item press here
    console.log('Menu item pressed:', itemId);
    toggleSideMenu();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.hamburger} onPress={toggleSideMenu}>
        <Feather name="menu" size={27} color="#001D4A" />
      </TouchableOpacity>
      <View style={styles.searchfield}>
        <TextInput
          style={styles.input}
          placeholder="Search"
        />
        <Text style={styles.searchIcon}>
          <EvilIcons name="search" size={30} color="#000" />
        </Text>
      </View>
      <View style={styles.notification}>
        <Ionicons name="notifications-circle" size={27} color="#001D4A" />
      </View>
      {isSideMenuVisible && (
        <SideMenu onItemPress={handleMenuItemPress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    position: 'static',
  },
  searchfield: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '40',
  },
  searchIcon: {
    position: 'absolute',
    left: 220,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#001D4A',
    borderWidth: 1,
    borderRadius: 60,
    paddingLeft: 10,
    marginRight: 0,
    marginBottom: 0,
    width: 250,
    backgroundColor: '#ffffff',
    color: '#000',
  },
});