import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modal, Portal, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';

const Step2 = ({ navigation }) => {
  const [age, setAge] = React.useState("");
  const route = useRoute()
  const {name} = route.params
  console.warn(name)
  return (
    <View className="flex-1">

      <TextInput
        mode="outlined"
        label="Email"
        className="h-8 w-40"
        value={age}
        onChangeText={age => setAge(age)}
      />
      <Text className="absolute bottom-0 left-0 right-0 z-10 text-red bg-stone-50 m-5 rounded-full p-5 text-center" onPress={() => navigation.navigate('Step3',
        {
            data:{
              name,
              age
            }
      
        })}>Home</Text>
    </View>
  )
}

export default Step2

const styles = StyleSheet.create({})