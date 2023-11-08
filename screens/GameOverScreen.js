import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={require('../assets/images/success.png')} />
            </View>
            <Text style = {styles.summaryText}>Your phone needed <Text style={styles.hightlightedText}>{roundsNumber} </Text>
               rounds to guess the number <Text style={styles.hightlightedText}>{userNumber}</Text></Text>
               <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        borderRadius: deviceWidth < 380 ? 75 : 150,
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primary500,
        overflow: 'hidden',
        margin: 36, 
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24
    },
    hightlightedText: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold',
    }
})

export default GameOverScreen;