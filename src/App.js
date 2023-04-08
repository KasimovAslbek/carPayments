import './index.css';
import Bar from './components/Bar';
import Hero from './components/Hero';
import News from './components/News';
import Product from './components/Product';
import Discover from './components/Discover';
import Customers from './components/Customers';
import Faqs from './components/Faqs';
import Apart from './components/Apart';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App font-poppins">
      <Bar/>
      <Hero/>
      <News/>
      <Product/>
      <Discover/>
      <Customers/>
      <Faqs/>
      <Apart />
      <Footer />
    </div>
  );
}

export default App;
