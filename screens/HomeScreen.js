
import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import { Themes } from "../assets/Themes";

export default function HomeScreen() {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
    let contentDisplayed = null;
  
    if (token){
      contentDisplayed = <SongList tracks={tracks} />
    } else{
      contentDisplayed = (
        <SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        {contentDisplayed}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
  });
  