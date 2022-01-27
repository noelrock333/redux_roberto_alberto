import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import LoginForm from './components/LoginForm'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login form/i); // <span>Login form</span>
  expect(linkElement).toBeInTheDocument();
});

test('renders name input', () => {
  render(<LoginForm />)
  fireEvent.click(screen.getByText('Hide name input'))
  const NameInputElement = screen.queryByPlaceholderText('Your name here') 
  expect(NameInputElement).not.toBeInTheDocument()
})