import { describe, expect, test } from 'vitest';
import { render, screen } from 'solid-testing-library';
import '@testing-library/jest-dom';

import App from './app.component';

describe('<App />', () => {
    test('it works!', () => {
        render(() => <App />);
        const helloWorld = screen.getByText('Hello World!');
        expect(helloWorld).toBeInTheDocument();
    });
});
