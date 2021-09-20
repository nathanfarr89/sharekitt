import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import CampaignSelection from './CampaignSelection';
import { campaigns } from '../assets/mock/mockCampaigns';


const CampaignList = () => {
  const [search, setSearch] = useState('');
  
  return (
    <View style={{ backgroundColor: '#fff'}}>
      <View style={campaignListStyle.search}>
        <SearchBar
          containerStyle={{ backgroundColor: '#F7F7FC', borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
          inputContainerStyle={{ backgroundColor: '#EFF0F6'}}
          round
          lightTheme
          placeholder="Search"
          onChangeText={(search) => setSearch(search.toLowerCase())}
          value={search}
        />
      </View>
      <View style={campaignListStyle.container}>
        {campaigns.filter(campaign => campaign.event.toLowerCase().includes(`${search}`)).map((campaign) => {
          return (
            <CampaignSelection key={campaign.id} campaign={campaign} />
          )
        } )}
      </View>
    </View>
    
  )
}

const campaignListStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 600
  },
  search: {
    backgroundColor: '#F7F7FC',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 10,
  }
})

export default CampaignList
