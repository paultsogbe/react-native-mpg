import React, { useState, useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import colors from "../assets/colors";

// Dimensions
const windowHeight = Dimensions.get("window").height;

function PlayerScreen({ route }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(route.params.name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.mpg.football/api/data/championship-player-stats/${route.params.id}/2021`
        );
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        alert(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator
      color={colors.pink}
      size="large"
      style={styles.activityIndicator}
    />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.name}</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text>Player ID: {data.id}</Text>
        <Text>
          Player Club: {data.championships["1"].total.matches[0].playerClubId}
        </Text>
        <Text>Player Position: {data.position}</Text>
        <Text>Player Ultra Position: {data.ultraPosition}</Text>
        <Text>
          Total Started Matches:
          {data.championships["1"].total.stats.totalStartedMatches}
        </Text>
        <Text>
          Total Goals: {data.championships["1"].total.stats.totalGoals}
        </Text>
        <Text>
          Total Own Goals: {data.championships["1"].total.stats.totalOwnGoals}
        </Text>
        <Text>
          Total Yellow Cards:
          {data.championships["1"].total.stats.totalYellowCard}
        </Text>
        <Text>
          Total Red Cards: {data.championships["1"].total.stats.totalRedCard}
        </Text>
        <Text>
          Total Minutes Played:
          {data.championships["1"].total.stats.totalMinutesPlayed}
        </Text>
        <Text>
          Total Clean Sheet:{" "}
          {data.championships["1"].total.stats.totalCleanSheet}
        </Text>
        <Text>
          Total Goals Conceded:
          {data.championships["1"].total.stats.totalGoalsConceded}
        </Text>
        <Text>
          Total Scoring At:{" "}
          {data.championships["1"].total.stats.totalScoringAtt}
        </Text>
        <Text>
          Total Shot Off Target:
          {data.championships["1"].total.stats.totalShotOffTarget}
        </Text>
        <Text>
          Total Big Chance Missed:
          {data.championships["1"].total.stats.totalBigChanceMissed}
        </Text>
        <Text>
          Total Penalties Scored:
          {data.championships["1"].total.stats.totalPenaltiesScored}
        </Text>
        <Text>
          Total Penalties: {data.championships["1"].total.stats.totalPenalties}
        </Text>
        <Text>
          Total Cross: {data.championships["1"].total.stats.totalCross}
        </Text>
        <Text>
          Total Accurate Cross:
          {data.championships["1"].total.stats.totalAccurateCross}
        </Text>
        <Text>
          Total Contest: {data.championships["1"].total.stats.totalContest}
        </Text>
        <Text>
          Total Won Contest:{" "}
          {data.championships["1"].total.stats.totalWonContest}
        </Text>
        <Text>
          Total Won Duel: {data.championships["1"].total.stats.totalWonDuel}
        </Text>
        <Text>Total Duel: {data.championships["1"].total.stats.totalDuel}</Text>
        <Text>
          Total Touches: {data.championships["1"].total.stats.totalTouches}
        </Text>
        <Text>
          Total Lost Ball: {data.championships["1"].total.stats.totalLostBall}
        </Text>
        <Text>
          Total Goal Assist:{" "}
          {data.championships["1"].total.stats.totalGoalAssist}
        </Text>
        <Text>
          Total Intercept: {data.championships["1"].total.stats.totalIntercept}
        </Text>
        <Text>
          TotalIntercept: {data.championships["1"].total.stats.totalIntercept}
        </Text>
        <Text>
          TotalTackle: {data.championships["1"].total.stats.totalTackle}
        </Text>
        <Text>
          Total Mistake: {data.championships["1"].total.stats.totalMistake}
        </Text>
        <Text>
          Total Fouls: {data.championships["1"].total.stats.totalFouls}
        </Text>
        <Text>
          Total Big Chance Created:
          {data.championships["1"].total.stats.totalBigChanceCreated}
        </Text>
        <Text>
          Total Accurate Pass:
          {data.championships["1"].total.stats.totalAccuratePass}
        </Text>
        <Text>
          Total Passes: {data.championships["1"].total.stats.totalPasses}
        </Text>
        <Text>
          Total Accurate Pass Back Zone:
          {data.championships["1"].total.stats.totalAccuratePassBackZone}
        </Text>
        <Text>
          Total Pass Back Zone:
          {data.championships["1"].total.stats.totalPassBackZone}
        </Text>
        <Text>
          Total Pass Fwd Zone:
          {data.championships["1"].total.stats.totalPassFwdZone}
        </Text>
        <Text>
          Total Accurate Pass Fwd Zone:
          {data.championships["1"].total.stats.totalAccuratePassFwdZone}
        </Text>
        <Text>
          Total Accurate Long Pass:
          {data.championships["1"].total.stats.totalAccurateLongPass}
        </Text>
        <Text>
          Total Long Pass: {data.championships["1"].total.stats.totalLongPass}
        </Text>

        <Text>
          Total Fouled: {data.championships["1"].total.stats.totalFouled}
        </Text>

        <Text style={styles.title2}>
          Average Rating: {data.championships["1"].total.stats.averageRating}
        </Text>
      </ScrollView>
    </View>
  );
}

export default PlayerScreen;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  activityIndicator: { paddingTop: 20 },

  container: {
    height: "100%",
    marginVertical: 20,
    marginHorizontal: 20,
    paddingBottom: 70,
    alignContent: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#3E53CC",
  },
  title2: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
