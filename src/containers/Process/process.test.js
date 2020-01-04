import React from 'react';

import { configure, shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Process } from './index';
import Part from '../../components/Part/index';

configure({adapter: new Adapter()});

describe('<Process />', () => {
  let wrapper

  beforeEach(() => {
    const props = {
      process: {
        area: " Cível",
        assunto: "Responsabilidade Civil",
        classe: "Procedimento Ordinário",
        distribuicao: "08/07/2019 às 15:06 - Sorteio",
        juiz: "Ivan Vasconcelos Brito Junior",
        numero_unico: "07175619820198020001",
        valor: "107060.0",
        movimentacoes: [],
        partes: []
      }
    }

    wrapper = shallow(<Process { ...props } />)

  })

  it('should render text if `movimentacoes` is empty', () => {
    expect(wrapper.text()).toContain('Não há movimentações.')
  });

  it('should not render any part component if `partes` is empty', () => {
    expect(wrapper.exists(Part)).toEqual(false)
  });

})
