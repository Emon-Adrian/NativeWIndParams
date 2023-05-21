import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'

const Step4 = ({navigation}) => {
  const [time, setTime] = React.useState("");
  const route = useRoute()
  const {name,age, date} = route.params.data
  console.warn(name,age,date)
  return (
    <View className="flex-1">
    <TextInput
    mode="outlined"
    label="Email"
    className="h-8 w-40"
    value={time}
    onChangeText={time => setTime(time)}
  />
    <Text className="absolute bottom-0 left-0 right-0 z-10 text-red bg-stone-50 m-5 rounded-full p-5 text-center" onPress={() => navigation.navigate('Result',
    {
      data: {
        name,age, date,
        time
      }
    } 
    )}>Home</Text>
    </View>
  )
}

export default Step4

const styles = StyleSheet.create({})