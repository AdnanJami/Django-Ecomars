import React, { useState } from 'react';
import {  StyleSheet, Pressable, View, Text,Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
const App = () => {
  const [count, setcount] = useState(0);
  const handlecount = () => {
    setVisible(false)
    if (count >= 10) {
      setcount(0);
      setVisible(true);
      return;
    }
    setcount(count + 1);
  };
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.centeredView}>
          <Text selectable= {false}style={styles.countstyle}>Count is {count}</Text>
          <Pressable style={styles.increasse} onPress={handlecount}>
            <Text selectable={false} style={styles.textStyle}>Increase</Text>
          </Pressable>  
          <Pressable style={styles.resets} onPress={() => setcount(0)}>
            <Text selectable={false} style={styles.textStyle}>Reset</Text>
          </Pressable>

          {visible&& <Pressable style={styles.sinter} onPress={() => router.push("/modddal")}>
            <Text selectable={false}>Go to About</Text>
        </Pressable>}

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  increasse: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  resets: {
    position: 'absolute',   // fixes it in place
    bottom: 20,             // distance from bottom
    left: 20,               // distance from left
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  sinter:{
    position: 'absolute',
    backgroundColor: 'green',
    bottom: 20,
    right: 20,
    padding: 12,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  countstyle: {
    fontSize: 20,
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
