import { StyleSheet } from "react-native";

const style = StyleSheet.create(
    {
        avatar: {
            width: 69,
            height: 69,
            borderRadius: 10,
            borderColor: "#b30404",
            borderWidth: 1,
            marginRight: 13
        },
        username: {
            color: "#b30404",
            fontSize: 17,
            fontWeight: "bold",
            marginBottom: 5,
        },
        subContainer: {

        },
        mainContainer:{
            flexDirection: "row",
        },
        lastMessage: {
            color: "white"
        },
        container:{
            borderBottomColor: "#b30404",
            borderBottomWidth: 0.22,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            width: "100%"
        },
        timestamp: {
            color: "white"
        }
    }
)

export default style;