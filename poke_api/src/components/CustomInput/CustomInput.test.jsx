import { render, fireEvent } from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import CustomInput from './CustomInput'; // Asegúrate de que la ruta de importación sea correcta

it('initial value', () => {
    const initialValue = "Search";
    const { container } = render(<CustomInput label="Username" value={initialValue} onChange={() => {}} />);

    const inputElement = container.querySelector('.class-input'); // Asegúrate de que '.class-input' sea la clase correcta

    expect(inputElement.value).toBe(initialValue);
});