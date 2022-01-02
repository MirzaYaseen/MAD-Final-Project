import  React, {useState, useEffect,useRef, Component} from 'react';
import { View, Text, Input, StyleSheet, BackHandler, TextInput, Button, TouchableOpacity, SafeAreaView, StatusBar,ScrollView, Dimensions,  Alert,  Modal,  Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const FIREBASE_API_ENDPOINT = 'https://madproject-c2f0c-default-rtdb.firebaseio.com/'; 
const postData = (dataxx) => {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(dataxx),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/userSignup.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => alert("Log in Successfully"))
    .catch((error) => console.log('error', error));
};

const Login = () => {
  const [productListScreen, setProductListScreen] = React.useState(false);
  const [availedServiceData, setAvailedServiceData] = React.useState({});
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [number, onChangeNumber] = React.useState(null);
  const [mob, onChangeMob] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);
  const [time, onChangeTime] = React.useState(null);
  const [cnic, onChangeCnic] = React.useState(null);
  const [serv, onChangeService] = React.useState(null);
  const [cond,setcond]=React.useState(true);
  
  if (cond){
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        REGISTER YOURSELF
      </Text>
      <Text style={{fontSize:17, marginLeft: 10, color: 'orange'}}>Enter Full name</Text>

        <Input
        placeholder='Full Name'
        leftIcon={
          <Icon
             name='user'
             size={20}
            color='black'
          />
        }
      />

<Text style={{fontSize:17,marginTop:5,marginLeft: 10, color: 'orange'}}>Enter Email </Text>
<Input placeholder="Email Addrress" secureTextEntry={true} 
leftIcon={
          <Icon
            name='envelope'
            size={20}
            color='black'
          />
        } />      

 <Text style={{fontSize:17,marginTop:5,marginLeft: 10, color: 'orange'}}>Enter Password</Text>
<Input 
placeholder="Password" 
secureTextEntry={true}
leftIcon={
          <Icon
            name='lock'
            size={20}
            color='black'
          />
        } />
<Text style={{fontSize:17,marginTop:5,marginLeft: 10, color: 'orange'}}>Enter Confirm Password</Text>
<Input placeholder="Confirm Password" secureTextEntry={true} 
leftIcon={
          <Icon
            name='lock'
            size={20}
            color='black'
          />
        } />
<Text style={styles.already}>Already Registered? <TouchableOpacity style={{color: 'red'}}  ><Text style={{color:'red', fontSize: 13 }}> Log In Here </Text> 
        </TouchableOpacity>
      </Text>
<TouchableOpacity onPress ={() => navigator(Signup)} style={styles.admbtn}><Text style={{color:'white', fontSize: 15}}  > Submit </Text> 
        </TouchableOpacity>
      </View>
</ScrollView>
    );
}
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orage',
    padding: 5,
  },
  paragraph: {
    margin: 12,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "orange"
  },
  admbtn:{
    marginTop: 10,
    backgroundColor: "#3672F8",
    borderRadius: 120,
    padding: 10,
    alignItems: "center",
    color: 'white',
    width: 250,
    marginLeft: 50
  },
  already:{
    marginTop: 4,
    color: 'blue',
    marginLeft: 80,
    fontSize:13
  },
  
});


export default Signup;