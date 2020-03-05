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

  it('should render tags in correct order', () => {
    const expectedArray = ['one', 'two', 'three'];

    const component = shallow(<TripSummary tags={expectedArray} />);
    console.log(component.find('.tag'));
    expect(component.find('.tag').at(1)).toEqual(expectedArray[0]);
    expect(component.find('.tag').at(2)).toEqual(expectedArray[1]);
    expect(component.find('.tag').at(3)).toEqual(expectedArray[2]);
  });

  it('should not render if tags array is missing or empty', () => {

    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags')).toBeTruthy();
  });
});