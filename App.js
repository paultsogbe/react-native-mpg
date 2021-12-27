import React, { useState, useEffect } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import HomeScreen from "./containers/HomeScreen";
import ClubsScreen from "./containers/ClubsScreen";
import PlayersScreen from "./containers/PlayersScreen";
import PlayerScreen from "./containers/PlayerScreen";

import axios from "axios";
import colors from "./assets/colors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.mpg.football/api/data/championship-clubs`
        );
        setData(response.data.championshipClubs);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        alert("An error occurred");
      }
    };

    fetchData();
  }, []);

  function LogoTitle() {
    return (
      <Image
        style={{ width: 80, height: 30 }}
        source={require("./assets/logo2.png")}
      />
    );
  }

  return (
    <NavigationContainer>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.pink} />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: "white",
              },
              headerTitleSTyle: { color: "white" },
              headerTitle: (props) => <LogoTitle {...props} />,
            }}
          >
            {() => (
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarActiveTintColor: "#3E53CC",
                  tabBarInactiveTintColor: "gray",
                }}
              >
                <Tab.Screen
                  name="TabHome"
                  options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={"ios-home"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Home"
                        options={{
                          headerStyle: {
                            backgroundColor: "#4ED04E",
                          },
                          headerTitleSTyle: { color: "#4ED04E" },
                          headerTitle: (props) => <LogoTitle {...props} />,
                          headerBackImage: () => (
                            <>
                              <View style={{ marginLeft: 20 }}>
                                <Ionicons
                                  name="chevron-back-circle"
                                  size={28}
                                  color="white"
                                />
                              </View>
                            </>
                          ),
                          headerBackTitleVisible: false,
                        }}
                      >
                        {(props) => <HomeScreen {...props} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabClubs"
                  options={{
                    tabBarLabel: "Clubs",
                    tabBarIcon: ({ color, size }) => (
                      <Entypo name={"sports-club"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Clubs"
                        options={{
                          headerStyle: {
                            backgroundColor: "#4ED04E",
                          },
                          headerTitleSTyle: { color: "#4ED04E" },
                          headerTitle: (props) => <LogoTitle {...props} />,
                          headerBackImage: () => (
                            <>
                              <View style={{ marginLeft: 20 }}>
                                <Ionicons
                                  name="chevron-back-circle"
                                  size={28}
                                  color="white"
                                />
                              </View>
                            </>
                          ),
                          headerBackTitleVisible: false,
                        }}
                      >
                        {() => <ClubsScreen data={data} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabPlayers"
                  options={{
                    tabBarLabel: "Players",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={"football"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Players"
                        options={{
                          headerStyle: {
                            backgroundColor: "#4ED04E",
                          },
                          headerTitleSTyle: { color: "#4ED04E" },
                          headerTitle: (props) => <LogoTitle {...props} />,
                          headerBackImage: () => (
                            <>
                              <View style={{ marginLeft: 20 }}>
                                <Ionicons
                                  name="chevron-back-circle"
                                  size={28}
                                  color="#3E53CC"
                                />
                              </View>
                            </>
                          ),
                          headerBackTitleVisible: false,
                        }}
                      >
                        {() => <PlayersScreen />}
                      </Stack.Screen>

                      <Stack.Screen
                        name="Player1"
                        options={{
                          headerStyle: {
                            backgroundColor: "#4ED04E",
                          },
                          headerTitleSTyle: { color: "#4ED04E" },
                          headerTitle: (props) => <LogoTitle {...props} />,
                          headerBackImage: () => (
                            <>
                              <View style={{ marginLeft: 20 }}>
                                <Ionicons
                                  name="caret-back-circle-sharp"
                                  size={28}
                                  color="#3E53CC"
                                />
                              </View>
                            </>
                          ),
                          headerBackTitleVisible: false,
                        }}
                      >
                        {(props) => <PlayerScreen {...props} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
