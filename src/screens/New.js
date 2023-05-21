import React from 'react';
import { View, Text, SectionList } from 'react-native';

const MyComponent = ({navigation}) => {
  const data = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Orange'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Broccoli', 'Lettuce'],
    },
    {
      title: 'Colors',
      data: ['Red', 'Green', 'Blue'],
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => {
    return (
      <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
      </View>
    );
  };

  return (
    <>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      <Text className="absolute bottom-0 left-0 right-0 z-10 text-red shadow bg-stone-50 m-5 rounded-full p-5 text-center" onPress={() => navigation.navigate('Step1')}>Home</Text>
    </>
  );
};

export default MyComponent;