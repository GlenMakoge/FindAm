import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={styles.Profilecontainer}>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Profilecontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})