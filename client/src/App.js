import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import PlatformLinks from './features/PlatformLinks';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PlatformLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
