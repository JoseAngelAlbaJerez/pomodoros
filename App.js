import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Pomodoro from './src/components/organism/pomodoro';


export default function App() {


  return (
  Pomodoro()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
