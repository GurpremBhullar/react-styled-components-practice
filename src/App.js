import Header from './components/Header.js';
import Card from './components/Card.js';
import { Container } from './components/styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.js';
import content from './content.js';

const theme = {
  colors: {
    header: 'white',
    body: 'lightblue',
    footer: '#003333',
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
      </>
    </ThemeProvider>
  );
}

export default App;
