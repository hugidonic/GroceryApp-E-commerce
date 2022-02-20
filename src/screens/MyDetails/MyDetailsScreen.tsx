import { StyleSheet} from 'react-native'
import React from 'react'
import Block from '../../components/Block';
import RText from '../../components/RText';

type Props = {}

const MyDetailsScreen = (props: Props) => {
  return (
    <Block flex justify="center" align="center">
      <RText large black>MyDetailsScreen</RText>
    </Block>
  )
}

export default MyDetailsScreen

const styles = StyleSheet.create({})