// __tests__/TableComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ListComponent from '../components/ListComponent';

test('renders ListComponent', () => {
  const mockData = [
    { name: 'University1', country: 1, alpha_two_code: 'US', domains: ['example.com'] },
    // Add more mock data as needed
  ];

  render(<ListComponent data={mockData} />);
  const tableElement = screen.getByRole('table');

  expect(tableElement).toBeInTheDocument();
});
