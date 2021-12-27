// List.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ lastName, clubId, ultraPosition }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{lastName}</Text>
    <Text style={styles.details}>Club: {clubId}</Text>
    <Text style={styles.position}>Position: {ultraPosition}</Text>
  </View>
);

// the filter
const List = (props) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Player1", {
              id: item.id,
              name: item.lastName,
            });
            console.log(item.id);
          }}
        >
          <Item
            lastName={item.lastName}
            clubId={item.clubId}
            ultraPosition={item.ultraPosition}
          />
        </TouchableOpacity>
      );
    }
    // filter of the name
    if (
      item.lastName
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Player1", {
              id: item.id,
              name: item.lastName,
            });
            console.log(item.id);
          }}
        >
          <Item
            lastName={item.lastName}
            clubId={item.clubId}
            ultraPosition={item.ultraPosition}
          />
        </TouchableOpacity>
      );
    }

    // filter of the position
    if (
      item.ultraPosition
        .toString()
        .toUpperCase()
        .includes(
          props.searchPhrase.toString().toUpperCase().trim().replace(/\s/g, "")
        )
    ) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Player1", {
              id: item.id,
              name: item.lastName,
            });
            console.log(item.id);
          }}
        >
          <Item
            lastName={item.lastName}
            clubId={item.clubId}
            ultraPosition={item.ultraPosition}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
