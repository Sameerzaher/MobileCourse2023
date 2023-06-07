/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#F6FAF6',
    flex: 1,
    borderWidth: 2,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.headerContainer}>
        <View style={styles.LogoContainer}>
          <Image source={require('./src/logoMyCar.png')} style={styles.Logo} />
        </View>
        
      </View>
      <View style={styles.rootContainer}>
        <View style={styles.maincontainer}>
          <Text style={styles.labelTXT}>
            To Login to MyCar App Please enter Email Address and your Phone Number
          </Text>
          <View style={styles.sectionStyle}>
  <TextInput
    style={styles.input}
    placeholder="Enter Your Email Here"
    underlineColorAndroid="transparent"
  />
  <Image
    source={require('./src/images/callSquare.png')}
    style={styles.imageStyle}
  />
</View>
<View style={styles.sectionStyle}>
  <TextInput
    style={styles.input}
    placeholder="Enter Your Phone Here"
    underlineColorAndroid="transparent"
  />
  <Image
    source={require('./src/images/messageSquare.png')}
    style={styles.imageStyle}
  />
</View>

        </View>
      </View>
      <View style={[styles.footerContainer]}>
        <Image
          source={require('./src/images/login-button-arrow.png')}
          style={styles.footerImage}
        />
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>Need Help</Text>
          <Text style={styles.footerText2}>Contact Our Support</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const windowsHight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F6FAF6',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    height: windowsHight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: 'white',
    justifyContent: 'space-between',
    backgroundColor: '#F6FAF6',

  },
 
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    
  },
  LogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  Logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  
  
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    width: '100%',
    paddingHorizontal: 30,
  },
  labelTXT: {
    width: 100,
    height: 50,
    minWidth: 250,
    fontFamily: 'Cochin',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',

  },
  input: {
    flex: 1,
    height: 40,
    marginVertical: 10,
    padding: 10,
    
    minWidth: 250,
  },
  footerContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#F6FAF6',
    marginBottom: 60,
  },
  footerImage: {
    width: 60,
    height: 60,
    backgroundColor: '#6b00b3',
    marginHorizontal: 20,
    borderRadius: 60 / 2,
    transform: [{ rotate: '180deg' }],
  },
  footerTextContainer: {
    flex: 1,
  },
  footerText: {
    fontSize: 16,
    marginRight: 30,
    fontWeight: 'bold',
  },
  footerText2: {
    fontSize: 16,
    marginRight: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;