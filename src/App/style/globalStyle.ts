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
#root [data-is-root-theme] {
  min-height:auto !important;
  width: 100%;
  background: url("/Background.webp");
  background-size: cover; /* Для адаптации изображения по размеру элемента */
  background-repeat: no-repeat; /* Чтобы избежать повторения изображения */
  background-position: center;
}




`;
