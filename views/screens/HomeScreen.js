import React from 'react';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper'
import Quote from 'react-native-quote-generator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, justifyContent:'center', alignItems:'center' }}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: 'row', marginBottom:20 }}>
            <Text style={{ fontSize: 28 }}>AOA!</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>
              Sir
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 18, color: COLORS.grey }}>
            Have a nice day! {'\n'}
            <Text style={{ color: 'orange' }}>
              Welcome in{' '}
              <Text
                style={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'red',
                }}>
                O-SWA
              </Text>
            </Text>
          </Text>
        </View>
      
      </View>
<ScrollView>

      <View  style={{flex:0.5, justifyContent: 'center', marginTop:30}}>
      <Swiper autoplay={true}>
      <View style={{flex:0.5,
    justifyContent:'center',
    alignItems:'center',
   
 }}>
     <Image style={{ width: '100%', height:'50%'}}
          source={require('../../assets/chafingdish.jpg')}
         />

      </View>

<View style={{flex:0.5,
    justifyContent:'center',
    alignItems:'center',
   
 }}>
      <Image style={{ width: '100%', height:'50%'}}
          source={require('../../assets/glass3.jpg')}
         />

      </View>

      <View style={{flex:0.5,
    justifyContent:'center',
    alignItems:'center',
   }}>
      <Image style={{ width: '100%', height:'50%'}}
          source={require('../../assets/DecorFlowers.jpg')}
         />

      </View>

          <View style={{flex:0.5,
    justifyContent:'center',
    alignItems:'center',
   
 }}>
      <Image style={{ width: '100%', height:'50%'}}
          source={require('../../assets/photo3.jpg')}
         />

      </View>

         <View style={{flex:0.5,
    justifyContent:'center',
    alignItems:'center',
   
 }}>
      <Image style={{ width: '100%', height:'70%'}}
          source={require('../../assets/services.jpg')}
         />

      </View>
      </Swiper>
</View>

      <View>
      <Text style={{color:COLORS.primary, fontSize:15, marginRight:20, marginLeft:20, marginTop:20, marginBottom:20, }}> <Text style={{color: 'orange', fontSize:20, fontStyle:'italic', fontWeight:'bold'}}>O-SWA </Text> is the Pakistan's First and Largest Wedding Products and Services Store.  Here, People can get their Desired Products and Services from their Favorite Vendors. 
      </Text>
      </View>

      <View>
      <Text style={{color:COLORS.primary, fontSize:15, marginRight:20, marginLeft:20, marginTop:20, marginBottom:20, }}> <Text style={{color: COLORS.grey, fontSize:20, fontStyle:'italic', fontWeight:'bold'}}>O-SWA </Text> serve the Vendor Services which is the paksitan first trustworthy Vendor's Services store, For being time we will try to enhance our store. 
      </Text>
      </View>

      <View>
      <Text style={{color:COLORS.primary, fontSize:15, marginRight:20, marginLeft:20, marginTop:20, marginBottom:20, }}> <Text style={{color: 'red', fontSize:20, fontStyle:'italic', fontWeight:'bold'}}>O-SWA </Text>  serve the Wedding Products which is the paksitan first trustworthy wedding products store, We are dealing with every kinnd of wedding product and we are trying to enhance this. </Text>
      </View>
      
     </ScrollView>
     
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    
  },
  

});

export default HomeScreen;
