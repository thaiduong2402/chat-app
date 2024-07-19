import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatList from '@/components/ChatList'
import { useAuth } from '@/context/authContext'
import { getDocs, query, where } from 'firebase/firestore';
import { userRef } from '@/firebaseConfig';

export default function chat() {
  const {user} = useAuth();
  const [users, setUsers] = useState([])

  useEffect(()=>{
    if(user?.userId){
      getUsers();
    }
    
  }, [])

  const getUsers = async () =>{
    const q = query(userRef, where('userId','!=', user?.userId));
    const querySnapshot = await getDocs(q);
    let data:any = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data()});
    });

    setUsers(data);
    console.log('user', user)
  }

  return (
    <View>
      <StatusBar/>
      {
        users.length>0? (
          <ChatList currenUser={user} users = {users}/>
        ) : (
          <View>
            <ActivityIndicator size='large'/>
          </View>
        )
      }
    </View>
  )
}