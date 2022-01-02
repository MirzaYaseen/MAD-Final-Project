import React from 'react';
import {Input,Text, StyleSheet, View, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PrimaryButton} from '../components/Button';


const FIREBASE_API_ENDPOINT = 'https://madproject-c2f0c-default-rtdb.firebaseio.com/'; 
const postData = (dataxx) => {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(dataxx),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/userlogin.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => alert("Register Successfully"))
    .catch((error) => console.log('error', error));
};
const FrontScreenAfterLogin = ({navigation}) => {
  const [productListScreen, setProductListScreen] = React.useState(false);
  const [availedServiceData, setAvailedServiceData] = React.useState({});
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [cond,setcond]=React.useState(true);
  const [name, onChangeName] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [confirmpass, onChangeConfirmPass] = React.useState(null);
  
  
if (cond){
  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <ScrollView>
      <View style={{height: 390}}>
      
      <Text style={{color:'red', fontSize:75, marginTop:10,  marginLeft:'27%'}}>O<Text style={{color:'brown', fontSize:50}}>-</Text><Text style={{color:'orange', fontSize:50}}>SWA</Text></Text>
      
        <Image style={{ width: '100%', resizeMode: 'contain',top:-60, marginTop:20}}
          source={require('../../assets/chafingdish.jpg')}
         />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 25, marginTop:10, fontWeight: 'bold', textAlign: 'center'}}>
            Get Best Services and Products Here
          </Text>
        </View>

     
      <Text style={{fontSize:17, color: COLORS.primary, marginBottom:10, marginTop:20}}>Enter Full name</Text>

        <TextInput
        placeholder='Full Name'
        leftIcon={
          <Icon
             name='user'
             size={20}
            color='black'
          />
        }
      />


 <Text style={{fontSize:17,marginTop:5, color:COLORS.primary, marginBottom:10}}>Enter Password</Text>
<TextInput 
style={{marginBottom:30}}
placeholder="Password" 
secureTextEntry={true}
leftIcon={
          <Icon
            name='lock'
            size={20}
            color='black'
          />
        } />
        
<View style={{marginBottom:20}}>
<Text style={{flexDirection:'row', color:'red'}}>Have an Account?<TouchableOpacity  onPress={()=>{setcond(false)}}><Text>Sign up </Text>
</TouchableOpacity > </Text>
</View>
        <PrimaryButton 
          onPress={() => navigation.navigate('Home')}
          title="Log in"
        />

      </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}
else{return(<View>
      
  <View style={{flexDirection:'row', marginTop:60, marginBottom:20}}>
<Icon  name="arrow-back" size={30} onPress={navigation.goBack}/>
        <Text style={{marginLeft:10, fontSize:20}}>Sign up</Text>
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

      <Text>Email </Text>
      <TextInput
      onChangeText={onChangeEmail}
          value={email}
      name='envelope'
      placeholder='yaseen56575@gmail.com'
      />


<Text>Password</Text>
      <TextInput
      onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
      name='lock'
      placeholder='Password should be greater than 6 characters'
      />

<Text>Confirm Password</Text>
      <TextInput
      onChangeText={onChangeConfirmPass}
          value={confirmpass}
          secureTextEntry={true}
      name='lock'
      placeholder='Re-enter your Password'
      />
      
</View>
        
        <TouchableOpacity
          onPress={() => {
            // Function to upload data to firebase
            let obj = { Full_Name: name, 
                        Mail: email,
                        User_Password:password ,
                        User_COnfirm_Password: confirmpass,
                        

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
            justifyContent:'center',
            width: 220,
            marginLeft: 50
            
          }}>
          <Text style={{ color: 'white', fontSize: 15 }}>Register</Text>
        </TouchableOpacity>

  
      </View>)
      }
    
  };

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  
});


export default FrontScreenAfterLogin;