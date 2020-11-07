import React from 'react'
import {mount, shallow} from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import {create} from 'react-test-renderer'
import Header from '../../components/Header'

describe('<Header />', () => {
    test('Rendering Footer component', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect(header.length).toEqual(1)
    });
    test('Rendering title', () => {
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect(header.find(".Header-title").text()).toEqual('Platzi Store')
    });    
});

describe('Header Snapshot', () => {
    test('Testing snapshot of header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect(header.toJSON()).toMatchSnapshot()
    });
    
});

