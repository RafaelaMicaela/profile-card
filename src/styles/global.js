import { createGlobalStyle } from "styled-components";
import imgBackground from '../assets/bg-pattern-top.svg';
import imgBackgroundBottom from '../assets/bg-pattern-bottom.svg';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --darkcyan: hsl(185, 75%, 39%);
        --verydark: hsl(229, 23%, 23%);
        --darkgraysish:  hsl(227, 10%, 46%);
    }
    body{
        font-family:'Kumbh Sans',sans-serif; 
        background-color: hsl(185, 75%, 39%);
        display: flex ;
        align-items: center;
        min-height: 100vh;
        background:url(${imgBackground}),url(${imgBackgroundBottom});
        background-repeat: no-repeat, no-repeat;
        background-position: right 48vw bottom 40vh, left 45vw top 44vh;
    }
`