import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{headerShown: false,}}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}
          options={{
            title: 'Song Details',
            headerStyle: {
              backgroundColor: Themes.colors.background,
            },
            headerTitleStyle:{
              color: 'white',
              fontWeight: 'bold',
            }
          }}/>
        <Stack.Screen name="PreviewScreen" component={PreviewScreen}
          options= {{
            title: 'Song Preview',
            headerStyle:{
              backgroundColor: Themes.colors.background,
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
            }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  // const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  // let contentDisplayed = null;

  // if (token){
  //   contentDisplayed = <SongList tracks={tracks} />
  // } else{
  //   contentDisplayed = (
  //     <SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>
  //   );
  // }
  // return (
  //   <SafeAreaView style={styles.container}>
  //     {contentDisplayed}
  //   </SafeAreaView>
  // );
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Themes.colors.background,
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//   },
// });
