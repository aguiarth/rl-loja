import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

// Importações específicas para o TypeScript ESLint
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";


export default [
  // 1. Configuração Principal: Aplica a JS, JSX, TS, TSX
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    // Opções de linguagem (parser, globais, etc.)
    languageOptions: {
      parser: tsParser, // Usa o parser TypeScript para arquivos TS/TSX
      parserOptions: {
        ecmaFeatures: {
          jsx: true // Habilita o suporte a JSX
        },
        ecmaVersion: "latest", // Suporta as últimas features do ECMAScript
        sourceType: "module", // Habilita módulos ES (import/export)
        project: './tsconfig.json', // Adiciona suporte a informações de tipo se precisar de regras que dependem disso
      },
      // DEFINIÇÃO DE GLOBAIS: Isso deve resolver os 'no-undef'
      globals: {
        ...globals.browser, // Inclui 'document', 'window', 'localStorage', 'fetch', 'console', HTMLElement, HTMLInputElement, etc.
        ...globals.node,    // Inclui 'console' e outras globais do Node.js
        expect: "readonly", // Variável global 'expect' do Vitest/Jest
        vi: "readonly"      // Variável global 'vi' do Vitest
      }
    },
    // Plugins a serem usados
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "@typescript-eslint": tsPlugin, // Alias para o plugin TypeScript
      prettier: pluginPrettier // Alias para o plugin Prettier
    },
    // Regras
    rules: {
      // Regras ESLint JS padrão (mesmo que js.configs.recommended)
      ...js.configs.recommended.rules,

      // Regras TypeScript recomendadas (desestruturadas)
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "warn", // Mudei para warn, ajuste se quiser erro
      "@typescript-eslint/no-empty-object-type": "off", // Desativado para styled-components

      // Regras React (desestruturadas)
      ...react.configs.recommended.rules,
      // RESOLVE 'React' must be in scope when using JSX para React 17+
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // Desativa se você usa TypeScript para tipagem de props

      // Regras React Hooks (desestruturadas)
      ...reactHooks.configs.recommended.rules,

      // Regras JSX A11y (desestruturadas)
      ...jsxA11y.configs.recommended.rules,
      "jsx-a11y/no-autofocus": "error", // Manter o erro de autoFocus como estava

      // Regras Prettier (sempre por último para desabilitar regras conflitantes)
      "prettier/prettier": ["error", { "endOfLine": "auto" }],
    },
    // Configurações para plugins (ex: versão do React)
    settings: {
      react: {
        version: "detect" // Detecta automaticamente a versão do React
      }
    }
  },

  // Configuração para arquivos de teste (se precisar de algo muito específico para eles)
  // {
  //   files: ["**/*.test.{js,jsx,ts,tsx}"],
  //   rules: {
  //     // Adicione regras específicas para testes aqui, se necessário
  //   }
  // }
];