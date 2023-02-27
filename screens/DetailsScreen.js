
import { WebView } from 'react-native-webview';

const DetailsScreen = ({route,navigation}) => {
    return (
        <WebView source = {{uri: route.params.url}}>
        </WebView>
    );
};

export default DetailsScreen;
