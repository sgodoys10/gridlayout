import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from '../componentstwo/BookingPage';

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
    render(
      <Router>
        <BookingPage />
      </Router>
    );

    // Simulate date input change
    fireEvent.change(screen.getByLabelText(/Select a date:/i), { target: { value: '2024-08-10' } });

    // Wait for the available times to be updated
    await waitFor(() => {
      // Check if available times have been updated accordingly
      expect(screen.getByText('12:00')).toBeInTheDocument();
      expect(screen.getByText('13:00')).toBeInTheDocument();
    });
  });
});

