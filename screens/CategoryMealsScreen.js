import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { View } from 'react-native';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={{ padding: 15, flex: 1 }}>
            <MealList listData={displayedMeals} navigation={props.navigation} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMealsScreen;