import {View, Text, StyleSheet, Pressable, Platform} from 'react-native'

function BrandCard({title, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color:'#ccc'}} 
                style={({pressed}) => [styles.button, pressed ? styles.button : null]}
                onPress={onPress}
                >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flexBasis: '42%',
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width : 0, height: 2},
        shadowRadius: 8,
        backgroundColor: '#fff',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default BrandCard