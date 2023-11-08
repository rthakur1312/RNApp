import {useState} from 'react'
import {TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';

function StartGameScreen({onPickedNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    // this will get width and height of the device whenever it changes for example when we switch for portrait to landscape
    const {width, height} = useWindowDimensions();

    // react native automatically has the entered value i.e event.target.value
    function numberInputHandler(value) {
            setEnteredNumber(value)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        console.log('INPUT HANDLER PRESSED');
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            // React native provides an alert object
            Alert.alert(
                'Invalid Number!',
                'Number has to be number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickedNumber(chosenNumber);
    }

    const marginTopDistane = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistane}]}>
            <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput style={styles.numberInput} 
                            maxLength={2} 
                            keyboardType="number-pad"
                            value = {enteredNumber}
                            onChangeText = {numberInputHandler}
                             />
            <View style={styles.buttonsContainer}> 
            <View style={styles.buttonContainer}>          
            <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
            </View>  
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}> Confirm </PrimaryButton>
            </View>
            </View>    
            </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex:1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    bittonContainer: {
        flex: 1
    }
})