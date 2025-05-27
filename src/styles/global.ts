import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --toastify-color-success: ${(props) => props.theme.primary};
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

body {
    font-family: 'Quicksand', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-weight: 600;
    font-size: 1.5rem;
}

button {
    cursor: pointer;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 6px;
    padding: 0.35rem 0.75rem;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${(props) => props.theme["base-hover"]};
    }
}
`;
