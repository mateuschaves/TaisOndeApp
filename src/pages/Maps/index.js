import React, { Component } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default class Maps extends Component {
  componentDidMount() {
    this.requestLocationPermission();
    this.getPosition();
  }

  getPosition = () => {
    try {
      const teste = navigator.geolocation.getCurrentPosition(
        (location) => {
          console.log('aksjdkajdjasd');
          console.log(location);
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 },
      );
    } catch (error) {
      console.log(error);
    }
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      console.log(granted);
      if (granted) {
        console.log("You can use the ACCESS_FINE_LOCATION");
      } else {
        console.log("ACCESS_FINE_LOCATION permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}
