import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Linking } from 'react-native';
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
        <Text style={styles.headers}>Obrazovanje</Text>
        <Text style={styles.cvText}>2012-2016 II. gimnazija Osijek</Text>
        <Text style={styles.cvText}>2017-2021 Preddiplomski studij Informatologije, Filozofski fakultet Osijek</Text>
        <Text style={styles.cvText}>2021-2023 Diplomski studij Informatologije i Informacijske tehnologije, Filozofski fakultet Osijek</Text>
      </View>
      <View style={styles.cvSection}>
        <Text style={styles.headers}>Radno iskustvo</Text>
        <Text style={styles.cvText}>Volontiranje: KulenDayz 2021.-2022.</Text>
        <Text style={styles.cvText}
          onPress={() => Linking.openURL('https://lumenspei.com/')}
        >
          Office manager @ Lumen Spei doo 2022.-...
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.touchable}
          onPress={() => Alert.alert("Mobitel: '+385 99 255 8507', Mail:'mcosic@ffos.hr' ")}
        >
          <Text style={styles.contact}>CONTACT INFO</Text>
        </TouchableOpacity>
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
    color: "#FCBF4F",
    marginLeft: 15,
  },
  cvSection: {
    flex: 1,
    flexDirection: "column",
    marginTop: 25,

  },
  headers: {
    fontSize: 28,
    color: "#FCBF4F",
  },
  cvText: {
    fontSize: 22,
    color: "white",
    marginTop: 10,
  },

  touchable: {
    marginTop: 50,
  },
  contact: {
    fontSize: 30,
    color: "#FCBF4F",
  },
});
