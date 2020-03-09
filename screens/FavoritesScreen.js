import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { View } from 'react-native';


const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id == 'm1' || meal.id == 'm2')
    return (
        <View style={{ padding: 15, flex: 1 }}>
            <MealList listData={favMeals} navigation={props.navigation} />
        </View>
    )
}

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
}

export default FavoritesScreen;