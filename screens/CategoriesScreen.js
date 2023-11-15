import {Text, View, StyleSheet} from 'react-native';
import Recipes from '../Recipes.json';
import BrandCard from '../components/BrandCard';
import { useState, useEffect } from 'react';


function CategoriesScreen({navigation}) {
 const [quakerRecipes, setQuakerRecipes] = useState([]);
  const [tostitosRecipes, setTostitosRecipes] = useState([]);
  const [stacysRecipes, setStacysRecipes] = useState([]);
  const [laysRecipes, setLaysRecipes] = useState([]);
  const [cheetosRecipes, setCheetosRecipes] = useState([]);
  const [rufflesRecipes, setRufflesRecipes] = useState([]);
  const [doritosRecipes, setDoritosRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        if (Recipes && Recipes.data) {
          // Filter the data for 'Quaker'
          const quaker = Recipes.data.filter(recipe => recipe.attributes.field_brand === 'Quaker');
           // Filter the data for 'Tostitos'
           const tostitos = Recipes.data.filter(recipe => recipe.attributes.field_brand === 'Tostitos');
             // Filter the data for 'Stacys'
             const stacys = Recipes.data.filter(recipe => recipe.attributes.field_brand === 'Stacys');
             const ruffles = Recipes.data.filter(recipe => recipe.attributes.field_brand === 'Ruffles');
             const lays = Recipes.data.filter(recipe => recipe.attributes.field_brand === 'Lays');
             const cheetos = Recipes.data.filter(recipe => recipe.attributes.field_brand === 'Cheetos');
             
          // Set the state with the filtered data
          setQuakerRecipes(quaker);
          setTostitosRecipes(tostitos);
          setStacysRecipes(stacys);
          setLaysRecipes(lays);
          setRufflesRecipes(ruffles);
          setCheetosRecipes(cheetos);
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

  quakerRecipes.map(recipe => {
    
  })

    function pressHandler() {
            navigation.navigate('Recipes', {
            
            });
     }


    return (
        <View style={styles.container}>
        {quakerRecipes.length > 0 && <BrandCard title={quakerRecipes[0].attributes.field_brand} onPress={pressHandler} />}
        {tostitosRecipes.length > 0 && <BrandCard title={tostitosRecipes[0].attributes.field_brand} onPress={pressHandler}  />}
        {stacysRecipes.length > 0 && <BrandCard title={stacysRecipes[0].attributes.field_brand} onPress={pressHandler}  />}
        {cheetosRecipes.length > 0 && <BrandCard title={cheetosRecipes[0].attributes.field_brand} onPress={pressHandler}  />}
        {laysRecipes.length > 0 && <BrandCard title={laysRecipes[0].attributes.field_brand} onPress={pressHandler}  />}
        {rufflesRecipes.length > 0 && <BrandCard title={rufflesRecipes[0].attributes.field_brand} onPress={pressHandler}  />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row'
    }
  })

export default CategoriesScreen;