import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('./assets/mia.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Mia Čosić</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.headers}>About Me</Text>
        <Text style={styles.cvText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus non ab est odio esse eligendi repudiandae molestiae officiis possimus fugit, eum deleniti quaerat fuga molestias consectetur. Laborum, eligendi doloribus?W</Text>
        <Text style={styles.cvText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus non ab est odio esse eligendi repudiandae molestiae officiis possimus fugit, eum deleniti quaerat fuga molestias consectetur. Laborum, eligendi doloribus?W</Text>
        <Text style={styles.cvText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus non ab est odio esse eligendi repudiandae molestiae officiis possimus fugit, eum deleniti quaerat fuga molestias consectetur. Laborum, eligendi doloribus?W</Text>
        <Text style={styles.cvText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus non ab est odio esse eligendi repudiandae molestiae officiis possimus fugit, eum deleniti quaerat fuga molestias consectetur. Laborum, eligendi doloribus?W</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#221F20',
    paddingLeft: 10,
    paddingRight: 10
  },
  imageWrapper: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row"
  },

  image: {
    width: 200,
    height: 200,
  },

  name: {
    fontSize: 24,
    color: "white",
    marginLeft: 15,
  },
  cvSection: {
    flex: 1,
    flexDirection: "column",
    marginTop: 25,

  },
  headers: {
    fontSize: 28,
    color: "white",
  },
  cvText: {
    fontSize: 22,
    color: "white",
    marginTop: 10,
    textAlign: "justify",
  },

});
