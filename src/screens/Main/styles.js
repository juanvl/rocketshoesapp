import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '~styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const ProductList = styled.FlatList`
  padding: 20px;
`;

export const Product = styled.View`
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 220px;
  height: 358px;
  border-radius: 4px;
  margin-right: 15px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #333333;
  margin-left: 10px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 21px;
  line-height: 25px;
  color: #000000;
  align-self: flex-start;
  margin-left: 10px;
`;

export const AddToCartButton = styled(RectButton)`
  flex-direction: row;
  align-self: stretch;
  height: 42px;
  background-color: ${colors.primary};
  border-radius: 4px;
`;

export const InCartBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
`;

export const InCartText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-left: 5px;
`;

export const AddToCartButtonText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-transform: uppercase;
  margin: auto;
`;
