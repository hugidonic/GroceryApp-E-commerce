import { StyleSheet } from 'react-native'
import React from 'react'
import Block from '../../components/Block'
import RText from '../../components/RText'

type Props = {}

const GroupScreen = (props: Props) => {
  return (
    <Block flex justify="center" align="center">
      <RText title>GroupScreen</RText>
    </Block>
  )
}

export default GroupScreen

const styles = StyleSheet.create({})