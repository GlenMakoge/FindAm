import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headerchat from '../ChatComponents/Headerchat'
import Bodychat from '../ChatComponents/Bodychat'
import Footerchat from '../ChatComponents/Footerchat'

export default function Chat() {
  return (
    <View>
        <Headerchat />
        <Bodychat />
        <Footerchat />
    </View>
  )
}

const styles = StyleSheet.create({})