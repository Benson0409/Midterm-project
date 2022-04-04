import React from "react";
import foodData from "../json/food.json";
import Starbar from "../star/starabr";
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
const SectionScreen = ({ route, section }) => {
  const { photo, title, findDetail, label } = route.params;
  return (
    <Box mx="auto" mb="8" >
      <VStack mt={10}>
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[0].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>

        <Text fontWeight="bold" fontSize="18">
          {foodData.findList[0].findDetail[0].name}
        </Text>
        <Text color={"#808080"}>
          {foodData.findList[0].findDetail[0].address}
        </Text>
        <HStack>
          <Starbar star={foodData.findList[0].findDetail[0].star} />
          <Text>
            {foodData.findList[0].findDetail[0].star != null ? (
              <Text>
                {foodData.findList[0].findDetail[0].star}.0
                <Text color={"#808080"}>/ 5.0</Text>
              </Text>
            ) : null}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};
export default SectionScreen;