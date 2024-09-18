import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
    --base-clr: #0F1923;
    --secondary-clr: #31323a;
    --third-clr: #5C5C5C;
    --line-clr: #42434a;
    --hover-clr: #222533;
    --text-clr: #e6e6ef;
    --accent-clr: #5e63ff;
    --secondary-text-clr: #b0b3c1;
    --main-font: 'Poppins';
}

*{
    margin: 0;
    padding: 0;
}

html{
    font-family: var(--main-font);
    line-height: 1.5rem;
}

body{
    min-height: 100vh;
    min-height: 100dvh;
    background-color: var(--base-clr);
    color: var(--text-clr);
    
}

#section1{
    display: grid;
    grid-template-columns: auto 1fr;
}


#section2{
    display: flex;
    align-items: center;
    flex-direction: column;
}

`