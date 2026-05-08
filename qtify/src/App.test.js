import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar feedback button', () => {
  render(<App />);
  const feedbackButton = screen.getByRole('button', { name: /give feedback/i });
  expect(feedbackButton).toBeInTheDocument();
});
