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

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { Input, Avatar } from 'react-native-elements';
import { SecondaryButton } from '../components/Button';
import Constants from 'expo-constants';
import categories from '../../consts/categories';
import services from '../../consts/services';
const { width } = Dimensions.get('screen');
const cardWidth = width / 1 - 20;
const FIREBASE_API_ENDPOINT = 'https://madproject-c2f0c-default-rtdb.firebaseio.com/'; 
const postData = (dataxx) => {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(dataxx),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/Appointments.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => alert("Thank u Sir! Your Appointment hass been booked with this seller! Vendor will contact you shortly"))
    .catch((error) => console.log('error', error));
};


const CreateAppointment = ({ navigation }) => {
  const [productListScreen, setProductListScreen] = React.useState(false);
  const [availedServiceData, setAvailedServiceData] = React.useState({});
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [number, onChangeNumber] = React.useState(null);
  const [mob, onChangeMob] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);
  const [time, onChangeTime] = React.useState(null);
  const [cnic, onChangeCnic] = React.useState(null);
  const [serv, onChangeService] = React.useState(null);
  const ListCategories = () => {
    return (
    
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.secondary
                    : COLORS.light,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{
                    height: 35,
                    width: 35,
                    resizeMode: 'cover',
                    borderRadius: 25,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginLeft: 2,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {' '}
                {category.name}{' '}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({service}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => {
          setAvailedServiceData({ ServiceName: '' });
          setProductListScreen(true);
        }}>
        <View style={style.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image
              source={service.image}
              style={{ height: 120, width: 120, borderRadius: 30 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>
              {service.name} {'\n'}
            </Text>

            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {service.info}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return productListScreen ? (
    <ScrollView>
      <View style={styles.container}>
        
    
        <View style={style.header}>
      </View>
      <View style={{flexDirection:'row', marginBottom:20}}>
        <Icon  name="arrow-back" size={30} onPress={navigation.goBack}/>
        <Text style={{marginLeft:10, marginBottom:20, fontSize:20, color:'#F9813A'}}>Appointment</Text>
        </View>
      
        <Text style={{ fontSize: 15, marginLeft: 10, color:COLORS.primary}}>
          Enter Full name
        </Text>

        <TextInput
          style={{ borderWidth: 2, padding:15, borderRadius:30, marginTop:10, marginBottom:10 }}
          onChangeText={onChangeNumber}
          value={number}umber
          placeholder="Enter Full Name "
          leftIcon={<Icon name="envelope" size={20} color="black" />}
        />
        <Text style={{ fontSize: 15, marginLeft: 10, color:COLORS.primary }}>
          Enter Phone #
        </Text>

          <TextInput
          style={{ borderWidth: 2, padding:15, marginTop:10, marginBottom:10,borderRadius:30, }}
          onChangeText={onChangeMob}
          value={mob}
          placeholder="Enter Mobile #"
          keyboardType={"number-pad"}
          leftIcon={<Icon name="envelope" size={20} color="black" />}
        />
        <Text style={{ fontSize: 15, marginLeft: 10, color:COLORS.primary }}>
          Service Name
        </Text>

        <TextInput
          style={{ borderWidth: 2, padding:15, marginTop:10, marginBottom:10,borderRadius:30, }}
          onChangeText={onChangeService}
          value={serv}
          placeholder="Enter Service Category"
          leftIcon={<Icon name="user" size={20} color="black" />}
        />
        <Text
          style={{
            fontSize: 15,
            marginTop: 5,
            marginLeft: 10,
            color:COLORS.primary
          }}>
          Enter CNIC
        </Text>

        <TextInput
          style={{ borderWidth: 2, padding:15, marginTop:10, marginBottom:10,borderRadius:30, }}
          onChangeText={onChangeCnic}
          value={cnic}
          keyboardType={"number-pad"}
          placeholder="Enter CNIC # "
        
          leftIcon={<Icon name="envelope" size={20} color="black" />}
        />
        <Text style={{ fontSize: 15, marginLeft: 10, color:COLORS.primary }}>
          Appointment Date
        </Text>

        <TextInput
          style={{ borderWidth: 2, padding:15, marginTop:10, marginBottom:10,borderRadius:30, }}
          onChangeText={onChangeDate}
          value={date}
          placeholder="27/12/2021"
          keyboardType={"number-pad"}
          leftIcon={<Icon name="envelope" size={20} color="black" />}
        />

         <Text style={{ fontSize: 15, marginLeft: 10, color:COLORS.primary }}>
          Appointment Time
        </Text>

        <TextInput
          style={{ borderWidth: 2, padding:15, marginTop:10, marginBottom:10,borderRadius:30, }}
          onChangeText={onChangeTime}
          value={time}
          placeholder="11 am"
          
          leftIcon={<Icon name="envelope" size={20} color="black" />}
        />
        <TouchableOpacity
          onPress={() => {
            // Function to upload data to firebase
            let obj = { Full_Name: number, 
                        Appointment_Date: date,
                        Appointment_time: time,
                        Service_Name: serv,
                        Mobile_Number: mob,
                        CNIC_Number: cnic

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
          <Text style={{ color: 'white', fontSize: 15 }}>GET Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  ) : (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
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
        <Image
          source={require('../../assets/yaseen1.jpeg')}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>

      <View
        style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={22} />
          <TextInput
            style={{ flex: 1, fontSize: 20, marginLeft: 10 }}
            placeholder="Search for items"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={services}
        renderItem={({ item }) => <Card service={item} />}
      />
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
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: 'orange',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 40,
    height: 40,
    marginTop: 5,
    marginLeft: 10,
    backgroundColor: 'brown',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'orage',
    padding: 5,
  },
  paragraph: {
    margin: 12,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  }
});

export default CreateAppointment;
