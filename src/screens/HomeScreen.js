import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CampaignList from "../components/CampaignList";

const HomeScreen = () => {
  return (
    <View>
      <CampaignList />
    </View>
    
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
