import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const app = render(<App />)
  const linkElement = screen.getByText(/Bloglist/i);
  expect(linkElement).toBeInTheDocument();

  expect(app).toMatchSnapshot()
})
