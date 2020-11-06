import React from 'react'
import {mount} from 'enzyme'
import Footer from '../../components/Footer'

describe('Testing Footer component', () => {
    test('Rendering Footer component', () => {
        const footer = mount(<Footer/>)
        expect(footer.length).toEqual(1)
    });
    
});
