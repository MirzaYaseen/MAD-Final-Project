import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';


const ManageOrders = ({ navigation }) => {
  const [orders, setOrders] = React.useState([]);
  const [isloading, setloading] = React.useState(false);

  const getOrders = async () => {
    // setLoading(true);
    var axios = require('axios');
    setloading(true);
    axios
      .get(
        'https://madproject-c2f0c-default-rtdb.firebaseio.com/Appointments.json'
      )
      .then((response) => {
        console.log('data = ' + JSON.stringify(response.data));
        setOrders(response.data);
        setloading(false);
      });
    // const response = await fetch(
    //   `https://madproject-c2f0c-default-rtdb.firebaseio.com/Appointments.json`
    // );
    // console.log('response = ' + JSON.stringify(response));
    // const res = await JSON.parse(response);
    // console.log('test' + res);
    // setdata(res);
    // console.log('data = ' + data);
    // setLoading(false);
  };
  React.useEffect(() => {
    const onFocus = navigation.addListener(
      'focus',
      () => {
        getOrders();
      },
      []
    );

    // Return the function to onFocus from the event so it gets removed on unmount
    return onFocus;
  }, [navigation]);
  if (isloading) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }
  return (
     <ScrollView>
    <View>
    <Text style={{color:'red', marginLeft:'18%', marginTop:20, fontSize:25, marginBottom:20 }}>Booked Appointment</Text>
   
    <View style={{backgroundColor:'#E5E5E5', borderRadius:20, marginTop:20, marginLeft:20, marginRight:20}}>
    <ScrollView>
      {console.log(JSON.stringify(Object.entries(orders)))}
      <Text style={{marginTop:20, marginLeft:5, fontSize:15}}> Customer Names</Text>
      {Object.entries(orders).map((x) => <Text style={{color:'orange', fontSize:15, marginLeft:20}}>{x[1].Full_Name}</Text>)}
      <Text style={{marginTop:20, marginLeft:5}}> Mobile Numbers</Text>
      {console.log(JSON.stringify(Object.entries(orders)))}
      {Object.entries(orders).map((x) => <Text style={{color:'orange', fontSize:15, marginLeft:20}}>{x[1].Mobile_Number}</Text>)}
       <Text style={{marginTop:20, marginLeft:5}}> CNIC Numbers</Text>
      {console.log(JSON.stringify(Object.entries(orders)))}
      {Object.entries(orders).map((x) => <Text style={{color:'orange', fontSize:15, marginLeft:20}}>{x[1].CNIC_Number}</Text>)}
       <Text style={{marginTop:20, marginLeft:5}}> Appointment Time</Text>
      {console.log(JSON.stringify(Object.entries(orders)))}
      {Object.entries(orders).map((x) => <Text style={{color:'orange', fontSize:15, marginLeft:20}}>{x[1].Appointment_time}</Text>)}
       <Text style={{marginTop:20, marginLeft:5}}> Appointment Date</Text>
      {console.log(JSON.stringify(Object.entries(orders)))}
      {Object.entries(orders).map((x) => <Text style={{color:'orange', fontSize:15, marginLeft:20}}>{x[1].Appointment_Date}</Text>)}
       <Text style={{marginTop:20, marginLeft:5}}> Desired Service </Text>
      {console.log(JSON.stringify(Object.entries(orders)))}
      {Object.entries(orders).map((x) => <Text style={{color:'orange', fontSize:15, marginLeft:20}}>{x[1].Service_Name}</Text>)}
</ScrollView>
      </View>
      
    </View>
    </ScrollView>
  );
};
export default ManageOrders;
