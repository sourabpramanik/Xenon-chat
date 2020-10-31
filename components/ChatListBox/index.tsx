import React from "react";
import { View, Text, Image} from "react-native";
import styles from "./styles";
import {ChatRoom} from "../../types"
import moment from "moment";

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
                        numberOfLines={1}
                        ellipsizeMode="tail" 
                        style={styles.lastMessage}>
                            {chatRoom.lastMessage.content}
                    </Text>
                </View>

            </View>
            
            <Text style={styles.timestamp}>
                {moment(chatRoom.lastMessage.createdAt).format("MMM.DD.YY")}
            </Text>
        </View>
    )
}
export default ChatListBox;