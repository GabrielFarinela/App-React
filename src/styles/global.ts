import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-width: 100vw;
        min-height: 100vh;
    }

    #root{
        display: flex;
        flex-direction: row;
        >main{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }

`;