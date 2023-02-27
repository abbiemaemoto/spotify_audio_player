import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import { Images, Themes } from "../assets/Themes";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={Images.spotify} style={styles.headerIcons} resizeMode="contain" />
            <Text style={styles.title}>My Top Tracks</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerIcons: {
        height: windowWidth * 0.08,
        width: windowWidth * 0.08,
        //alignItems: "center",
        //justifyContent: "center",
        marginRight: "3%",
    },

    title:{
        //textAlign: "center",
        color: Themes.colors.white,
        fontSize: 25,
        fontWeight: "bold",
        //alignItems: "center",
        //justifyContent: "center",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        
    },
});

export default Header;