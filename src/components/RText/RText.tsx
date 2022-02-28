import { StyleSheet, Text, View, TextStyle } from 'react-native';
import React from 'react';
import RTextProps from './RText.props';
import colors from '../../utils/colors';

const RText = ({
  children,
  style,

  bold,
  black,
  light,

  title,
  large,
  medium,
  small,

  color,
  ...rest 
}: RTextProps) => {

	const textStyles: TextStyle = StyleSheet.flatten([
    {fontSize: 16, fontFamily: 'Roboto-Regular', color: colors.black},
    style,
    color !== undefined && {color},
    
    bold !== undefined && {fontFamily: 'Roboto-Medium'},
    black !== undefined && {fontFamily: 'Roboto-Bold'},
    light !== undefined && {fontFamily: 'Roboto-Light'},
    
    title !== undefined && {fontSize: 26},
    large !== undefined && {fontSize: 22},
    medium !== undefined && {fontSize: 18},
    small !== undefined && {fontSize: 14},
  ])
  
	return <Text style={textStyles} {...rest} >{children}</Text>;
};

export default RText;
