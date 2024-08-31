import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
  
}

main {
  /* width:100vw;
  height:100vh; */

    
    
  /* padding: 0 10px; */
  overflow:hidden;


}
body {
  overflow-x:hidden;

}
a {
  text-decoration:none;
}

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
    border:none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}
#root {
}




`;
