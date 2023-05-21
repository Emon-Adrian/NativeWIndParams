import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Result = ({navigation}) => {
  const route = useRoute()
  const data = route.params.data
  console.warn(data)
  const jsonString = JSON.stringify(data);
  return (
    <View className="flex-1">
   <Text>{jsonString}</Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({})