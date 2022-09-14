import { StyleSheet, Text, View,Image,Button,SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from'./screens/HomeScreen';
const Drawer = createDrawerNavigator();

function CustomDrawercontent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("./assets/react_logo.png")}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawercontent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#464",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text >Setting Screen</Text>
      <Button
        title="GO TO HOME"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,color,size})=>{
            let iconName;
            if(route.name==='Home'){
              iconName = focused
              ?'ios-information-circle'
              :'ios-information-circle-outline'
            }else if(route.name==='Setting'){
              iconName = focused ?'ios-list-box':'ios-list'
            }
            //you can return any component that you like here
            return <Ionicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTinColor:'tomato',
          tabBarActiveTintColor:'gray',

        })} 

    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
