import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text , Button ,Dimensions} from "react-native";
import { Left, Right, Container, H1, Row } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';
import TrafficLight from '../../shared/StyledComponents/TrafficLight.js';
import Toast from "react-native-toast-message";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState(null);
  const [availabilityText, setAvailabilityText] = useState("")
  return (
    <Container style={styles.container}>
 
      <ScrollView style={{  padding: 5 }}>
        <View style={styles.circle}>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>{item.brand}</H1>
          <Text style={styles.contentText}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
         
        </View>

        </ScrollView>

      <View style={{marginBottom:40 ,marginLeft:20}} >

        <Text style= {{fontSize:18}} >{item.description} </Text>
      </View>
      
      
        
       
       
      <View style = {{width: 250, height: 250 , marginBottom:-200 , marginLeft:80   }}>
          <Button title="Add To Cart"   color='#f55a00'  style ={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

}}
          
          onPress = {() =>{
            props.addItemToCart(item) ,

            Toast.show({
              topOffset: 60,
              type: "success",
              text1: `${item.name} added to Cart`,
              text2: "Go to your cart to complete order"
          })
        }}
          
          />
          </View>
         
    </Container>
  );
};

const mapToDispatchToProps = (dispatch) => {
  return {
      addItemToCart: (product) => 
          dispatch(actions.addToCart({quantity: 1, product}))
  }
}


const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },

  
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    
  },

  contentHeader: {
    alignSelf:'flex-start' ,
    marginLeft:20 ,
    color: "#c3c5ca",
  },
  contentText: {
    fontSize: 26,
    fontWeight: "900",
    marginLeft:20 ,
    alignSelf:'flex-start'
  },
  
  price: {
    fontSize: 20,
    alignSelf: 'flex-end',
    color: "#f55a00",
    fontWeight: "bold",
    marginTop: -30

  },
  circle: {
    height: 300,
    width: 300,
    borderRadius: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f4",
    marginLeft: 35,
  },
  availabilityContainer: {
    marginBottom: 20,
    alignItems: "center"
},
availability: {
    flexDirection: 'row',
    marginBottom: 10,
}
 

});
export default connect(null, mapToDispatchToProps)(SingleProduct);
