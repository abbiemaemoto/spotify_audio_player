import {Pressable, Text, StyleSheet, Image, View, TouchableHighlightBase, Dimensions} from "react-native";
import { Images, Themes } from "../assets/Themes";
import {millisToMinutesAndSeconds} from "../utils";
import { Ionicons } from '@expo/vector-icons';
import PreviewScreen from "../screens/PreviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get("window").width;

export default function Song ({id, imageUrl, title, artist, albumName, duration, previewUrl, externalUrl}) {
    const navigation = useNavigation();
    return(
        <Pressable
                onPress={() => 
                    navigation.navigate("DetailsScreen", {url: externalUrl})}>

            <View style={styles.songStyle}>

                <View style={styles.play}>
                    <Pressable onPress={() => navigation.navigate("PreviewScreen", {url: previewUrl})}>
                        <Ionicons name="play-circle" size={28} color= {Themes.colors.spotify} />
                    </Pressable>
                </View>

                <View style={styles.albumCoverView}>
                    <Image style= {styles.albumCover} source={{uri: imageUrl}} />
                </View>

                <View style={styles.songView}>
                    <Text numberOfLines={1} style={styles.indexText}>{title}</Text>
                    <Text style={styles.artistStyle}>{artist}</Text>
                </View>

                <View style={styles.albumView}>
                    <Text numberOfLines={1} style={styles.indexText}>{albumName}</Text>
                </View>

                <View style={styles.durationView}>
                    <Text style={styles.indexText}>{millisToMinutesAndSeconds(duration)}</Text>
                </View>
                
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    
    songStyle:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
    },
    
    play:{
        resizeMode: "contain",
        width: windowWidth * 0.1,
        height: windowWidth * 0.1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",       
        marginLeft: "0%",
        width: "10%",
    },
    
    albumCover:{
        resizeMode: "contain",
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
    },

    indexText:{
        color: Themes.colors.white,
    },

    artistStyle:{
        color: Themes.colors.gray,
    },

    idView:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",       
        marginLeft: "0%",
        width: "5%",
    },

    albumCoverView:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",       
        width: "20%",
    },

    songView:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",       
        width: "30%",
        marginRight: "3%",
    },

    albumView:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",       
        width: "25%",
        padding: 5,
    },
    
    durationView:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",       
        width: "10%",
    },
});