// Configuración de Babel para Jest
// Necesaria para transformar JSX y código moderno de JavaScript

export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};