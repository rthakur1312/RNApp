import {Pressable, View, Text, StyleSheet, Platform} from 'react-native'

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]} onPress={onPress}>
                <View style={[styles.innercontainer, {backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: '0.5',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonStyle: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innercontainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})