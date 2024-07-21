import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Alert, Keyboard } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { TextInput, Appbar } from 'react-native-paper';
import MessageList from '@/components/MessageList';
import { useAuth } from '@/context/authContext';
import { getRoomId } from '../utils/common';
import { addDoc, collection, doc, onSnapshot, orderBy, query, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

import { Colors } from '@/constants/Colors';
import ChatRoomHeader from '@/components/ChatRoomHeader';

export default function ChatRoom() {
  const item = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollViewRef = useRef(null);

  const createRoomIfNotExists = async () => {
    let roomId = getRoomId(user?.userId, item?.userId);
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  useEffect(() => {
    createRoomIfNotExists();

    const roomId = getRoomId(user?.userId, item?.userId);
    const docRef = doc(db, "rooms", roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy('createdAt', 'asc'));

    const unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages([...allMessages]);
    });

    const KeyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow', updateScrollView
    );

    return () => {
      unsub();
      KeyboardDidShowListener.remove();
    };
  }, [item.userId]);

  const handleSend = async () => {
    const message = newMessage.trim();
    if (!message) return;

    try {
      const roomId = getRoomId(user?.userId, item?.userId);
      const docRef = doc(db, "rooms", roomId);
      const messageRef = collection(docRef, "messages");

      if (newMessage) {
        setNewMessage('');
      }

      await addDoc(messageRef, {
        userId: user?.userId,
        text: message,
        profileUrl: user?.profileUrl,
        senderName: user?.username,
        createdAt: Timestamp.fromDate(new Date()),
      });
    } catch (error: any) {
      Alert.alert('Message', error.message);
    }
  };

  useEffect(() => {
    updateScrollView();
  }, [messages]);

  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <View style={styles.container}>
      <ChatRoomHeader router={router} user={user}></ChatRoomHeader>
      <View style={styles.messageListContainer}>
        <MessageList scrollViewRef={scrollViewRef} messages={messages} currentUser={user} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message"
          mode="outlined"
          style={styles.input}
          theme={{ roundness: 50 }}
          right={<TextInput.Icon icon="send" onPress={handleSend} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageListContainer: {
    flex: 1,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
});
