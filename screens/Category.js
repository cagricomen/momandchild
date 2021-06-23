import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { COLORS, icons, SIZES, images } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'


const Category = ({ navigation }) => {
    return (
        <View>
            <View style={{ height: "38%" }} >
                <ImageBackground source={images.momandchild}
                    style={{ flex: 1, justifyContent: 'flex-end' }}
                    resizeMode='cover'>
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
                            marginTop: 5
                        }}
                        onPress={() => navigation.navigate('Home')}
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
                    <LinearGradient start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{ height: 200, justifyContent: 'flex-end', paddingHorizontal: SIZES.padding }}
                    >
                        <Text style={{ width: '80%', color: COLORS.white, fontSize: SIZES.largeTitle, lineHeight: 45, marginBottom: 85 }} >
                            All Categories
                        </Text>
                    </LinearGradient>


                </ImageBackground>
            </View>
            <View style={{ height: "60%" }}>
                <TouchableOpacity style={{ height: "33%", borderRadius: 15 }}>
                    <ImageBackground source={icons.months6}
                        style={{ flex: 1, justifyContent: 'flex-end', marginTop: 5, }}
                        resizeMode='cover'>
                        <LinearGradient start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={[
                                COLORS.transparent,
                                COLORS.black
                            ]}
                            style={{ height: 200, justifyContent: 'flex-end', paddingHorizontal: SIZES.padding }}
                        >
                            <Text style={{ width: '80%', color: COLORS.white, fontSize: SIZES.largeTitle, lineHeight: 45, marginBottom: 35, marginLeft: 65 }} >
                                6+ Months
                            </Text>
                        </LinearGradient>


                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: "33%" }}>
                    <ImageBackground source={icons.months8}
                        style={{ flex: 1, justifyContent: 'flex-end', marginTop: 5, }}
                        resizeMode='cover'>
                        <LinearGradient start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={[
                                COLORS.transparent,
                                COLORS.black
                            ]}
                            style={{ height: 200, justifyContent: 'flex-end', paddingHorizontal: SIZES.padding }}
                        >
                            <Text style={{ width: '80%', color: COLORS.white, fontSize: SIZES.largeTitle, lineHeight: 45, marginBottom: 35, marginLeft: 65 }} >
                                8+ Months
                            </Text>
                        </LinearGradient>


                    </ImageBackground>

                </TouchableOpacity>
                <TouchableOpacity style={{ height: "33%" }}
                    onPress={()=>  navigation.navigate('CategoryScreen')}
                >
                    <ImageBackground source={icons.months12}
                        style={{ flex: 1, justifyContent: 'flex-end', marginTop: 5, }}
                        resizeMode='cover'>
                        <LinearGradient start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={[
                                COLORS.transparent,
                                COLORS.black
                            ]}
                            style={{ height: 200, justifyContent: 'flex-end', paddingHorizontal: SIZES.padding }}
                        >
                            <Text style={{ width: '80%', color: COLORS.white, fontSize: SIZES.largeTitle, lineHeight: 45, marginBottom: 35, marginLeft: 65 }} >
                                12+ Months
                            </Text>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Category;