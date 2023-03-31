import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ShowItems from './src/Screens/ShowItems';
import ItemPage from './src/Components/ItemPage';

export default function App() {
  return (
    <View>
      <ItemPage/>
      <StatusBar style="auto" />
    </View>
  );
}



