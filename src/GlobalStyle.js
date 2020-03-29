import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    div {
        box-sizing: border-box;
    }
    html, body, #root {
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }
`;

export default globalStyles;
