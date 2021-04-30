import React , {useContext} from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  FlatList, 
} from "react-native";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { ListItem } from "react-native-elements";
import { SwipeListView } from "react-native-swipe-list-view";
import { Container, Left, Right, H1, Thumbnail, Body } from "native-base";
import AuthGlobal from "../../Context/store/AuthGlobal"
import * as actions from "../../Redux/Actions/cartActions";
import EasyButton from "../../shared/StyledComponents/EasyButton"
var { height, width } = Dimensions.get("window");
const Cart = (props) => {
  const context = useContext(AuthGlobal);
  var Total = 0;
  props.cartItems.forEach((cart) => {
    return (Total += cart.product.price);
  });
  return (
    <>
      {props.cartItems.length ? (
        
          <Container style={styles.Container}>
            <H1 style={{ alignSelf: "center" }}>Cart</H1>
           <ScrollView>
            <SwipeListView
              data={props.cartItems}
              renderItem={(data) => <CartItem item={data} 
              style = {styles.swipe}
              />}
              renderHiddenItem = {(data) =>(

              
                <View style = {styles.hiddenContainer}>
                  <TouchableOpacity style={styles.hiddenButton}
                  
                  onPress = {() => props.removeFromCart(data.item)}
                  
                  
                  >
                    <Icon name="trash"  color= 'white' size={30}></Icon>
                  </TouchableOpacity>
                </View>
              )}
              disableRightSwipe={true}
              previewOpenDelay= {3000}
              friction={1000} 
              tension ={40}
              leftOpenValue= {75}
              stopLeftSwipe= {75}
              rightOpenValue = {-75}
            />
            </ScrollView>
           

            <View>
              <View style={styles.TextWrapper}>
                <Text style={styles.Total}>Total</Text>
                <Text style={styles.BottomPrice}>L.E {Total}</Text>
              </View>
              {context.stateUser.isAuthenticated ?(
                <View style={styles.buttonsView}>
                <View style={styles.ButtonViewClear}>
                  <Button
                    title="Clear All"
                    color="red"
                    onPress={() => props.clearCart()}
                  >
                    {" "}
                  </Button>
                </View>

                <View style={styles.ButtonViewCheckOut}>
                  <Button
                    title=" Checkout"
                    onPress={() => {
                      props.navigation.navigate("Checkout");
                    }}
                    style={styles.ButtonCheck}
                    color="#f55a00"
                  />
                </View>
              </View>
              ):(  <EasyButton
              secondary
              medium
              onPress={() => props.navigation.navigate("Login")}
            >
            <Text style={{ color: 'white' }}>Login</Text>
            </EasyButton>)}
              
            </View>
          </Container>
        
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>Your Cart is Empty</Text>

          <Text>Add products to Your Cart</Text>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart:(item) => dispatch(actions.removeFromCart(item))
  };
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
 
  swipe:{

  } ,

  Container: {
    height: height/1.2   ,
   
  },

  ListItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  card: {
    height: 130,
    width: 320,
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: -0,
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
  ItemName: {
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 140,
    alignSelf: "flex-start",
    marginTop: -80,
  },
  ItemPrice: {
    marginTop: 10,
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 140,
    fontWeight: "bold",
  },
  ItemBrand: {
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 140,
    marginTop: 5,
    color: "#b9bdc5",
  },
  TextStyle: {
    marginTop: -20,
  },
  Total: {
    fontSize: 20,
    color: "red",
    marginTop: 60,
    marginLeft: 50,
  },
  BottomPrice: {
    fontSize: 18,
    marginLeft: 280,
    marginTop: -30,
    color: "red",
  },
  TextWrapper: {
    
  },
  ButtonViewClear: {
    width: 150,
    height: 150,

    marginBottom: -50,
    marginTop:50 ,
    marginLeft: 50,

    borderRadius: 40,
  },
  ButtonViewCheckOut: {
    width: 150,
    height: 150,
    marginTop: -100,
    marginLeft: 230,
    borderRadius: 40,
  },
  buttonsView: {
    marginBottom: -100,
    marginLeft: -10,
    justifyContent: "center",
  },
  hiddenContainer :{
    flex:1 ,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  } ,
  hiddenButton :{
    backgroundColor: 'red' ,
    justifyContent:'center' ,
    alignItems: 'flex-end',
    paddingRight: 25 ,
    height: 70 ,
    width:width/1.2
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
