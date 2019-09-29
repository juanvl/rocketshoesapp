import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as cartActions from '~store/modules/cart/actions';
import colors from '~styles/colors';
import { formatPrice } from '~util/format';
import * as S from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(p => ({
      ...p,
      totalPrice: formatPrice(p.price * p.amount),
    }))
  );
  const totalPrice = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, p) => {
        total += p.price * p.amount;
        return total;
      }, 0)
    )
  );
  const dispatch = useDispatch();

  function handleRemoveFromCart(productId) {
    dispatch(cartActions.removeFromCart(productId));
  }

  function handleUpdateAmount(productId, amount) {
    dispatch(cartActions.updateAmountRequest(productId, amount));
  }

  return (
    <S.Container>
      <S.ProductList
        data={cart}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={
          <S.EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <S.EmptyText>Seu carrinho está vazio! :(</S.EmptyText>
          </S.EmptyContainer>
        }
        renderItem={({ item }) => (
          <S.Product>
            <S.ProductHeader>
              <S.ProductImage
                source={{
                  uri: item.image,
                }}
              ></S.ProductImage>
              <S.ProductInfo>
                <S.ProductName>{item.title}</S.ProductName>
                <S.ProductPrice>{item.priceFormatted}</S.ProductPrice>
              </S.ProductInfo>
              <S.RemoveFromCartButton
                onPress={() => handleRemoveFromCart(item.id)}
              >
                <Icon name="delete-forever" size={24} color={colors.primary} />
              </S.RemoveFromCartButton>
            </S.ProductHeader>

            <S.ProductFooter>
              <S.AmountContainer>
                <S.AmountChangeButton
                  onPress={() => handleUpdateAmount(item.id, item.amount - 1)}
                >
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </S.AmountChangeButton>
                <S.AmountInput readonly value={String(item.amount)} />
                <S.AmountChangeButton
                  onPress={() => handleUpdateAmount(item.id, item.amount + 1)}
                >
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </S.AmountChangeButton>
              </S.AmountContainer>
              <S.ProductTotalPrice>{item.totalPrice}</S.ProductTotalPrice>
            </S.ProductFooter>
          </S.Product>
        )}
      />

      <S.Total>
        <S.TotalTitle>TOTAL</S.TotalTitle>
        <S.TotalPrice>{totalPrice}</S.TotalPrice>
      </S.Total>

      <S.FinishButton disabled={cart.length ? 0 : 1}>
        <S.FinishButtonText>Finalizar Pedido</S.FinishButtonText>
      </S.FinishButton>
    </S.Container>
  );
}
