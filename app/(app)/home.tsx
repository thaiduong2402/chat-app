import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '@/components/HomeHeader'; // Đảm bảo đường dẫn đúng với cấu trúc dự án của bạn

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Welcome to the Home Screen!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
