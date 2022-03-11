import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Card from './components/Card.js';
import { Container } from './components/styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.js';
import content from './content.js';

const theme = {
  colors: {
    header: '#D41E00',
    body: '#010100',
    footer: '#D41E00',
  },
  mobile:'768px',
};

function App() {
  return (
    <ThemeProvider theme ={theme}>
      <>
      <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
