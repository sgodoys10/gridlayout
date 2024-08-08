import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from '../componentstwo/BookingPage';

// Mock the global fetchAPI function
global.fetchAPI = jest.fn();

test('renders heading for booking page', () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const headingElement = screen.getByText(/Reserve a table/i);
  expect(headingElement).toBeInTheDocument();
});

describe('BookingPage Component', () => {
  it('should update available times based on the selected date', async () => {
    // Mock fetchAPI to return some times based on the date
    fetchAPI.mockImplementation((date) => {
      return ['12:00', '13:00', '14:00']; // Simulate different times
    });

    render(
      <Router>
        <BookingPage />
      </Router>
    );

    // Simulate date input change
    fireEvent.change(screen.getByLabelText(/Select a date:/i), { target: { value: '2024-08-10' } });

    // Wait for the available times to be updated
    await waitFor(() => {
      // Check if any times are displayed
      const timeElements = screen.getAllByTestId('available-time');
      expect(timeElements.length).toBeGreaterThan(0); // Ensure at least one time is displayed
    });
  });
});

