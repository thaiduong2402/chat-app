import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';

const PostCard = ({ post, onLike, onComment, onShare }) => (
  <Card style={styles.card}>
    <Card.Cover source={{ uri: post.image }} />
    <Card.Content>
      <Title>{post.title}</Title>
      <Paragraph>{post.content}</Paragraph>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onLike(post.id)} style={styles.actionButton}>
          <IconButton icon="thumb-up" size={20} />
          <Text>{post.likes} Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onComment(post.id)} style={styles.actionButton}>
          <IconButton icon="comment" size={20} />
          <Text>{post.comments} Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onShare(post.id)} style={styles.actionButton}>
          <IconButton icon="share" size={20} />
          <Text>{post.shares} Shares</Text>
        </TouchableOpacity>
      </View>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostCard;
