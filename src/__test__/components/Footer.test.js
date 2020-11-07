import React from 'react'
import {mount} from 'enzyme'
import Footer from '../../components/Footer'
import {create} from 'react-test-renderer'

describe('<Footer />', () => {
    const footer = mount(<Footer/>)
    test('Rendering Footer component', () => {
        expect(footer.length).toEqual(1)
    })  
    test('Rendering footer title', () => {
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store")
    });
});

describe('Footer Snapshot', () => {
    test('Testing Snapshot of footer', () => {
        const footer = create(<Footer/>)
        expect(footer.toJSON()).toMatchSnapshot()
        
    });
    
});
