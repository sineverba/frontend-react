import React from "react";
import { render, cleanup } from '@testing-library/react';

import FooterPresentational from '../components/presentationals/FooterPresentational';

afterEach(cleanup);

const data = {
  apiVersion: '1.1.1',
  frontendVersion: '2.2.2'
};

it('renders a username', () => {
  const { getByText } = render(<FooterPresentational apiVersion={data.apiVersion} frontendVersion={data.frontendVersion}/>);
  expect(getByText('Backend Api Version: 1.1.1 - Frontend Version: 2.2.2')).toBeTruthy();
});