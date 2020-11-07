import actions from '../../actions'
import ProductMock from '../../__mocks__/ProductMock'

describe('Actions', () => {
    const payload = ProductMock
    test('AddToCart action', () => {
        const expected = {
            type: 'ADD_TO_CART',
            payload: payload,
        }
        expect(actions.addToCart(payload)).toEqual(expected)
    });
    test('RemoveFromCart action', () => {
        const expected = {
            type: 'REMOVE_FROM_CART',
            payload: payload
        }
        expect(actions.removeFromCart(payload)).toEqual(expected)
    });
    
});
