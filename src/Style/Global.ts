import { createGlobalStyle } from "styled-components";



export const Global = createGlobalStyle`
:root{
     --soft-blue: #8BABD9;
     --cyan: #00FFF6;
     --main-bg: #0C182B;
     --card-bg: #14243D;
     --line-blue:#2E415A;
     --white:#FFFFFF;
}

    *{
        margin: 0;
        padding: 0;
        font-size: 18px;
    }
    html{
        

        @media(max-width:1080px)
        {
            font-size: 93.75%;
        }
        @media(max-width:720px)
        {
            font-size: 82.5%;
        }
        
    }
    body{
        font-family: 'Outfit', sans-serif;
        background-color: var(--main-bg);
    }

`;