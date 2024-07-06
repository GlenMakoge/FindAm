import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function More() {
  return (
    <View style={styles.Morecontainer}>
      <Text>More</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Morecontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})