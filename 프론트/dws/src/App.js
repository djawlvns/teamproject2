import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { LayoutApp } from "./LMS/LayoutApp";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family: Poppins, GmarketSansMedium;
    user-select: none;
  }
`;

const client = new QueryClient();

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <LayoutApp />
      </QueryClientProvider>
    </>
  );
}
