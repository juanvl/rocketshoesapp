import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

import colors from '~styles/colors';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  margin: 20px 20px 25px;
  max-height: ${Dimensions.get('window').height - 100}px;
`;

export const ProductList = styled.FlatList``;

export const Product = styled.View`
  margin: 10px 0;
`;

export const ProductHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  margin: 0 10px 10px 0;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;

export const ProductPrice = styled.Text`
  font-family: Roboto-Bold;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const RemoveFromCartButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductFooter = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #eeeeee;
  border-radius: 4px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountChangeButton = styled.TouchableOpacity``;

export const AmountInput = styled.TextInput`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 51px;
  height: 26px;
  margin: 0 5px;
  padding: 0 5px;
`;

export const ProductTotalPrice = styled.Text`
  font-family: Roboto-Bold;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const Total = styled.View`
  padding: 30px 0;
  margin: 0 auto;
  align-items: center;
`;

export const TotalTitle = styled.Text`
  font-family: Roboto-Bold;
  font-size: 16px;
  line-height: 19px;
  color: #999999;
`;

export const TotalPrice = styled.Text`
  font-family: Roboto-Bold;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -1.6px;
  color: #000000;
`;

export const FinishButton = styled(RectButton)`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : colors.primary)};
  border-radius: 4px;
  align-self: stretch;
  height: 42px;
  align-items: center;
  justify-content: center;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-family: Roboto-Bold;
  font-size: 14px;
  line-height: 16px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;
