import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';


const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.screen}>
            <DefaultText>No favourite meals found. Start adding some!</DefaultText>
        </View>
    }
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;