import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  AlertButton,
  TextInput, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';
const FIREBASE_API_ENDPOINT =
  'https://madproject-c2f0c-default-rtdb.firebaseio.com/';
  
const OrderDirectlyScreen = ({ navigation, route }) => {
  const [cond,setcond]=React.useState(true);
    const [name, onChangeName] = React.useState(null);
  const [mob, onChangeMob] = React.useState(null);
  const [credit, onChangeCredit] = React.useState(null);
  const [cnic, onChangeCnic] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);
  const postData = () => {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        name: item.name,
        price: item.price,
        image: item.image,
        Full_Name: name, 
        Mobile_Number: mob,
        Credit_Card: credit,
        Address: address,
        CNIC_Number: cnic,


      }),
    };

    fetch(`${FIREBASE_API_ENDPOINT}/Direct.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  const item = route.params;

if (cond){
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
          Add Product
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.details}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 170,
            }}>
            <Image
              source={item.image}
              
              style={{ height: 220, width: 220, borderRadius: 180 } }
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: 20,
                color: COLORS.white,
              }}>
              {item.name} {'\n'}
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: 20,
                color: COLORS.white,
              }}>
              {item.price}
            </Text>
          </View>
          <Text style={style.detailsText}>
            The Best Product in all over Pakistan
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton
              title="Order Directly"
              onPress={()=>{setcond(false)}}
                
            
            />
            <Text style={{fontWeight:'bold', marginTop:20, fontSize:20,color: 'red'}}>Note: <Text style={{color:'white'}}>Click on 'Order Directly' in just this case if you want to order this product directly  </Text></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

else{return(<View>
      
  <View style={{flexDirection:'row', marginTop:20, marginBottom:20}}>
<Icon  name="arrow-back" size={30} onPress={navigation.goBack}/>
        <Text style={{marginLeft:10, fontSize:20}}>Proceed</Text>
</View>

  

       <View style={{marginLeft:20, padding:20}}>
      
      <Text>Enter name</Text>
      <TextInput
      onChangeText={onChangeName}
          value={name}
      name='Full Name'
      placeholder='Muahmmad Yaseen'
      />

      <Text>Mobile Number</Text>
      <TextInput
      onChangeText={onChangeMob}
          value={mob}
          keyboardType={"number-pad"}
      name='phone'
      placeholder='0321-xxxxxxx'
      />


<Text>Address</Text>
      <TextInput
      onChangeText={onChangeAddress}
          value={address}
      name='address'
      placeholder='Current Home Address'
      />

<Text>CNIC</Text>
      <TextInput
      onChangeText={onChangeCnic}
          value={cnic}
          keyboardType={"number-pad"}
      name='card'
      placeholder='34603-xxxxxx-x'
      />
      
</View>
        
        <TouchableOpacity
          onPress={() => {
            // Function to upload data to firebase
            let obj = { Full_Name: name, 
                        Mobile_Number: mob,
                        Credit_Card: credit,
                        Address: address,
                        CNIC_Number: cnic

                         };
            postData();
            alert('Order has been place Directly')
          }}
          style={{
            backgroundColor: 'orange',
            marginTop: 10,
            color: 'white',
            borderRadius: 20,
            padding: 10,
            alignItems: 'center',
            width: 220,
            marginLeft: 50
          }}>
          <Text style={{ color: 'white', fontSize: 15 }}>Proceed</Text>
        </TouchableOpacity>

  
      </View>)}
    
  };



const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: COLORS.secondary,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 40,
  },
  
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default OrderDirectlyScreen;
