import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the home screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({

container:
{
  flex:1,
  backgroundColor:'#fff',
  justifyContent:'center',
  alignItems:'center',
}


})
