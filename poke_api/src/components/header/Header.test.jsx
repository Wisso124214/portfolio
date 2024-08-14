import {describe, expect, it, vi} from 'vitest';
import { getByDisplayValue, render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('render the header with title', () => {
        const title = 'Pokedex';
        const { getByText } = render(<Header title={title} />);
        const headerElement = getByText(title);
        expect(headerElement).toBeTypeOf('object');
    });

    it('renders header with children', () => {
        const children = <input type="text" value="Search" />;
        const { getByDisplayValue } = render(<Header>{children}</Header>);
        const childElement = getByDisplayValue('Search');
        expect(childElement).toBeDefined()
        expect(childElement.getAttribute('type')).toBe('text');
    });
});