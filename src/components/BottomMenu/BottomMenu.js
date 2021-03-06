import React from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./TabBar";
import AnasScreen, { AppsScreen } from "../../screens/AppsScreen";
import { DashboardScreen } from "../../screens/DashboardScreen";
import { GroupScreen } from "../../screens/GroupScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { useSafeArea } from "react-native-safe-area-context";
import SearchScreen from "../../screens/SearchScreen";

export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
        
        tabBarOptions={{
          activeTintColor: '#e91e63',
          activeBackgroundColor:'red'
        }}
      >
        <Tab.Screen
  
        name="home" component={AnasScreen} />
        <Tab.Screen name="search1" component={SearchScreen} />
        <Tab.Screen  name="dashboard" component={DashboardScreen} />
        <Tab.Screen name="profile" component={GroupScreen} />
        <Tab.Screen name="user" component={ProfileScreen} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: "white",
          }}
        />
      )}
    </View>
  );
};
