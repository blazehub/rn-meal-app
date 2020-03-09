import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';


const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id == 'm1' || meal.id == 'm2')
    return (
        <View style={{ padding: 15, flex: 1 }}>
            <MealList listData={favMeals} navigation={props.navigation} />
        </View>
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
        )
    }
}

export default FavoritesScreen;