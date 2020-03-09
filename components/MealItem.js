import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onMealSelect}>
                <View>
                    <View style={{
                        ...styles.mealRow,
                        ...styles.mealHeader
                    }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{
                        ...styles.mealRow,
                        ...styles.mealDetail
                    }}>
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealItem: {
        marginVertical: 5,
        height: 200,
        width: '100%',
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 12,
        paddingHorizontal: 5
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;