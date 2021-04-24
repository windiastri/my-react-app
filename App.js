/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from "react";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Container } from "native-base";


import { Colors } from "react-native/Libraries/NewAppScreen";

const App: () => Node = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkTheme ? Colors.darker : Colors.lighter,
  };

  const colorStyle = {
    color: isDarkTheme ? "white" : "black",
  };

  const onPressHandler = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Container style={backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={colorStyle}>Hello world !!</Text>
        <Button onPress={() => onPressHandler()} style={{
          borderRadius: 5,
          padding: 8,
          backgroundColor: isDarkTheme ? Colors.lighter : Colors.darker
        }}>
          <Text style={{ color: isDarkTheme ? "black" : "white" }}>{isDarkTheme ? "Light mode" : "Dark mode"}</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
