import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.font2}>Hello, Paprika-Regular </Text>
        <Text style={styles.font3}>Hello, Combo-Regular </Text>
        <Text style={styles.font4}>Hello, QwitcherGrypen-Bold </Text>
        <Text style={styles.font1}>Hello, QwitcherGrypen-Regular </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  font1: {
    fontSize: 30,
    fontFamily: 'QwitcherGrypen-Regular',
  },
  font2: {
    fontSize: 28,
    fontFamily: 'Paprika-Regular',
  },
  font3: {
    fontSize: 26,
    fontFamily: 'Combo-Regular',
  },
  font4: {
    fontSize: 24,
    fontFamily: 'QwitcherGrypen-Bold',
  },
});

export default App;
