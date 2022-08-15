import { useState } from 'react';
import {View,TextInput,Button,StyleSheet, Modal ,Image} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText,setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        };

        function addGoalHandler() {
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
    return ( 
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/ballon dor.png')} />
        <TextInput style={styles.TextInput}
         placeholder="Your course goal!"
         onChangeText={goalInputHandler}
         value={enteredGoalText} />
         <View style={styles.buttonContainer}>
            <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
        <View  style={styles.buttonContainer}>
    <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
    </View>
    </View>
    </View>
    </View>
    </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    
  inputContainer: {
    flex:1,
    // flexDirection: 'column',
    justifyContent:'center',
    alignContent:'center',
    marginBottom:24,
    padding:16,
    backgroundcolor: '#311b6b'
  },
  TextInput: {
    borderWidth:1,
  borderColor: '#e4d0ff',
  backgroundColor: '#e4d0ff',
  color: '#120438',
  borderRadius:6,
   width:'100%',
padding:16,
},
buttonContainer: {
    marginTop:16,
    flexDirection: 'row'
},
button:{
    width:'30%',
    marginHorizontal:8
},
image: {
    width:100,
    height:100,
    margin:20
}
})