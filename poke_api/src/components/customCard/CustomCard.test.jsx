import {describe, expect, it, vi} from 'vitest';
import Card from './CustomCard';
import { render, fireEvent } from '@testing-library/react';

describe('ModalView', () => {
    // it('ModalView debe ser renderizado', () => {
    //   render(<ModalView title={"bulbasaur"} fetchUrl={"https://pokeapi.co/api/v2/pokemon/1/"} imageKey={"front_default"}/>);
    // })

    it('ModalView render', () => {
      const { getByText } = render(<Card handleClick={() => console.log("Se abrió")} title={"BULBASAUR"} fetchUrl={"https://pokeapi.co/api/v2/pokemon/1/"} imageKey={"front_default"}/>);
      expect(getByText('BULBASAUR')).toBeDefined();

      const consoleSpy = vi.spyOn(console, 'log');

      const clickMeButton = getByText('Open');

    // Dispara el evento de clic en el botón
    fireEvent.click(clickMeButton);

    expect(consoleSpy).toHaveBeenCalledWith("Se abrió");
    consoleSpy.mockRestore();
    })
  }); 