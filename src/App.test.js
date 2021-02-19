import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from './App';

describe('App Test Suite', () => {
    it('Should render correctly', () => {
        const app = shallow(<App />);
        expect(app).toMatchSnapshot();
    });
});
