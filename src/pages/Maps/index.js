import React, { Component } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default class Maps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: -8.2798452,
      longitude: -35.9269217,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0121,
    };
  }

  componentDidMount() {
    this.requestLocationPermission();
    this.getPosition();
    this.watchPosition();
  }

  watchPosition = () => {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }, () => {
          console.log(position);
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  getPosition = () => {
    try {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          console.log('aksjdkajdjasd');
          console.log(location);
          const { coords } = location;
          this.setState({
            latitude: coords.latitude,
            longitude: coords.longitude,
          }, () => {
            console.log(this.state);
          });
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
          style={styles.map}
          followsUserLocation
          region={this.state}
          loadingEnabled
          initialRegion={this.state}
        >
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            image={require('~/assets/car.png')}
          />
        </MapView>
      </View>
    );
  }
}
