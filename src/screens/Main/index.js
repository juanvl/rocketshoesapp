import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as cartActions from '~store/modules/cart/actions';
import api from '~services/api';
import { formatPrice } from '~util/format';
import * as S from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);
  const productsAmount = useSelector(state =>
    state.cart.reduce((amounts, p) => {
      amounts[p.id] = p.amount;
      return amounts;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await api.get('/products');
      const data = res.data.map(p => {
        return {
          ...p,
          priceFormatted: formatPrice(p.price),
        };
      });
      setProducts(data);
    })();
  }, []);

  function handleAddToCart(productId) {
    dispatch(cartActions.addToCartRequest(productId));
  }

  return (
    <S.Container>
      <S.ProductList
        horizontal
        data={products}
        keyExtractor={p => String(p.id)}
        renderItem={({ item }) => (
          <S.Product key={item.id}>
            <S.ProductImage source={{ uri: item.image }}></S.ProductImage>
            <S.ProductTitle numberOfLines={2}>{item.title}</S.ProductTitle>
            <S.ProductPrice>{item.priceFormatted}</S.ProductPrice>

            <S.AddToCartButton onPress={() => handleAddToCart(item.id)}>
              <S.InCartBox>
                <Icon name="add-shopping-cart" color="#fff" size={20} />
                <S.InCartText>{productsAmount[item.id] || 0}</S.InCartText>
              </S.InCartBox>
              <S.AddToCartButtonText>Adicionar</S.AddToCartButtonText>
            </S.AddToCartButton>
          </S.Product>
        )}
      />
    </S.Container>
  );
}
