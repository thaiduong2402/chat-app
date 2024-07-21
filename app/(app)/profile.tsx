import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList, Text } from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import PostCard from '../../components/PostCard';

import { useAuth } from '@/context/authContext'


const ProfileScreen = () => {
  
  const {user} = useAuth();
  const [users, setUsers] = useState([])

  useEffect(()=>{
    console.log('user: ', user);
  },[])

  const posts = [
    {
      id: '1',
      title: 'My First Post',
      content: 'This is the content of my first post. Loving this app!',
      image: 'https://example.com/post-image-1.jpg',
      likes: 5,
      comments: 2,
      shares: 3,
    },
    {
      id: '2',
      title: 'Beautiful Sunset',
      content: 'Captured this stunning sunset at the beach yesterday.',
      image: 'https://example.com/post-image-2.jpg',
      likes: 10,
      comments: 8,
      shares: 6,
    },
    // Add more posts as needed
  ];

  const handleLike = (id) => {
    console.log(`Liked post ${id}`);
  };

  const handleComment = (id) => {
    console.log(`Commented on post ${id}`);
  };

  const handleShare = (id) => {
    console.log(`Shared post ${id}`);
  };

  const renderPost = ({ item }) => (
    <PostCard
      post={item}
      onLike={handleLike}
      onComment={handleComment}
      onShare={handleShare}
    />
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<ProfileHeader user={user} onEditProfile={() => console.log('Edit Profile Pressed')} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
});

export default ProfileScreen;
