// Configuración de Jest para trabajar con Vite y React
export default {
  // Entorno de prueba: simula un navegador
  testEnvironment: 'jsdom',

  // Archivos de configuración que se ejecutan antes de cada test
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  // Transformar archivos JSX/JS usando babel-jest
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Extensiones de archivo que Jest debe procesar
  moduleFileExtensions: ['js', 'jsx'],

  // Ignorar node_modules al buscar tests
  testPathIgnorePatterns: ['/node_modules/'],

  // Archivos que Jest debe considerar como tests
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],

  // Mapear imports de archivos estáticos (CSS, imágenes, etc.)
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
  },

  // Cobertura de código (opcional)
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.jsx',
    '!src/**/*.test.{js,jsx}',
  ],
};

