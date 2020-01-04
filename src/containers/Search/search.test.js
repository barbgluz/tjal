import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Search } from './index';

configure({adapter: new Adapter()});

describe('<Search />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should collapse navbar if has results', () => {
    wrapper.setProps({results: true})
    expect(wrapper.find('#searchContainer').hasClass('collapse')).toEqual(true);
  })

  it('should collapse navbar if has error', () => {
    wrapper.setProps({error: true})
    expect(wrapper.find('#searchContainer').hasClass('collapse')).toEqual(true);
  })
})
