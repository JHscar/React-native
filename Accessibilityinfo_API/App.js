import React from 'react';
import { StyleSheet, Text, View, AccessibilityInfo } from 'react-native';

export default class App extends React.Component {

  state = {
    reduceMotionEnabled: false,
    screenReaderEnabled: false,
    boldTextEnabled: false,
    grayScaleEnabled: false,
    reduceTransprencyEnabled: false
  };


  componentDidMount() {
    AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      this.handleReduceMotionToggled,
    );
    AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      this.handleScreenReaderToggled,
    );
    AccessibilityInfo.addEventListener(
      'boldTextChanged',
      this.handleBoldTextToggled,
    );
    AccessibilityInfo.addEventListener(
      'grayscaleChanged',
      this.handleGrayscaleToggled,
    );
    AccessibilityInfo.addEventListener(
      'reduceTransparencyChanged',
      this.handleReduceMotionToggled,
    );



    AccessibilityInfo.isReduceMotionEnabled().then((reduceMotionEnabled) => {
      this.setState({ reduceMotionEnabled });
    });
    AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
      this.setState({ screenReaderEnabled });
    });
    AccessibilityInfo.isBoldTextEnabled().then((boldTextEnabled) => {
      this.setState({ boldTextEnabled });
    });
    AccessibilityInfo.isGrayscaleEnabled().then((grayScaleEnabled) => {
      this.setState({ grayScaleEnabled });
    });
    AccessibilityInfo.isReduceTransparencyEnabled().then((reduceTransprencyEnabled) => {
      this.setState({ reduceTransprencyEnabled });
    });


  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'reduceMotionChanged',
      this.handleReduceMotionToggled,
    );
    AccessibilityInfo.removeEventListener(
      'screenReaderChanged',
      this.handleScreenReaderToggled,
    );
    AccessibilityInfo.removeEventListener(
      'boldTextChanged',
      this.handleBoldTextToggled,
    );
    AccessibilityInfo.removeEventListener(
      'grayscaleChanged',
      this.handleGrayscaleToggled,
    );
    AccessibilityInfo.removeEventListener(
      'reduceTransparencyChanged',
      this.handleReduceMotionToggled,
    );
  }


  handleReduceMotionToggled = (reduceMotionEnabled) => {
    this.setState({ reduceMotionEnabled });
  };

  handleScreenReaderToggled = (screenReaderEnabled) => {
    this.setState({ screenReaderEnabled });
  };
  handleBoldTextToggled = (boldTextEnabled) => {
    this.setState({ boldTextEnabled });
  };

  handleGrayscaleToggled = (grayScaleEnabled) => {
    this.setState({ grayScaleEnabled });
  };
  handleReduceTransparencyToggled = (reduceTransprencyEnabled) => {
    this.setState({ reduceTransprencyEnabled });
  };


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.statusView}>
          <Text>Screen Reader</Text>
          <View style={{ ...styles.status, backgroundColor: this.state.screenReaderEnabled ? "green" : "red" }} />
        </View>
        <View style={styles.statusView}>
          <Text>Reduce Motion</Text>
          <View style={{ ...styles.status, backgroundColor: this.state.reduceMotionEnabled ? "green" : "red" }} />
        </View>
        <View style={styles.statusView}>
          <Text>Bold text</Text>
          <View style={{ ...styles.status, backgroundColor: this.state.boldTextEnabled ? "green" : "red" }} />
        </View>
        <View style={styles.statusView}>
          <Text>Grayscale</Text>
          <View style={{ ...styles.status, backgroundColor: this.state.grayScaleEnabled ? "green" : "red" }} />
        </View>
        <View style={styles.statusView}>
          <Text>Reduce Transparency</Text>
          <View style={{ ...styles.status, backgroundColor: this.state.reduceMotionEnabled ? "green" : "red" }} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "50%",
    marginBottom: 10
  },
  status: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginLeft: 10
  }
});
