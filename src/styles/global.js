import { createGlobalStyle } from "styled-components";
import imgBackground from "../assets/bg-pattern-top.svg";
import imgBackgroundBottom from "../assets/bg-pattern-bottom.svg";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
        
    }
    :root{
        --darkcyan: #339999;
        --verydark: #333333;
        --darkgraysish: #666666;
        --darkgray: #999999;
    }
    body{
        display: flex ;
        justify-content: center ;
        align-items: center;
        min-height: 100vh;
        background: url(${imgBackground}),url(${imgBackgroundBottom});
        background-repeat: no-repeat, no-repeat;
        background-position: right 48vw bottom 40vh, left 45vw top 44vh;
        background-color: #339999;
    }
`;
