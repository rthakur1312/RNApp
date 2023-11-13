import {Text, View, Image, StyleSheet, ScrollView} from 'react-native'
import MealDetails from '../components/mealDetails'

import {MEALS} from '../data/dummy-data'

function MealsDetailScreen({route}) {
    const mealId = route.params.mealId

    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
      <ScrollView>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
            <MealDetails duration={selectedMeal.duration} complexity = {selectedMeal.complexity} affordability={selectedMeal.affordability}
            textStyle = {styles.detailText}
             />
        </View>
        <View>
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>  
        </View>
        {selectedMeal.ingredients.map((ingredient) => (
            <Text style={styles.listStyle} key={ingredient}>{ingredient}</Text>
        ))}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
        </View>
        {selectedMeal.steps.map((step) => (
            <Text style={styles.listStyle} key={step}>{step}</Text>
        ))}
        </View>
      </ScrollView>
    )
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#fff',
    },
    detailText: {
        color: '#fff'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e2b497',
        textAlign: 'center',
    },
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
    },
    listStyle: {
        color: '#fff',
        paddingHorizontal: 20
    },

})