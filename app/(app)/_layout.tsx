import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import ChatHeader from '@/components/ChatHeader';
import ChatListHeader from '@/components/ChatListHeader';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:Colors.primary
    }}>
      <Tabs.Screen name='home'
      options={{
        tabBarLabel:'Home',
        header : ()=> <HomeHeader/>,
        tabBarIcon:({color})=><Ionicons name='home' size={24} color={color}></Ionicons>
      }}
      />
      <Tabs.Screen name='explore'
      options={{
        tabBarLabel:'Explore',
        header : ()=> <HomeHeader/>,
        tabBarIcon:({color})=><Feather name="globe" size={24} color={color} />
      }}
      />
      <Tabs.Screen name='chat'
      options={{
        tabBarLabel:'Chat',
        header : ()=> <ChatListHeader/>,
        tabBarIcon:({color})=><Entypo name="chat" size={24} color={color} />
      }}
      />
      <Tabs.Screen name='profile'
      options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color})=><FontAwesome name="user-circle-o" size={24} color={color} />
      }}
      />
    </Tabs>
  );
}
