import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Block from './../../../components/Block';

type Props = {};

const BgSlider = (props: Props) => {
	return (
		<Block border>

		</Block>
	);
};

export default BgSlider;

const styles = StyleSheet.create({
  cover: {
    resizeMode: 'cover', width: '100%', height: 120,
    borderRadius: 14,
    marginVertical: 20,
  }
});
