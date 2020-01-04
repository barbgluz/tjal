import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Layout } from './index';
import Process from '../Process/index';
import Error from '../../ui/Error/index';
import Spinner from '../../ui/Spinner/index';

configure({adapter: new Adapter()});

describe('<Layout />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Layout />)
  })

  it('should render Error if has errors', () => {
    wrapper.setProps({error: true})
    expect(wrapper.exists(Error)).toEqual(true);
  });

  it('should render Spinner component if loading', () => {
    wrapper.setProps({loading: true})
    expect(wrapper.exists(Spinner)).toEqual(true);
  });

  it('should render Process component if loading', () => {
    wrapper.setProps({process: true})
    expect(wrapper.exists(Process)).toEqual(true);
  });

})
