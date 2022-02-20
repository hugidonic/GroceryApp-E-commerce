import { StyleSheet, Text, TextInput, View } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import React from 'react';
import Block from './../../../components/Block';
import colors from './../../../utils/colors';

type Props = {};

const SearchBar = (props: Props) => {
	const [ search, setSearch ] = React.useState('');

	return (
		<Block>
      <FontAwesome name="search" size={22} color={colors.black} style={styles.icon} />
			<TextInput
				style={styles.input}
				value={search}
				onChangeText={(t) => setSearch(t)}
				placeholder="Поиск по товарам..."
				placeholderTextColor={colors.black}
			/>
		</Block>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: 20,
    top: 12,
    zIndex: 1,
  },
	input: {
		backgroundColor: '#dfdfdf',
		borderRadius: 10,
		width: '100%',
		paddingVertical: 10,
    paddingLeft: 50,
		paddingHorizontal: 18,
		fontSize: 18
	}
});
