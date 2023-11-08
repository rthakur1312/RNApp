import {View, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, // android code for shadow
        shadowColor: 'black',     // ios code for shadow
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Card;