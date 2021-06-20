import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES } from '../constants'

const CustomButton = ({ buttonText, buttonContainerStyle, colors, onPress }) => {
    if (colors.length > 0) {
        return (
            <TouchableOpacity onPress={onPress} >
                <LinearGradient start={{x:0, y:0}} end={{x:1, y:0}} colors={colors} style={{...buttonContainerStyle}} >
                    <Text style={{ textAlign: 'center', color: COLORS.white, fontSize: SIZES.h3, lineHeight: 22 }} >
                        {buttonText}
                    </Text>
                </LinearGradient>

            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity onPress={onPress} style={{...buttonContainerStyle}}>
                <Text style={{ textAlign: 'center', color: COLORS.white, fontSize: SIZES.h3, lineHeight: 22 }} >
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )
    }
}
export default CustomButton;