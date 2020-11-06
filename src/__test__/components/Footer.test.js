import React from 'react'
import {mount} from 'enzyme'
import Footer from '../../components/Footer'

describe('Testing Footer component', () => {
    const footer = mount(<Footer/>)
    test('Rendering Footer component', () => {
        expect(footer.length).toEqual(1)
    })  
    test('', () => {
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store")
    });
    
});
