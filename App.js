import React from 'react';
import {SafeAreaView, StyleSheet, View, Button, StatusBar} from 'react-native';
import firebase from 'react-native-firebase';

// 0.60 (added auto linking)

const App = () => {
  async function add() {
    try {
      await firebase
        .firestore()
        .collection('test')
        .add({number: Math.random()});

      alert('data added');
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Button title="Add" onPress={add} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
