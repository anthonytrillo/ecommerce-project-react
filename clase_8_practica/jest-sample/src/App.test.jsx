import { render, screen, fireEvent } from '@testing-library/react';

// Importamos el componente que vamos a testear
import App from './App';

// describe() agrupa varios tests relacionados
describe('App Component', () => {

  // test() o it() define una prueba individual
  // El primer parámetro es una descripción de lo que estamos probando
  test('debe renderizar el título "Vite + React"', () => {
    // Arrange (Preparar): renderizamos el componente
    render(<App />);

    // Act (Actuar): buscamos el elemento que queremos verificar
    // getByText busca un elemento que contenga el texto exacto
    const titulo = screen.getByText('Vite + React');

    // Assert (Afirmar): verificamos que el elemento exista en el documento
    expect(titulo).toBeInTheDocument();
  });

});









// 1. Patrón AAA (Arrange, Act, Assert):
//    - Arrange: Prepara el escenario (renderiza componentes, crea variables)
//    - Act: Ejecuta la acción que quieres probar (click, escribir, etc.)
//    - Assert: Verifica que el resultado sea el esperado
//
// 2. Queries más comunes de screen:
//    - getByText(): busca por texto visible
//    - getByRole(): busca por rol ARIA (button, heading, textbox, etc.)
//    - getByLabelText(): busca inputs por su label
//    - getByPlaceholderText(): busca inputs por su placeholder
//
// 3. Matchers más comunes de expect():
//    - toBeInTheDocument(): verifica que el elemento existe
//    - toHaveTextContent(): verifica el texto de un elemento
//    - toBeDisabled() / toBeEnabled(): estado de inputs
//    - toHaveValue(): valor de un input
//
// 4. Para correr los tests necesitas instalar:
//    npm install --save-dev jest @testing-library/react @testing-library/jest-dom
//    npm install --save-dev @testing-library/user-event jest-environment-jsdom
//    npm install --save-dev @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy
//
// 5. Comando para ejecutar tests:
//    npm test