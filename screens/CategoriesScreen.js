import {FlatList, Text} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile';

import {CATEGORIES} from '../data/dummy-data'

// navigation prop is provided to components that are being used as screen and can be used to navigate between screens
// categoryId can be extracted in the target screen which is MealsOverview by using the params object available by react navigation
function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    }
    return (
        <FlatList 
            data = {CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
             />
    )
}

export default CategoriesScreen;