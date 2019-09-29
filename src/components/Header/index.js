import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~assets/images/Logo.png';
import * as S from './styles';

export default function Header({ navigation }) {
  const cartLength = useSelector(state => state.cart.length);

  return (
    <S.Container>
      <S.Logo source={logo} resizeMode="cover" />
      <S.CartArea onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={30} />
        <S.CartAmount>{cartLength}</S.CartAmount>
      </S.CartArea>
    </S.Container>
  );
}
