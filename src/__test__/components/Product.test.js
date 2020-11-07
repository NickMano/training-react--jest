import React from 'react'
import Product from '../../components/Product'
import ProviderMock from '../../__mocks__/ProviderMock'
import {mount, shallow} from 'enzyme'
import ProductMock from '../../__mocks__/ProductMock'

describe('<Product />', () => {
    test('Rendering Product component', () => {
        const product = shallow(
        <ProviderMock>
            <Product />
        </ProviderMock>
        )
        expect(product.length).toEqual(1);
    });
    test('Testing ', () => {
        const handleAddToCart = jest.fn()
        const wrapper = mount(
            <ProviderMock>
                <Product product={ProductMock} handleAddToCart={handleAddToCart} />
            </ProviderMock>
        )
        wrapper.find('button').simulate('click')
        expect(handleAddToCart).toHaveBeenCalledTimes(1)
    });
    
    
});
