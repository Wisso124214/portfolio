import {describe, expect, it, vi} from 'vitest';
import { render, fireEvent } from '@testing-library/react';
// import CustomButton from './CustomButton';

describe('CustomButton', () => {
    it('should call onClick when clicked', () => {
        const onClickMock = vi.fn();
        const { getByText } = render(<CustomButton onClick={onClickMock} label="Click me" />);
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    });
});