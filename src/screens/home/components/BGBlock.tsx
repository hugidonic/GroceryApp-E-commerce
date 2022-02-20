import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const BGBlock = (props: Props) => {
	return (
		<Image
			source={require('../../../assets/images/bg1.jpg')}
			style={styles.cover}
		/>
	);
};

export default BGBlock;

const styles = StyleSheet.create({
  cover: {
    resizeMode: 'cover', width: '100%', height: 120,
    borderRadius: 14,
    marginVertical: 20,
  }
});
