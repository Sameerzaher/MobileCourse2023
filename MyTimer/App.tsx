import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const windowHeight = Dimensions.get('window').height;
  const footerHeight = windowHeight * 0.2;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.HeaderContainer}>
        <View style={styles.LogoContainer}>
          <Image source={require('./src/logo.png')} style={styles.Logo} />
        </View>
        <View style={styles.MyTimerContainer}>
          <Text style={styles.MyTimerText}>My Timer</Text>
        </View>
        <View style={styles.PlaceholderContainer}></View>
      </View>
      <View style={styles.rootContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter Email" />
          <TextInput style={[styles.input, {keyboardType: 'numeric'}]} placeholder="Enter Number" />
        </View>
      </View>
      <View style={[styles.footerContainer, {height: footerHeight}]}>
        <Image source={require('./src/login-button-arrow.png')} style={styles.footerImage} />
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>צריך עזרה</Text>
          <Text style={styles.footerText}>יצירת קשר עם התמיכה</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'yellow',
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
  },
  LogoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  Logo: {
    width: 50,
    height: 50,
  },
  MyTimerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MyTimerText: {
    fontSize: 24,
  },
  PlaceholderContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
  },
  input: {
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    minWidth: 250,
  },
  footerContainer: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  footerImage: {
    width: 30,
    height: 30,
  },
  footerTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default App;
