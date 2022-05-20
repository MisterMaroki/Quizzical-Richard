import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --black: #000000;
    --white: #ffffff;

    --font-primary: "Open Sans", sans-serif;
    --font-title: "Press Start 2P", cursive;

    --x1: 12px;
    --x2: 16px;
    --x3: 20px;
    --x4: 24px;
    --x5: 32px;
    --x6: 64px;
    
    --f1: 0.75rem;
    --f2: 0.875rem;
    --f3: 1rem;
    --f4: 1.25rem;
    --f5: 1.5rem;
    --f6: 2rem;
}
`