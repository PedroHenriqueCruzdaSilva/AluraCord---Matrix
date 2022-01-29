function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
        /* SCHOLL BAR */

        ::-webkit-scrollbar {
            width: 0px;
          }
          
          /* Track */
          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 0px grey; 
            border-radius: 5px;
          }
          
          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #131212b9; 
            border-radius: 5px;
          }
      `}</style>
    );
  }

export default function MyApp({ Component, pageProps }) {
  console.log('Roda em todas as paginas.');  
  return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
  }

