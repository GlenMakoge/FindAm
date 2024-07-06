import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Onboarding1() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
           <ImageBackground source={require('../assets/images/log.jpg')} style={{width: 400, height: 600, flex: 1, marginLeft: 0,}} />
      

      <View style={styles.nextcontainer}>
        <Text style={styles.next}   onPress={() => navigation.navigate('Onboarding2')}>Get started</Text>
      </View>
      {/* <Button
        title="Next"
      
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      nextcontainer: {
        
        height: 40,
        width: 150,
        backgroundColor: '#FFC600',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 15,
      },
      next: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#001d4a',
      }
})