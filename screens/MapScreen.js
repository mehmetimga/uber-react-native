import { View, Text, Button } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements/dist/icons/Icon";

const MapScreen = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`absolute rounded-full p-3 z-50 left-8 w-20`}
      >
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2 z-0`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
