/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";
import { themes } from "./Themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  modal: {
    flex: 1,
  },
  modalText: {
    margin: 10,
    fontSize: 22,
    color: "white",
  },
  value: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    marginRight: 25,
    marginBottom: 10,
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      modalIsShown: false,
      currentTheme: themes[0],
    };
  }

  handleTap = (type, value) => {
    this.setState((state) => {
      return calculator(type, value, state);
    });
  };

  // .toFixed(this.state.currentValue.split(".")[1].length ?? 0)

  render() {
    const { currentTheme } = this.state;

    return (
      <View style={[styles.container, currentTheme.backgroundView]}>
        <StatusBar barStyle={currentTheme.statusBarStyle} />
        <SafeAreaView>
          <Modal animationType="slide" visible={this.state.modalIsShown}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView
              style={[styles.modal, { backgroundColor: "#313135" }]}
            >
              <Text style={styles.modalText}>
                Select a theme from the list below:
              </Text>
              <FlatList
                data={themes}
                keyExtractor={(theme) => theme.name}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      ...item.backgroundView,
                      height: 75,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => {
                      this.setState({
                        currentTheme: themes[themes.indexOf(item)],
                        modalIsShown: false,
                      });
                    }}
                  >
                    <Text style={{ ...item.resultText, fontSize: 30 }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </SafeAreaView>
          </Modal>
          <Text style={[styles.value, currentTheme.resultText]}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            {/* Square Root */}
            <Button
              text={
                <MaterialCommunityIcons
                  name="square-root"
                  size={50}
                  color={currentTheme.textSecondary.color}
                />
              }
              theme="secondary"
              onPress={() => this.handleTap("sq-root")}
              appTheme={currentTheme}
            />
            {/* X Squared  */}
            <Button
              text={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <FontAwesome
                  name="superscript"
                  size={40}
                  color={currentTheme.textSecondary.color}
                />
              }
              theme="secondary"
              onPress={() => this.handleTap("squared")}
              appTheme={currentTheme}
            />
            {/* Factorial */}
            <Button
              text="!"
              theme="secondary"
              onPress={() => this.handleTap("factorial")}
              appTheme={currentTheme}
            />
            {/* Color Palette */}
            <Button
              text={
                <Ionicons
                  name="ios-color-palette"
                  size={40}
                  color={currentTheme.textAccent.color}
                />
              }
              theme="accent"
              onPress={() => this.setState({ modalIsShown: true })}
              appTheme={currentTheme}
            />
          </Row>
          <Row>
            {/* Clear */}
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
              appTheme={currentTheme}
            />
            {/* Pos/Neg */}
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
              appTheme={currentTheme}
            />
            {/* Percentage */}
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
              appTheme={currentTheme}
            />
            <Button
              text={
                <FontAwesome5
                  name="divide"
                  size={27}
                  color={currentTheme.textAccent.color}
                />
              }
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
              appTheme={currentTheme}
            />
          </Row>
          <Row>
            <Button
              text="7"
              onPress={() => this.handleTap("number", 7)}
              appTheme={currentTheme}
            />
            <Button
              text="8"
              onPress={() => this.handleTap("number", 8)}
              appTheme={currentTheme}
            />
            <Button
              text="9"
              onPress={() => this.handleTap("number", 9)}
              appTheme={currentTheme}
            />
            <Button
              text={
                <FontAwesome5
                  name="times"
                  size={30}
                  color={currentTheme.textAccent.color}
                />
              }
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
              appTheme={currentTheme}
            />
          </Row>
          <Row>
            <Button
              text="4"
              onPress={() => this.handleTap("number", 4)}
              appTheme={currentTheme}
            />
            <Button
              text="5"
              onPress={() => this.handleTap("number", 5)}
              appTheme={currentTheme}
            />
            <Button
              text="6"
              onPress={() => this.handleTap("number", 6)}
              appTheme={currentTheme}
            />
            <Button
              text="–"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
              appTheme={currentTheme}
            />
          </Row>
          <Row>
            <Button
              text="1"
              onPress={() => this.handleTap("number", 1)}
              appTheme={currentTheme}
            />
            <Button
              text="2"
              onPress={() => this.handleTap("number", 2)}
              appTheme={currentTheme}
            />
            <Button
              text="3"
              onPress={() => this.handleTap("number", 3)}
              appTheme={currentTheme}
            />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
              appTheme={currentTheme}
            />
          </Row>
          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap("number", 0)}
              appTheme={currentTheme}
            />
            <Button
              text="."
              onPress={() => this.handleTap("number", ".")}
              appTheme={currentTheme}
            />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
              appTheme={currentTheme}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
