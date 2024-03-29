import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(action.product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.productId);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        draft.forEach(p => {
          if (p.id === action.productId) {
            p.amount = action.amount;
          }
        });
      });

    default:
      return state;
  }
}
