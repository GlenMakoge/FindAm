import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated } from 'react-native';

const SideMenu = ({ onItemPress }) => {
  const [sideMenuAnimation] = useState(new Animated.Value(-300));
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(sideMenuAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [sideMenuAnimation, fadeAnimation]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            { translateX: sideMenuAnimation },
          ],
          opacity: fadeAnimation,
        },
      ]}
    >
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Home</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>About</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Services</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Support</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Privacy Policy</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Terms of Service</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 25,
    left: 4,
    bottom: 0,
    width: '80%',
    backgroundColor: '#001D4A',
    padding: 16,
    zIndex: 1000,
    height: 580,
    borderRadius: 10,
    borderTopLeftRadius: 0,
  },
  menuItem: {
    padding: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: '#FFC600',
  },
});

export default SideMenu;