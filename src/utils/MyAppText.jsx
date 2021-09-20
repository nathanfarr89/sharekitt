import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import { color } from 'react-native-reanimated';

const MyAppText = (props) => {
  const { color, margin } = props;
  let [fontsLoaded] = useFonts({Poppins_400Regular});

  if (!fontsLoaded) {
    return null
  }

  return (
    <Text style={[textStyle.text,{ color: color, margin: margin }]} >
      {props.children}
    </Text>
  )
}

const textStyle = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_400Regular',
  }
})

export default MyAppText;
