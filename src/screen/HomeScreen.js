import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
    <ScrollView>
    <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "white" }} >
       <Box bg={"#A1917A"} w={"100%"} h={140} borderBottomRadius={20} >
            <Box ml={27} mt={5} >
              <Text color={"white"} fontSize={24} fontWeight={"bold"}>歡迎來到國北生活圈</Text>
              
              <HStack>
              <Pressable
                height={30}
                w={100}
                bg="#FFFAE1"
                borderRadius={50}
                mt={5}
                mr={3}
              >
              <Text color={"black"} fontSize="14" pt={1} alignSelf={"center"}>Instagram</Text>
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
      <HStack ml={27} mt={5}>
        <MaterialIcons name="fastfood" color={"#DF9879"} size={28}  />
        <Text fontSize={24} fontWeight={"bold"}>{foodData.title1}</Text>
      </HStack>
      <HomeList list={foodData.data1} navigation={navigation} />


      <HStack ml={27} mt={5}>
        <MaterialIcons name="fastfood" color={"#DF9879"} size={28} />
        <Text fontSize={24} fontWeight={"bold"}>{foodData.title2}</Text>
      </HStack>
      <HomeList list={foodData.data2} navigation={navigation} />

      <HStack ml={27} mt={5}>
        <MaterialIcons name="fastfood" color={"#DF9879"} size={28} />
        <Text fontSize={24} fontWeight={"bold"}>{foodData.title3}</Text>
      </HStack>
      <HomeList list={foodData.data3} navigation={navigation} />

      <HStack ml={27} mt={5}>
        <MaterialIcons name="fastfood" color={"#DF9879"} size={28} />
        <Text fontSize={24} fontWeight={"bold"}>{foodData.title4}</Text>
      </HStack>
      <HomeList list={foodData.data4} navigation={navigation} />
    </Box>
    </ScrollView>
  );
};

export default HomeScreen;
