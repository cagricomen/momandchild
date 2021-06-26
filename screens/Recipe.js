import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Platform
} from 'react-native';
import { BlurView } from 'expo-blur'
import { COLORS, FONTS, icons, SIZES } from '../constants';

const HEADER_HEIGHT = 350;

const RecipeCreatorcardDetail = ({ selectedRecipe }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            <View
                style={{
                    width: 40,
                    height: 40,
                    marginLeft: 20
                }}
            >
                <Image
                    source={selectedRecipe?.author?.profilePic}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    marginHorizontal: 20
                }}
            >
                <Text
                    style={{
                        color: COLORS.lightGray2,
                        fontSize: SIZES.body4
                    }}
                >Recipe by:</Text>
                <Text
                    style={{
                        color: COLORS.white,
                        fontSize: SIZES.h3
                    }}
                >
                    {selectedRecipe?.author?.name}
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 20,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: COLORS.lightGreen1
                }}
                onPress={() => { }}
            >
                <Image
                    source={icons.rightArrow}
                    style={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.lightGreen1
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}
const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
    return (
        <BlurView
            style={{
                flex: 1,
                borderRadius: SIZES.radius
            }}
            tint='dark'
        >
            <RecipeCreatorcardDetail
                selectedRecipe={selectedRecipe}
            />
        </BlurView>
    )

}

const Recipe = ({ navigation, route }) => {

    const [selectedRecipe, setSelectedRecipe] = React.useState(null)
    const scrollY = useRef(new Animated.Value(0)).current;


    React.useEffect(() => {
        let { recipe } = route.params
        setSelectedRecipe(recipe)
    }, [])

    function renderHeaderBar() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 90,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 10
                }}
            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        width: 35,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: COLORS.lightGray,
                        backgroundColor: COLORS.transparentBlack5
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGray
                        }}

                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        width: 35
                    }}
                >
                    <Image
                        source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.darkGreen
                        }}
                    />

                </TouchableOpacity>

            </View>
        )
    }

    function renderRecipeCardHeader() {
        return (
            <View
                style={{
                    marginTop: -1000,
                    paddingTop: 1000,
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                <Animated.Image
                    source={selectedRecipe?.image}
                    resizeMode='contain'
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                                })
                            },
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [2, 1, 0.75]
                                })
                            }
                        ]
                    }}
                />

                <Animated.View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 30,
                        right: 30,
                        height: 80,
                    }}
                >
                    <RecipeCreatorCardInfo
                        selectedRecipe={selectedRecipe}
                    />
                </Animated.View>
            </View>
        )
    }

    function renderREcipeInfo() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 130,
                    width: SIZES.width,
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    alignItems: 'center'
                }}
            >

                <View
                    style={{
                        flex: 1.5,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ fontSize: SIZES.h2 }}>
                        {selectedRecipe?.name}
                    </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            color: COLORS.lightGray2,
                            fontSize: SIZES.body4
                        }}
                    >
                        {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
                    </Text>
                </View>

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >

            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderRecipeCardHeader()}

                        {renderREcipeInfo()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ], { useNativeDriver: true })}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 30,
                            marginVertical: 5
                        }}
                    >
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 50,
                                width: 50,
                                borderRadius: 5,
                                backgroundColor: COLORS.lightGray
                            }}
                        >
                            <Image
                                source={item.icon}
                                style={{
                                    height: 40,
                                    width: 40
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: SIZES.body3
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>

                        <View
                            style={{
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: SIZES.body3
                                }}
                            >
                                {item.quantity}
                            </Text>
                        </View>
                    </View>
                )}
            />

            {renderHeaderBar()}

        </View>
    )
}

export default Recipe;