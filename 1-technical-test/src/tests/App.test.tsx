import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { render, screen } from '@testing-library/react';

describe('<App />', () => {
  const app = render(<App />);
  test('should work', () => {
    expect(app.getByText('Prueba tecnica #1😎')).toBeDefined();
  });

  //end2end
  test('Should add items and remove them', async () => {
    const user = userEvent.setup();

    //Buscar el input
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();

    //Buscar el formulario
    const form = screen.getByRole('form');
    expect(form).toBeDefined();

    //Buscar el botón
    const button = form.querySelector('button');
    expect(button).toBeDefined();

    //acciones del usuario
    await user.type(input, 'Hello world 🌎');
    await user.click(button!);

    //asegurar que el elemento se ha agregado
    const list = screen.getByRole('list');
    expect(list).toBeDefined();

    expect(list.childNodes.length).toBe(1);

    //Asefurar que el elemento se ha borrado

    const item = screen.getByText('Hello world 🌎');

    //Buscar el botón Remove
    const removeButton = item.querySelector('button');
    expect(removeButton).toBeDefined();

    //Accion del usuario
    await user.click(removeButton!);

    //Buscar el strong No hay elementos
    const noResults = screen.getByText('No hay elementos');
    expect(noResults).toBeDefined();

    screen.debug();
  });
});
