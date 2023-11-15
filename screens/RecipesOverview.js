import {View, Text, StyleSheet} from 'react-native'

function RecipesOverview() {
    return (
        <View style={styles.container}>
            <Text>
                Meals Overview screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default RecipesOverview;