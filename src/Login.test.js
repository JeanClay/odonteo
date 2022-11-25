import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './pages/Login/Login';
import { BrowserRouter } from 'react-router-dom';



describe('Test if the login page works', () => {
    /*beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ 
            user: null, 
            message: 'Login efetuado com sucesso!', 
            token: null })
        }));
    });*/
    it('Should see if the login validation is working', async () => {
        render(<Login/>, {wrapper: BrowserRouter});

        const emailField = screen.getByTestId('email');

        expect(emailField).toBeInTheDocument;

        fireEvent.change(emailField, {target: {
            value: 'user@user.com'
            }});
        
        expect(emailField).toHaveValue('user@user.com');

        const passwordField = screen.getByTestId('password');

        expect(passwordField).toBeInTheDocument();

        fireEvent.change(passwordField, {target: {
            value: 'Abc@1234'
        }});

        expect(passwordField).toHaveValue('Abc@1234');

        const loginButton = screen.getByText(/entrar/i);

        expect(loginButton).toBeInTheDocument()

        fireEvent.click(loginButton);

        const message = screen.getByText(/incorretos/i);

        await waitFor(() =>{
            expect(message).toBeInTheDocument();
        })
    });
})