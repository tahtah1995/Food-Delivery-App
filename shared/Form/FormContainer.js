import React from 'react';
import {ScrollView , Dimensions ,StyleSheet , Text , ImageBackground} from 'react-native';

var {width} = Dimensions.get('window');

const FormContainer = (props) =>{
    return(
     
        <ScrollView contentContainerStyle={styles.container}>
   

            <Text style ={styles.title}>{props.title} </Text>
            {props.children}
        </ScrollView>
        
    )
}

const styles = StyleSheet.create(
    {
        container:{
            marginTop:30 ,
            marginBottom:40 ,
            width: width ,
            justifyContent: 'center' ,
            alignItems: 'center' ,
            
        } ,
        image: {
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          }
        , 
        title:{
            fontSize: 30 ,
        }
    }
)

export default FormContainer;