import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native'

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
      }

      function addGoalHandler() {
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
      }
    return(
      <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputcontainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')} />
      <TextInput 
        style={styles.textInput} 
        placeholder='Your Course Goal' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button title="Cancel" onPress={props.endAddGoalHandler} color="#f31282" />
      </View>
        <View style={styles.button}>
      <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
      </View>
      </View>
      </View>
      </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        width: '90%',
        marginRight: 8,
        padding: 10,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop:16

      },
      button: {
        width:100,
        marginHorizontal: 8,
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
})