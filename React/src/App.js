import Header from './components/Header.js';
import Content from './components/Content.js';
import Splitter from './components/Splitter.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <> 
      <Header />
      <Splitter loc="header" />
      <Content />
      <Splitter loc="footer" />
      <Footer />
    </>
  );
}

export default App;
