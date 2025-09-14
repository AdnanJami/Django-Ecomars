import React, { useState } from 'react';
import { Alert, Modal, Image, StyleSheet, Pressable, View, Dimensions, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
const { width, height } = Dimensions.get("window"); // get screen size

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View style={styles.modalBackground}>
            <Pressable
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
              onPress={() => setModalVisible(false)}
            >
              <Image
                source={require("@/assets/images/vangogh.jpg")}
                style={styles.fullscreenImage}
                resizeMode="contain" // keeps aspect ratio
              />
              {/* ✅ wrap text properly */}
              <Text style={styles.modalText}>Starry Night by Van Gogh</Text>
            </Pressable>
          </View>
        </Modal>

        {/* Thumbnail Image that opens modal */}
        <Pressable onPress={() => setModalVisible(true)} style={{ alignItems: "center" }}>
          <Image
            source={require("@/assets/images/vangogh.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.textd}>vangogh</Text>
        </Pressable>
        <Pressable onPress={() => router.push("/otherss/bana")}>
                    <Text selectable={false}>Go to banana</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)", // dark background
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenImage: {
    width: width,
    height: height * 0.8, // leave space for title
  },
  modalText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  textd: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    marginTop: 5,
  },
});

export default App;
