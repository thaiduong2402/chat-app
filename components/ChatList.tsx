import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ChatItem from './ChatItem';
import { useRouter } from 'expo-router';

const ChatList = ({ users, currenUser }:any) => {
const router = useRouter();
  const renderEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.emptyText}>No users available</Text>
    </View>
  );

  const handleOpenChatRoom = (item:any) => {
    console.log('đấ', item);
    router.push({pathname: '/chatRoom', params: { ...item }})
  };

  return (
    <View>
      <FlatList
        data={users}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item, index) => index.toString()} 
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <ChatItem 
          item={item} 
          noBorder={index+1 == users.length} 
          router={router}
          currenUser={currenUser}
          openChatRoom={handleOpenChatRoom} 
        />}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 25,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});

export default ChatList;
