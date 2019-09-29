import { Alert } from 'react-native';
import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import api from '~services/api';
import NavigationService from '~services/navigation';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '~util/format';

function* addToCartRequest({ productId }) {
  const productInCart = yield select(state =>
    state.cart.find(p => p.id === productId)
  );

  const res = yield call(api.get, `/stock/${productId}`);
  const productStockAmount = res.data.amount;
  const amountRequested = productInCart ? productInCart.amount + 1 : 1;

  if (productStockAmount < amountRequested) {
    Alert.alert('Não temos estoque suficiente! :(');
    return;
  }

  if (productInCart) {
    yield put(updateAmountSuccess(productId, amountRequested));
  } else {
    const res = yield call(api.get, `/products/${productId}`);
    const product = {
      ...res.data,
      amount: 1,
      priceFormatted: formatPrice(res.data.price),
    };
    yield put(addToCartSuccess(product));
    NavigationService.navigate('Cart');
  }
}

function* updateAmountRequest({ productId, amount }) {
  if (amount <= 0) return;

  const res = yield call(api.get, `/stock/${productId}`);
  const productStockAmount = res.data.amount;

  if (productStockAmount < amount) {
    Alert.alert('Não temos estoque suficiente! :(');
    return;
  }

  yield put(updateAmountSuccess(productId, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCartRequest),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmountRequest),
]);
