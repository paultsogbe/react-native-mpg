import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import colors from "../assets/colors";

import { ActivityIndicator } from "react-native";

function ClubsScreen({ navigation, data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [club, setClub] = useState([]);
  for (const item in data) {
    console.log(item);
    club.push(item);
    console.log(club);
  }

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.pink} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Clubs</Text>

          <FlatList
            data={club}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export default ClubsScreen;

const styles = StyleSheet.create({
  activityIndicator: { paddingTop: 20 },
  flatList: { backgroundColor: colors.bgColor },
  container: {
    height: "100%",
    marginVertical: 20,
    marginHorizontal: 20,
    paddingBottom: 70,
    alignContent: "center",
    justifyContent: "center",
  },
  border: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  icon: {
    marginRight: 5,
  },
  list: {
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#3E53CC",
  },
});
