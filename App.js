import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Munchkin Counter</Text>
      <Text>~{"\n"}</Text>
      <Image
          style={{ maxHeight: 285, maxWidth: 200 }}
          source={require("./img/munchkin.jpg")}
        />
        <Text>~{"\n"}</Text>
      <Button 
        title="start playing"
        color="#841584"
      />

    </View>
  );
}

export const styles = StyleSheet.create({
  container: {  
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  header: {
    color: "lightblue",
    fontSize: 30
  },
  text: {
    color: "white",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  link: {
    color: "lightblue",
    textDecorationLine: "underline",
    fontSize: 20
  },
  button: {
    backgroundColor: "red",
    color: "white"
  }
});