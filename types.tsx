export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Chats: undefined;
  Contacts: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type ChatRoom ={
  id: String;
  users: User[];
  lastMessage: Message;
}

export type User={
  id: String;
  imageUri: String;
  name: String;

}

export type Message={
  id: String;
  content: String;
  createdAt: String;
}