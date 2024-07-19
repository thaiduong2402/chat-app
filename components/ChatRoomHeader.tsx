import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ChatRoomHeader({ user, router }) {
  return (
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
            <Icon name="arrow-back" size={25} color="blue" />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Avatar.Image 
              size={40} 
              source={{ uri: user.profileUrl }} 
              style={styles.avatar} 
            />
            <Text style={styles.headerTitle}>{user.username}</Text>
          </View>
        ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => alert('Call')} style={styles.headerButton}>
              <Icon name="call" size={25} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Video Call')} style={styles.headerButton}>
              <Icon name="videocam" size={25} color="blue" />
            </TouchableOpacity>
          </View>
        ),
      }}
    ></Stack.Screen>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    padding: 10,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
  headerRight:{
    flexDirection: 'row'
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
