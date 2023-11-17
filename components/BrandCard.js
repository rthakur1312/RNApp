import {View, Text, StyleSheet, Pressable, Platform, Image} from 'react-native'

function BrandCard({title, image, brand, onPress}) {
    console.log(image)
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color:'#ccc'}} 
                style={({pressed}) => [styles.button, pressed ? styles.button : null]}
                onPress={onPress}
                >
                    <Image style={{
                        width:'100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }} source={{uri : image}} />
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
        marginHorizontal: 16,
        marginVertical: 35,
        height: 150,
        backgroundColor: '#dedcdc',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width : 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: '#e6d8d8',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    title: {
        fontSize: 12,
        fontFamily: 'open-sans-bold'
    }
})

export default BrandCard