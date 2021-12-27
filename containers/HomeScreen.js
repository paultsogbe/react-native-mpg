import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, StyleSheet } from "react-native";
import colors from "../assets/colors";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MonPetitGazon!</Text>
      {/* <Button
        title="Explore our clubs"
        onPress={() => {
          navigation.navigate("Clubs");
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicator: { paddingTop: 20 },

  container: {
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#52CD52",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 150,
    marginHorizontal: 10,
    color: "#3E53CC",
  },
});
