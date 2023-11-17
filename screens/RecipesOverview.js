import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from "react-native";
import { BlurView } from "@react-native-community/blur";
import HTML from 'react-native-render-html';
import React, { useState, useEffect, useRef } from "react";

const HEADER_HEIGHT = 350;


function RecipesOverview({ route }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  

  React.useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  {selectedRecipe && console.log(selectedRecipe.attributes.metatag[11].attributes.content)}

  const scrollY = useRef(new Animated.Value(0)).current;


const ingredientsHTML = selectedRecipe && selectedRecipe.attributes.field_recipe_ingredients.processed; 
const howToMakeHTML = selectedRecipe && selectedRecipe.attributes.field_recipe_how_to_make.processed;

const data = [
    { key: 'ingredients', title: 'Ingredients', html: ingredientsHTML },
    { key: 'howToMake', title: 'How to Make', html: howToMakeHTML },
  ];




  const renderItem = ({ item }) => {
    let tagsStyles = {};

    if (item.key === 'ingredients') {
      tagsStyles = {
        li: { marginBottom: 10},
      };
    } else if (item.key === 'howToMake') {
      tagsStyles = {
        li: { marginBottom: 10,}, 
      };
    }

    return (
      <View style={{ marginVertical: 10, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontFamily: 'open-sans-bold' }}>{item.title}</Text>
        <HTML source={{ html: item.html }} tagsStyles={tagsStyles} />
      </View>
    );
  };

  function renderHeaderBar() {
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 50,
            paddingHorizontal: 24,
            paddingVertical: 10
        }}>
            {/* Screen Overlay */}
            <Animated.View style={{
                position:'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                backgroundColor: '#fff',
                opacity: scrollY.interpolate({
                    inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT-90],
                    outputRange: [0, 1]
                })
            }}>

            </Animated.View>

            {/* Header Bar Title */}
                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingBottom: 10,
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT-100, HEADER_HEIGHT-50],
                        outputRange: [0,1]
                    }),
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                                outputRange: [50, 0],
                                extrapolate: 'clamp'
                            })
                        }
                    ]
                }}>
                    <Text style={{
                        color:'#000',
                        fontSize: 18,
                        fontWeight: 'bold'
                        }}>
                            {selectedRecipe?.attributes.title}
                            </Text>

                </Animated.View>


        </View>
    )
  }

  function renderRecipeCardHeader() {
    return (
        <View 
            style={{
                alignItems: 'center',
                overflow: 'hidden',
                marginTop: -1000,
                paddingTop: 1000,
            }}>
                {/* Background Image */}
                <Animated.Image 
                    source={{uri: selectedRecipe.attributes.metatag[11].attributes.content}} 
                    resizeMode="contain"
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT /2, 0, HEADER_HEIGHT * 0.75]
                                })
                            },
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [2,1,1]
                                })
                            }
                            
                        ]

                    }}
                    />
        </View>
    )

  }


  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {selectedRecipe ? (
        <Animated.FlatList
          data={data}
          keyExtractor={item => `item.id`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
          <View>
            {/* Header */}
            {renderRecipeCardHeader() }


            {/* Info */}

             {/* Ingredients Title */}
             <Text style={{
              textAlign:'center',
              fontSize: 20,
              fontFamily: 'open-sans-bold',
              marginVertical: 10
             }}>{selectedRecipe.attributes.title}</Text>
          </View>
        }
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          renderItem={renderItem}
        />
      ) : (
        <Text>Loading...</Text>
      )}

        {/* Header Bar */}
      {/* {renderHeaderBar()} */}
    </View>
  );
}

const styles = StyleSheet.create({});

export default RecipesOverview;
