import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct address', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${id}`);
  });

  it('should have correct src and alt for img', () => {
    const expectedName = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary name={expectedName} image={expectedImage} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should render correct name, cost and days props', () => {
    const expectedName = 'Michalina';
    const expectedCost = '15';
    const expectedDays = 50;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});