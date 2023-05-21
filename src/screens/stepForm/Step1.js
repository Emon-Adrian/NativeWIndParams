import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Portal, Button, TextInput} from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';


const Step1 = ({}) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const base = useSelector(state => state.base)

    const [text, setText] = React.useState("");
    //console.log(text)

  return (
    <View className="flex-1 m-4">
    <TextInput
    mode="outlined"
    label="Email"
    className="h-8 w-40"
    value={text}
    onChangeText={text => setText(text)}
  />
    <Text className="absolute bottom-0 left-0 right-0 z-10 text-red bg-stone-50 m-5 rounded-full p-5 text-center" onPress={() => navigation.navigate('Step2',
    {name:text}
    )}>Home</Text>
    </View>
  )
}

export default Step1

const styles = StyleSheet.create({})