import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import { WorkSpace } from '../index';

describe('<WorkSpace />', () => {
  it('Copies categories on mount', () => {
    const copySpy = jest.fn();
    shallow(<WorkSpace copyCategories={copySpy} />);
    expect(copySpy).toHaveBeenCalled();
  });

  it('Renders some routes', () => {
    const component = shallow(<WorkSpace copyCategories={() => {}} />);
    expect(component.find(Route).length).not.toBe(0);
  });
});
