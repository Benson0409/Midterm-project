import React from "react";
import {
  Box,
  VStack,
  Pressable,
  Text,
  AspectRatio,
  Image,
  HStack,
  ScrollView,
} from "native-base";
import foodData from "../json/food.json";
import HomeList from "../Home/HomeList";

const HomeScreen = ({ navigation }) => {
  return (
    <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "white" }}>
       <Box bg={"#A1917A"} w={"100%"} h={140} borderBottomRadius={20}>
            <Box ml={27} mt={5} >
              <Text color={"white"} fontSize={24} fontWeight={"bold"}>歡迎來到國北生活圈</Text>
              
              <HStack>
              <Pressable
                height={30}
                w={180}
                bg="#FFFAE1"
                borderRadius={50}
                mt={5}
                mr={3}
              >
              <Text color={"black"} fontSize="14" pt={1} alignSelf={"center"}>國北生活圈Instagram</Text>
          </Pressable>
          <Pressable
                height={30}
                w={100}
                bg="#FFFAE1"
                borderRadius={50}
                mt={5}
                mr={3}
              >
              <Text color={"black"} fontSize="14" pt={1} alignSelf={"center"}>抽獎活動</Text>
          </Pressable>
          <Pressable
                height={30}
                w={100}
                bg="#FFFAE1"
                borderRadius={50}
                mt={5}
                mr={3}
              >
              <Text color={"black"} fontSize="14" pt={1} alignSelf={"center"}>加入我們</Text>
          </Pressable>
          </HStack>
          
            </Box>

            </Box>
      <HomeList list={foodData.data} navigation={navigation} />
    </Box>
  );
};

export default HomeScreen;
