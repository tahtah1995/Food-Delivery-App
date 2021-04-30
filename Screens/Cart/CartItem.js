import React , {useState} from 'react';
import {StyleSheet , Dimensions , View , Image} from 'react-native'
import{
Text , Left ,Right , ListItem , Thumbnail , Body ,Container
} from 'native-base'
var { height, width } = Dimensions.get("window");
const CartItem = (props) =>{
    const data = props.item.item.product
    const [quantity , setQuantity] = useState(props.item.item.quantity)
    return(
        <ListItem style={styles.ListItem} key={Math.random()} avatar>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: data.image
                ? data.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
          />
          <View style ={styles.TextStyle}>
          <Text style = {styles.ItemName}>{data.name}</Text>
          <Text style = {styles.ItemBrand} >{data.brand}</Text>
          <Text style = {styles.ItemPrice}>{data.price}</Text>
          </View>
        </View>
      </ListItem>
    )
}

const styles = StyleSheet.create({
   
   
  
    ListItem: {
      alignItems: "center",
      backgroundColor: "white",
      justifyContent: "center",
    },
    card: {
      height: 130,
      width: 320,
      borderRadius: 20,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      margin: 10,
      
      marginRight: 40,
      shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  
  elevation: 3,
  
      backgroundColor: "#fafbfd",
      marginLeft: 35,
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: "contain",
      shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 10,
  },
  shadowOpacity: 0.51,
  shadowRadius: 13.16,
  
  
    },
    ItemName:{
      fontSize: 20,
      fontWeight: "900",
      marginLeft:140 ,
      alignSelf:'flex-start',
      marginTop:-80
    } ,
    ItemPrice:{
      marginTop:10 ,
      fontSize: 18 ,
      alignSelf:'flex-start',
      marginLeft:140 ,
      fontWeight: 'bold'
    }
    ,
    ItemBrand:{
      
      fontSize: 18 ,
      alignSelf:'flex-start',
      marginLeft:140 ,
      marginTop:5 ,
      color: "#b9bdc5"
     
    } ,
    TextStyle:{
      marginTop:-20
    }  ,
   Total:{
    fontSize:20 ,
    color: 'red' ,
   marginTop:0 ,
    marginLeft:50
   }
    ,
    BottomPrice:{
      fontSize:18 ,
     marginLeft:280 ,
     marginTop: -30 ,
      color: 'red'
    } ,
    TextWrapper:{
      marginTop:-20
    }
    ,
    
    ButtonViewClear:{
      width: 150, 
      height: 150 ,
      marginBottom:-50 ,
      marginLeft: 50 ,
    
      borderRadius: 40
    } ,
    ButtonViewCheckOut:{
      width: 150, 
      height: 150 ,
      marginTop:-100 ,
      marginLeft: 230
      ,
      borderRadius: 40
    }
    ,
    buttonsView:{
     marginTop: 10 ,
      marginLeft:-10 ,
      justifyContent:'center'
  
   
    }});

export default CartItem ;