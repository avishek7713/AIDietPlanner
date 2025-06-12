import { Dimensions, Image, Text, View } from "react-native";
import Button from "../components/shared/Button";
import Colors from "../shared/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image source={require('./../assets/images/landing.jpg')} 
        style={{
          width: '100%',
          height: Dimensions.get('window').height
        }}
      />
      <View style={{
        position: 'absolute',
        height: Dimensions.get('window').height,
        backgroundColor: '#0707075e',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        }}>
        
        <Image source={require('./../assets/images/logo.png')}
          style={{
            width: 100,
            height: 150,
            marginTop: 100,
          }}
        />

        <Text style={{
            fontSize: 30,
            color: Colors.WHITE,
            fontWeight: 'bold',
          }}>AI Diet Planner
        </Text>

        <Text style={{
            fontSize: 20,
            color: Colors.WHITE,
            marginTop: 10,
            marginHorizontal: 20,
            textAlign: 'center',
            opacity: 0.8
          }}>Craft delicious, healthy meal plans tailored to achieve your goals with ease.
        </Text>
      </View>
      <View style={{
          position: 'absolute',
          bottom: 25,
          width: '100%',
          padding: 20,
        }}>
        <Button 
          title={'Get Started'}
          onPress={() => console.log('Get Started Pressed')}
        />
      </View>
    </View>
  );
}
