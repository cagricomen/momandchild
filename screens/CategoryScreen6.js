import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    FlatList,
   
} from 'react-native';

import { COLORS, SIZES, icons, images, dummyData } from '../constants'
import { CategoryCard } from '../components'

const CategoryScreen6 = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, }} >
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 35,
                    width: 35,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: COLORS.lightGray,
                    backgroundColor: COLORS.darkLime,
                    marginLeft: 5,
                    marginTop: 15
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
            <Text
                style={{
                    fontSize: SIZES.h2,
                    textAlign: 'center',
                    textAlignVertical: "center",
                    color: 'red'
                }}
            >{dummyData.category6[0].category}</Text>
            <FlatList data={dummyData.category6} keyExtractor={item => `${item.id}`}
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

export default CategoryScreen6;