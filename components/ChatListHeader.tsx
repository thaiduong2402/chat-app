import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Appbar, Menu, Avatar } from 'react-native-paper';
import { useAuth } from '@/context/authContext';
import { FontAwesome } from 'react-native-vector-icons';

import { Colors } from '@/constants/Colors';


const ChatListHeader = () => {
  const { user } = useAuth();
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Chat" titleStyle={styles.title} />
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" color="white" onPress={openMenu} />}
      >
        <Menu.Item onPress={() => {}} title="Option 1" />
        <Menu.Item onPress={() => {}} title="Option 2" />
        <Menu.Item onPress={() => {}} title="Option 3" />
      </Menu>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.light.backgroundHeader,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ChatListHeader;
