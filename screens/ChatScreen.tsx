import * as React from 'react';
import { StyleSheet } from 'react-native';
import ChatListBox from '../components/ChatListBox'
import { Text, View, FlatList } from 'react-native';
import chatRooms from "../data/ChatRooms"
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ChatListBox chatRoom={chatRooms[2]}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
