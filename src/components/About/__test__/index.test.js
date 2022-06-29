import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () =>{
  //renders About 1test
  it('renders', () => {
    render(<About />);
  });
  //renders About 2test: compare snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    // renders about
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});