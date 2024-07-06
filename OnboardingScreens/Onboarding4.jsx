import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Onboarding4() {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('Onboarding3');
      };

      const handleSkipPress = () => {
        navigation.navigate('SignUp');
      } 

  return (
    <View style={styles.container}>
        <View style={styles.main}>
         <View style={styles.iconcontainer}>
        <Ionicons name="arrow-back-outline" size={24} color="#fff" onPress={handleBackPress} />
        </View>
         <View>
            <Text style={styles.text} onPress={handleSkipPress}>Skip</Text>
        </View>
         </View>

         <View style={styles.imagecontainer}> 
            {/* <Image /> */}
        </View>
        
        <View style={styles.textcontent}>
           <Text style={styles.text1}>Retrieve Lost Items</Text>
           <Text style={styles.text2}>Ace to getting your lost Items</Text>
        </View>

        <View style={styles.nextcontainer}>
        <Text style={styles.next}   onPress={() => navigation.navigate('SignUp')}>Next</Text>
      </View>
    
      {/* <Button
        title="Next"
        onPress={() => navigation.navigate('SignUp')}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
      },
      main: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      text: {
        fontSize: 21,
        fontWeight: 'bold',
        marginRight: 10,
      },
      iconcontainer: {
        backgroundColor: '#001d4a',
        width: 40,
        marginLeft: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imagecontainer: {
        backgroundColor: 'grey',
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
        marginTop: 30,
      },
      textcontent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#001d4a'
      },
      text2: {
        fontSize: 20,
        fontWeight: 'bold',
         color: '#001d4a',
         marginTop: 15,
      },
      nextcontainer: {
        height: 40,
        width: 150,
        backgroundColor: '#FFC600',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 15,
        marginLeft: 250,
        marginTop: 100,
      },
      next: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#001d4a',
      }
})