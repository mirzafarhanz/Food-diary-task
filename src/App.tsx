import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import footer from './components/footer';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Detail Route with Dynamic ID */}
        <Route path="/recipe/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
