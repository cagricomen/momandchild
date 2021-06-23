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


const CategoryScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, }} >
            <Text
            style={{
                fontSize: SIZES.h2,
                textAlign: 'center',
                textAlignVertical: "center",
                marginTop:25
            }}
            >{dummyData.category12[0].category}</Text>
              <FlatList data={dummyData.category12} keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag' showsVerticalScrollIndicator={false}
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
            />
        </SafeAreaView>
    )
}

export default CategoryScreen;