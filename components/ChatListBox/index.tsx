import React from "react";
import { View, Text, Image} from "react-native";
import styles from "./styles";
import {ChatRoom} from "../../types"

export type ChatListBoxProps= {
    chatRoom: ChatRoom
}

const ChatListBox= (props: ChatRoom) => {


    const {chatRoom} = props;
    const user = chatRoom.users[1];


    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>

                <Image 
                    source={{uri: user.imageUri}}
                    style={styles.avatar}
                />

                <View style={styles.subContainer}>
                    <Text 
                    style={styles.username}>
                        {user.name}
                    </Text>

                    <Text 
                        style={styles.lastMessage}>
                            {chatRoom.lastMessage.content}
                    </Text>
                </View>

            </View>
            
            <Text style={styles.timestamp}>
                Today
            </Text>
        </View>
    )
}
export default ChatListBox;