import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

const CampaignStatus = (props) => {
  const { status } = props;
  const [bgColor, setBgColor] = useState(null);
  const [textColor, setTextColor] = useState(null);

  useEffect(() => {
    switch(status) {
      case 'Live':
        setBgColor('#C5F1E5')
        setTextColor('#00BA88')
        break;
      case 'Draft':
        setBgColor('##FFF7E6')
        setTextColor('#FA8C16')
        break;
      case 'Paused':
        setBgColor('#F9F0FF')
        setTextColor('#722ED1')
        break;
      case 'Expired':
        setBgColor('#FFF1F0')
        setTextColor('#F5222D')
        break;
      default:
        break;
    }
  }, [status])

  return (
    <View style={[selectionStyle.container,{ backgroundColor: bgColor, borderColor: textColor }]} >
      <Text style={{color: textColor}}>{status}</Text>
    </View>
    
  )
}

const selectionStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 4,
    marginLeft: 25,
  },
})

export default CampaignStatus;