import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login/Login';

describe('Test if Login Page exists', () => {
  it('Should see if the login page exist', () => {
      render(<Login/>, {wrapper: BrowserRouter});

      const loginPage = screen.getByTestId('login-page');

      expect(loginPage).toBeInTheDocument();
  });

  it('Should see if the email field exists', () => {
      render(<Login/>, {wrapper: BrowserRouter});

      const emailField = screen.getByTestId('email');

      expect(emailField).toBeInTheDocument()
  })

  it('Should see if the password field exists', () => {
      render(<Login/>, {wrapper: BrowserRouter});

      const passwordField = screen.getByTestId('password');

      expect(passwordField).toBeInTheDocument()
  })

  it('Should see if the Login Button exists', () => {
    render(<Login/>, {wrapper: BrowserRouter});

    const loginButton = screen.getByText(/entrar/i);

    expect(loginButton).toBeInTheDocument()
})
})
