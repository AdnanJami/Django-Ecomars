import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
const RootLayout = ()=> {
  return <Stack>
    <Stack.Screen  
  name="index" options={{ title: 'yoyo' }}/>
  <Stack.Screen name="modddal" options={{ title: 'niga',headerStyle:{backgroundColor:'#6366f1'},headerTitleAlign:"center", }}/>
  <Stack.Screen name="otherss/bana" options={{ title: 'calculator' }}/>
    </Stack>
    

  ;
}
const styles = StyleSheet.create({
  blackHeader: {
    backgroundColor: '#000',
  },
  blueHeader: {
    backgroundColor: '#6366f1',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default RootLayout;
