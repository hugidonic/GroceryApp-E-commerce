import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './../../utils/colors';
// Components
import RText from '../../components/RText';
import Block from './../../components/Block';
import ProfileHeader from './components/ProfileHeader';
import ProfileList from './components/ProfileList';
import OutlineBtn from './../../components/OutlineBtn';

type Props = {};

const ProfileScreen = (props: Props) => {
	return (
		<Block style={{ paddingTop: 25 }}>
      <ProfileHeader />
      
      <ProfileList />

			<Block justify="center" align="center" style={{marginTop: 40,}}>
				<OutlineBtn
					title="Log out"
					func={() => {}}
				/>
			</Block>

		</Block>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({});
