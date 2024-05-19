import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

export const style = StyleSheet.create({
    userPostContainer: {
        marginTop: 35,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EFF2F6'
    },
    postContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postHeaderContainer: {
        flexDirection: 'row'
    },
    headerTextContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    ellipsis: {
        color: '#79869F',
    },
    name: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: 16
    },
    location: {
        color: '#79869F',
        fontFamily: getFontFamily('Inter', '400'),
        fontSize: 12,
        marginTop: 5
    },
    postImage: {
        alignItems: 'center',
        marginTop: 20
    },
    postIcons: {
        marginLeft: 10,
        flexDirection: 'row',
        gap: 27,
        marginTop: 16
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    icon: {
        color: '#79869F'
    },
    iconText: {
        color: '#79869F',
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: 14
    }
})