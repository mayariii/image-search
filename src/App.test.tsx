import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect'
import App from './components/App';

test('app component renders correctly', () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
})


test('search input is blank', () => {
    render(<App />)
    const searchInput = screen.getByLabelText(/Search for images:/i)
    expect(searchInput).toHaveValue("")
})

