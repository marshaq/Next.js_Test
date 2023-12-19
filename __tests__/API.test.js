// Import the necessary dependencies
import { render, screen, waitFor, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import ListComponent from '../components/ListComponent';

// Set up a Mock Service Worker server
const server = setupServer(
  // Define a request handler for the API endpoint
  rest.get('/search?country=United+States', (req, res, ctx) => {
    // Return a mocked response
    return res(
      ctx.json([
        {
          name: 'Marywood University',
          country: 'United States',
          stateProvince: null,
          alpha_two_code: 'US',
          web_pages: ['http://www.marywood.edu'],
          domains: ['marywood.edu'],
        },
        // Add more mock data as needed
      ])
    );
  })
);

// Before all tests, start the Mock Service Worker server
beforeAll(() => server.listen());

// After each test, clean up and reset the Mock Service Worker
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});

// After all tests, close the Mock Service Worker server
afterAll(() => server.close());

// Write the test for fetchUniversities function
test('fetchUniversities fetches data and sets state', async () => {
  // Render the component that uses fetchUniversities
  render(<ListComponent />);

  // Trigger the fetchUniversities function (assuming it's called on component mount)
  await act(async () => {
    await userEvent.click(screen.getByText('Search'));
  });

  // Wait for the asynchronous operation to complete
  await waitFor(() => {
    // Check if the component renders the fetched data
    expect(screen.getByText('Marywood University')).toBeInTheDocument();
  });
});
