import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import products from '../../consts/products';
import choosenProducts from '../../consts/cartItems';
import { PrimaryButton } from '../components/Button';
const FIREBASE_API_ENDPOINT = 'https://madproject-c2f0c-default-rtdb.firebaseio.com/'; 
const postData = (dataxx) => {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(dataxx),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/AddtoCart.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => alert("Thank u Sir! Your Order has been Placed, Within 24 hours, we'll deliever your item"))
    .catch((error) => console.log('error', error));
};

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = React.useState([...choosenProducts]);
  const [cond,setcond]=React.useState(true);
  const [name, onChangeName] = React.useState(null);
  const [mob, onChangeMob] = React.useState(null);
  const [credit, onChangeCredit] = React.useState(null);
  const [quantity, onChangeQuantity] = React.useState(null);
  const [cnic, onChangeCnic] = React.useState(null);
  const [pro, onChangePro] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);
  
  const [totalAmount, setTotalAmount] = React.useState(
    choosenProducts.reduce(function (accumulator, currentValue) {
      let num =
        parseFloat(accumulator) +
        parseFloat(currentValue.price) * currentValue.quantity;
      return num.toFixed(2);
    }, 0)
  );

  const CartCard = ({ item }) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {item.ingredients}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.price}</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            {item.quantity}
          </Text>
          <View style={style.actionBtn}>
            <Icon
              onPress={() => {
                const quantity = choosenProducts.find(
                  (e) => e.id == item.id
                ).quantity;
                if (quantity > 0) {
                  choosenProducts.find((e) => e.id == item.id).quantity--;

                  setCartItems(() => {
                    return [...choosenProducts];
                  });
                  setTotalAmount(
                    choosenProducts.reduce(function (
                      accumulator,
                      currentValue
                    ) {
                      let num =
                        parseFloat(accumulator) +
                        parseFloat(currentValue.price) * currentValue.quantity;
                      return num.toFixed(2);
                    },
                    0)
                  );
                }
              }}
              name="remove"
              size={25}
              color={COLORS.white}
            />
            <Icon
              onPress={() => {
                const quantity = choosenProducts.filter(
                  (e) => e.id == item.id
                )[0].quantity++;
                setCartItems(() => {
                  return [...choosenProducts];
                });
                setTotalAmount(
                  choosenProducts.reduce(function (accumulator, currentValue) {
                    let num =
                      parseFloat(accumulator) +
                      parseFloat(currentValue.price) * currentValue.quantity;
                    return num.toFixed(2);
                  }, 0)
                );
              }}
              name="add"
              size={25}
              color={COLORS.white}
            />
          </View>
        </View>
      </View>
    );
  };
      if(cond){
        
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={cartItems}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                ${totalAmount}
              </Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryButton title="CHECKOUT" onPress={()=>{setcond(false)}} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
      }
else{return(<View>
      
  <View style={{flexDirection:'row', marginTop:20, marginBottom:20}}>
<Icon  name="arrow-back" size={30} onPress={navigation.goBack}/>
        <Text style={{marginLeft:10, fontSize:20}}>Proceed</Text>
</View>

       <View style={{flexDirection:'row'}}>
          <Image style={{ width: '30%', height:'30%' , marginLeft:10}}
          source={require('../../assets/services.jpg')}
         />
</View>
<View style={{flexDirection:'row'}}>
          <Image style={{ width: '30%', height:'30%' , marginLeft:10}}
          source={require('../../assets/services.jpg')}
         />
         
     </View>
     <View style={{flexDirection:'row'}}>    
          <Image style={{ width: '30%', height:'30%' , marginLeft:10}}
          source={require('../../assets/services.jpg')}
         />
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
      name='phone'
      placeholder='0321-xxxxxxx'
      />

      <Text>Quantity</Text>
      <TextInput
      onChangeText={onChangeQuantity}
          value={quantity}
      name='quantity'
      placeholder='Enter Quantity you want?'
      />

      <Text>Product Name</Text>
      <TextInput
      onChangeText={onChangePro}
          value={pro}
      name='card'
      placeholder='Salad bar/Wedding Flowers etc.'
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
                        Quantity: quantity,
                        Product_Name: pro,
                        Address: address,
                        CNIC_Number: cnic,
                        Total_Price: totalAmount,
                
                         };
            postData(obj);
            
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
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;
