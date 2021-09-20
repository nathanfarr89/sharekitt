import React from 'react'
import { StyleSheet, View } from 'react-native';
import MyAppText from '../utils/MyAppText';
import CampaignStatus from './CampaignStatus';

const CampaignSelection = (props) => {
  const { campaign } = props;

  return (
    <View style={[selectionStyle.container]}>
      <View style={selectionStyle.item}>
        <CampaignStatus status={campaign.status} />
      </View>
      <View style={selectionStyle.item}>
        <MyAppText color="#14142B">{campaign.event}</MyAppText>
      </View>
      <View style={selectionStyle.item}>
        <MyAppText margin={10} color="#6E7191">{campaign.date.split('-').slice(1).join('/')}</MyAppText>
      </View>
    </View>
    
  )
}

const selectionStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7FC',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    width: 329,
    height: 58,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default CampaignSelection;
