import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import colors from "../assets/colors";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

const PlayersScreen = () => {
  // const [data, setData] = useState(null);
  const navigation = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // get data from the fake api endpoint
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.mpg.football/api/data/championship-players-pool/1`
        );
        const data = response.data.poolPlayers;
        console.log(data);
        setFakeData(data);
        setIsLoading(false);
        console.log(fakeData);
      } catch (error) {
        alert("An error occurred");
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.mainTitle}>Players</Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      <List
        searchPhrase={searchPhrase}
        data={fakeData}
        setClicked={setClicked}
      />
    </SafeAreaView>
  );
};
export default PlayersScreen;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 60,
    color: "#3E53CC",
  },
});
