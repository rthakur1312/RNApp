import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../constants/Colors';

function NumberContainer({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width; // on ios screen and window means the same but on androind screen means width available including the status bar and window means excluding the status bar

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 450 ? 12 : 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: 36,
    }
})