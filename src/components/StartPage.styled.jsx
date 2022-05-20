import styled from "styled-components";

// @ts-ignore
export const StartPageWrapper = styled.div`
font-family: var(--font-primary);
background: pink;
padding: var(--f4);

.settings-container {
    border: 1px solid black;
    padding: var(--f4);
}

h1 {
    font-family: var(--font-title);
}

select {
    background: inherit;
    border: 1px solid black;
    padding: var(--f1) var(--f6);
}

button {
    padding: var(--f1) var(--f6);
}

`