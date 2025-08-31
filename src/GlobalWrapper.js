import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @page {
    size: A4 landscape;
    margin: 0;
  }

  @media print {
    body {
      margin: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }

  body {
    background: #eee; /* to help visualize the page in browser */
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyle;