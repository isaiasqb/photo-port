import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
  });
  

  //test for emoji visibility
  describe('emoji is visible', () => {
    it('inserts emoji onto the h2', () => {
      const { getByLabelText } = render(<Nav />); //selects the html element thet contains the emoji
      expect(getByLabelText('camera')).toHaveTextContent('📸')
    });
  });


  // Test for Link Visibility
  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    })
  })