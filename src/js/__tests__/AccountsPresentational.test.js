import React from "react";
import { render, cleanup } from '@testing-library/react';

import AccountsPresentational from '../components/presentationals/AccountsPresentational';

afterEach(cleanup);

const data = [
  {
    "id": 1,
    'email': "info@example.com",
    "created_at": "2020-04-05",
    "updated_at": "2020-04-05",
  },
  {
    "id": 2,
    'email': "test@example.com",
    "created_at": "2020-05-05",
    "updated_at": "2020-05-05",
  }
];

it('renders a username', () => {
  const { getByText } = render(<AccountsPresentational accountsList={data}/>);
  expect(getByText('info@example.com')).toBeTruthy();
  expect(getByText('test@example.com')).toBeTruthy();
});