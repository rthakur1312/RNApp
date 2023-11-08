import { useState, useEffect } from 'react';
import {View ,Text, StyleSheet, Alert, FlatList, useWindowDimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import NumberContainer from '../components/game/NumberContainer';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GamesScreen({userNumber, gameOverHandler}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber )
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const {width, height} = useWindowDimensions();

    useEffect(() => {
           if(currentGuess === userNumber) {
            gameOverHandler(guessRounds.length);
           } 
    }, [currentGuess, userNumber, gameOverHandler])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])


    function nextGuessHandler(direction) {
        // direction => 'lower' or 'greater'
        if(direction === 'lower' && currentGuess < userNumber || 
           direction === "higher" && currentGuess > userNumber) {
            Alert.alert("Don't lie", 'You know that this is wrong...', [
                {text:'Sorry', style: 'cancel'}
            ]);
        }
       if(direction === 'lower') {
        maxBoundary = currentGuess;
       }
       else {
        minBoundary = currentGuess + 1;
       }
       const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
       setCurrentGuess(newRandomNumber)
       setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length;

    let content = (
    <>
     <NumberContainer> {currentGuess} </NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
            <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}> 
                <Ionicons name='md-remove' size={24} color='white' />
             </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}> 
            <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
            </View>
        </Card>
    </>
    )

    if(width > 500) {
        content = (
            <>
             <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
            <View style={styles.buttonsContainerWide}>
            <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}> 
                <Ionicons name='md-remove' size={24} color='white' />
             </PrimaryButton>
             <NumberContainer> {currentGuess} </NumberContainer>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}> 
                <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
            </View>
            </View>
            </>
        )
    }

    return (
        <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {content}
        <View style={styles.listContainer}>
            {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
            <FlatList
                data = {guessRounds}
                renderItem = {(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                keyExtractor={item => item}
             />
        </View>
       </View>
    )
}

export default GamesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 54,
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    instructionText: {
        marginBottom: 20
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
})