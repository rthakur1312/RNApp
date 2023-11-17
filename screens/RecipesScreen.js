import {Text, View, StyleSheet, FlatList} from 'react-native';
import {BlurView} from '@react-native-community/blur'
import {useWindowDimensions} from 'react-native';
import Recipes from '../Recipes.json';
import BrandCard from '../components/BrandCard';
import { useState, useEffect } from 'react';



function RecipesScreen({navigation}) {


  const {height, width} = useWindowDimensions();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        // Assuming 'Recipes' is the imported JSON data
        // Check if the data is truthy before proceeding
        if (Recipes && Recipes.data) {
          const filteredRecipes = Recipes.data.slice(0,10)
            setRecipes(filteredRecipes);
        } else {
          setError(new Error('Data is empty or undefined.'));
        }
      } catch (error) {
        // Handle errors
        setError(error);
      } finally {
        // Set loading to false whether the logic was successful or not
        setLoading(false);
      }
    };

     // Call the fetchData function
     fetchData();
    }, []); 

    if (loading) {
        return <View><Text>Loading</Text></View>;
      }
    
      if (error) {
        return <View><Text>Error: {error.message}</Text></View>;
      }

     

      function renderRecipe(itemData) {
        function pressHandler() {
          navigation.navigate('RecipesDetail', {
            recipe: itemData.item
            // title: recipe.title,
            // brand: recipe.field_brand,
            // summary: recipe.body.processed,
            // cook_time: recipe.field_recipe_cook_time,
            // prep_time: recipe.field_recipe_prep_time,
            // rating: recipe.field_total_rating,
            // ingredients: recipe.field_recipe_ingredients.processed,
            // how_to_make: recipe.field_recipe_how_to_make.processed
          })
        }
        return (
            <BrandCard title={itemData.item.attributes.title} 
                        brand={itemData.item.attributes.field_brand} 
                        image = { itemData.item.attributes.metatag[11].attributes.content}
                        onPress={pressHandler} />
        );
      }

    return (
        <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={item => item.id}
        numColumns={2}
      />
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row'
    }
  })

export default RecipesScreen;