import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'

const Step3 = ({ navigation }) => {
  const [date, setDate] = React.useState("");
  const route = useRoute()
  const {name,age} = route.params.data
  console.warn(name, age)
  return (
    <View className="flex-1">
      <TextInput
        mode="outlined"
        label="Email"
        className="h-8 w-40"
        value={date}
        onChangeText={date => setDate(date)}
      />
      <Text className="absolute bottom-0 left-0 right-0 z-10 text-red bg-stone-50 m-5 rounded-full p-5 text-center" onPress={() => navigation.navigate('Step4',
        {
          data: {
            name,
            age,
            date
          }
        }
      )}>Home</Text>
    </View>
  )
}

export default Step3

const styles = StyleSheet.create({})