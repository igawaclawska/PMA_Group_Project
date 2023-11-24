import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from "expo-location";


// map import goes here // 

//map style vector 

const mapJson = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffeb3b"
      },
      {
        "weight": 3
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#1f0038"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

// default markers
let defaultLocations = [
  {
    title: "First",
    location: {
      latitude: 55.60866491013769,
      longitude: 12.5911277895021
    },
    description: "Hidden Location #1"
  },
  {
    title: "Second",
    location: {
      latitude: 55.813353748065204,
      longitude: 12.34104207156517
    },
    description: "Hidden Location #2"
  }
];

export const HomePage = () => {

  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({ latitude: 55.60866491013769,
    longitude: 12.34104207156517});
const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
      // Request permission to access the device's location
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Permission to access location was denied");
          return;
        }
  
        // Get the current position
        let location = await Location.getCurrentPositionAsync({});
        setCurrentPosition({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      })();
    }, []); // Run this effect only once when the component mounts

 
    const showDefaultLocations = () => {
      return defaultLocations.map((item, index) => {
        return (
          <Marker 
            key={index}
            coordinate={item.location}
            title={item.title}
            description={item.description}
            pinColor={'#FFC0CB'}
            
          />
        )
      });
    };
  
const onRegionChange = (region) =>{


  // console log region change
  console.log(region);
}



  return (
    
   <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Map view goes Here</Text> 

      <MapView style={styles.map}
      onRegionChange={onRegionChange}
      initialRegion={{
      latitude: 55.71679184033459,
      latitudeDelta: 0.8060190506549958,
      longitude: 12.374072260726619,
      longitudeDelta: 0.884737209682612,}} 
      customMapStyle={mapJson}
>
   


{/* Maps through array DefaultLocations and displays markers*/}
    
    {showDefaultLocations()}




{/* Dragable marker */}
    <Marker
    draggable
    coordinate={draggableMarkerCoord}
    onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
    pinColor="#D4AFEA"
    />



{/* Marker to display anything insde using callout */}


<Marker 
pinColor="#D4AFEA"
coordinate={{latitude: 55.671652929902606, longitude: 12.398517827563387}}
>
<Callout>

  <Text>Anything can be displayed from here</Text>
</Callout>
</Marker>




{/* Get current position of user */}

{currentPosition && (
        <Marker
          title="You are here"
          description="Right here..."
          pinColor="#0000FF"
          coordinate={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
          }}
        />
      )}

        
</MapView>
  </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   
  },
  map: {
   
    width: '100%',
    height: '100%',
    zIndex: 1
  }
});
