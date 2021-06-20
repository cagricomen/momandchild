import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet, Platform } from 'react-native'
import { SIZES, COLORS, icons } from '../constants'
import { BlurView } from 'expo-blur'


const RecipeCardDetails = ({ recipeItem }) => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        width: '70%',
                        color: COLORS.white,
                        fontSize: 18
                    }}
                >
                    {recipeItem.name}
                </Text>

                <Image
                    source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base,
                        tintColor: COLORS.darkGreen
                    }}
                />
            </View>
            <Text
                style={{
                    color: COLORS.lightGray,
                    fontSize: SIZES.body4
                }}
            >
                {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>
        </View>
    )
}

const RecipeCardInfo = ({ recipeItem }) => {
    return (
        <BlurView
            tint='dark'
            style={styles.recipeContainer}
        >
            <RecipeCardDetails
                recipeItem={recipeItem}
            />

        </BlurView>
    )
}

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                height: 350,
                width: 250,
                marginTop: SIZES.radius,
                marginRight: SIZES.radius,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}
        >

            <Image
                source={recipeItem.image}
                resizeMode='cover'
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: SIZES.radius
                }}
            />

            <View
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 15,
                    paddingVertical: 5,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.transparentGray,
                    borderRadius: SIZES.radius
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        fontSize: SIZES.h4
                    }}
                >
                    {recipeItem.category}
                </Text>
            </View>

            <RecipeCardInfo
                recipeItem={recipeItem}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recipeContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingHorizontal: SIZES.radius,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius
    }
});

export default TrendingCard;