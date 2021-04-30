import React from 'react' ;
import { TextInput ,StyleSheet} from 'react-native' ;

const Input = (props) =>{
    return(
        <TextInput
        
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        >

        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 315,
        height: 50,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 25,
        padding: 10,
        borderWidth: 2,
        borderColor: 'orange'
    },
});

export default Input ;