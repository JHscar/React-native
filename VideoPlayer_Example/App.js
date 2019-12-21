import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';

export default class App extends React.Component {
  render() {
    return (
      <Video
        source={{ uri: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1280_10MG.mp4' }}
        shouldPlay
        useNativeControls
        style={{ width: "100%", height: "50%" }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
