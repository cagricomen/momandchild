import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    TextInput,
    FlatList,
    Button
} from 'react-native';

import { COLORS, SIZES, icons, images, dummyData } from '../constants'
import { CategoryCard, TrendingCard } from '../components'


const Home = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 80,

                }}
            >
                <View style={{
                    flex: 1
                }}>
                    <Text style={{
                        color: COLORS.darkGreen,
                        fontSize: SIZES.h2
                    }}
                    >
                        Hello User
                    </Text>
                    <Text style={{
                        marginTop: 3,
                        color: COLORS.gray,
                        fontSize: SIZES.body3
                    }}
                    >
                        What would you like to cook for your child today?
                    </Text>
                </View>
                <TouchableOpacity onPress={() => console.log('Profile')} >
                    <Image
                        source={images.momandchild}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20
                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                />
                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        fontSize: SIZES.body3
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder='Search Recipes'
                />
            </View>
        )
    }

    function renderSeeRecipeCard() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGreen
                }}
            >
                <View
                    style={{
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={images.recipe}
                        style={{
                            width: 80,
                            height: 80
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        paddingVertical: SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            width: '70%',
                            fontSize: SIZES.body4
                        }}
                    >
                        There are 9 recipes.
                    </Text>
                    <TouchableOpacity
                        style={{
                            marginTop: 10
                        }}
                        onPress={() => console.log('See Recipes')}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGreen,
                                textDecorationLine: 'underline',
                                fontSize: SIZES.h4
                            }}
                        >
                            See Recipes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderTrendingSection() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        fontSize: SIZES.h2
                    }}
                >
                    Trending Recipe
                </Text>

                <FlatList
                    data={dummyData.bookMarkRecipe}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard
                                containerStyle={{
                                    marginLeft: index == 0 ? SIZES.padding : 0
                                }}
                                recipeItem={item}
                                onPress={() => navigation.navigate('Recipe', { recipe: item })}
                            />
                        )
                    }}
                />
            </View>
        )
    }
    function renderCategoryHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    marginHorizontal: SIZES.padding
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        fontSize: SIZES.h2
                    }}
                >
                    Categories
                </Text>
                <Button
                title="Buton"
                onPress={() => navigation.replace("Category")}
                ></Button>        
                <TouchableOpacity>
                    <Text
                        style={{
                            color: COLORS.black,
                            fontSize: SIZES.body4
                        }}
                    >
                        View All
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }} >
            <FlatList data={dummyData.categories} keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag' showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderHeader()}

                        {renderSearchBar()}

                        {renderSeeRecipeCard()}

                        {renderTrendingSection()}

                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate('Recipe', { recipe: item })}
                        />
                    )
                }
                }
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom: 100
                        }}
                    />
                }
            />
        </SafeAreaView>
    )
}

export default Home;