import React from "react";
import { Box, Divider } from "native-base";
import ListItem from "../Settings/ListItem";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SettingsScreen = ({ navigation }) => {
  return (
    <Box mt="1">
      <ListItem
        title="登入/註冊"
        navigation={navigation}
        destination="LoginScreen"
        icon="icon1"

      /><Divider h={0.5} w="100%" alignSelf="flex-end" bg={"#949494"}></Divider>
      
      <ListItem title="個人資料" navigation={navigation} icon="icon2" />
      <Divider h={0.5} w="85%" alignSelf="flex-end" bg={"#949494"}></Divider>
      <ListItem title="字體大小" navigation={navigation} icon="icon3" />
      <Divider h={0.5} w="85%" alignSelf="flex-end" bg={"#949494"}></Divider>
      <ListItem title="語言轉換" navigation={navigation} icon="icon4" />
      <Divider h={0.5} w="85%" alignSelf="flex-end" bg={"#949494"}></Divider>
      <ListItem
        title="深淺主題"
        navigation={navigation}
        destination="DisplaySetting"
        icon="icon5"
      />
      <Divider h={0.5} w="85%" alignSelf="flex-end" bg={"#949494"}></Divider>
    </Box>
  );
};

export default SettingsScreen;
