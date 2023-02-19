import {SafeAreaView, FlatList, ScrollView, Text} from "react-native";
import Song from "./Song";
import Header from "./Header";
    
    const renderItem = ({item, index}) => (
        <Song
            id = {index+1}
            imageUrl={item.imageUrl}
            title={item.songTitle}
            artist={item.songArtists[0].name}
            albumName= {item.albumName}
            duration= {item.duration}
        />
    );
    
    const SongList = ({tracks}) => {
    return(
    <SafeAreaView>
        <Header></Header>
        <ScrollView>
            <FlatList 
                    data={tracks}
                    renderItem ={(item) => 
                        renderItem(item)}
                    keyExtractor = {(item) => item.id}
            />
        </ScrollView>
    </SafeAreaView>
    );

    };

    export default SongList;

