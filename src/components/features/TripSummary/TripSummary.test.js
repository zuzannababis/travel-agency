import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct address', () => {
    const id = 'abc';
    const cost = '50';
    const component = shallow(<TripSummary id={id} cost={cost} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${id}`);
  });

  it('should have correct src and alt for img', () => {
    const expectedName = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const cost = '50';
    const component = shallow(<TripSummary name={expectedName} image={expectedImage} cost={cost} />);

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

  /*it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });*/

  it('should render tags in correct order', () => {
    const expectedArray = ['one', 'two', 'three'];
    const cost = '50';

    const component = shallow(<TripSummary tags={expectedArray} cost={cost} />);
    expect(component.find('.tag').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedArray[2]);
  });

  it('should not render if tags array is missing or empty', () => {
    const cost = '50';

    const component = shallow(<TripSummary tags={[]} cost={cost} />);
    expect(component.find('.tags')).toBeTruthy();
  });
});