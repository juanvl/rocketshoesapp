import styled from 'styled-components/native';
import colors from '~styles/colors';

export const Container = styled.SafeAreaView`
  background-color: ${colors.dark};
  height: 84px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
  margin-left: 20px;
`;

export const CartArea = styled.TouchableOpacity`
  margin-right: 20px;
  position: relative;
`;

export const CartAmount = styled.Text`
  position: absolute;
  text-align: center;
  background-color: ${colors.primary};
  top: -7px;
  right: -7px;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  padding: 2px 0px;
`;
