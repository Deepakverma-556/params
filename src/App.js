import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Try from './components/Try';
import Menu from './components/Menu';
import TabsTest from './components/TabsTest';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/card/:id" element={<Menu />} />
        <Route path="/card/try" element={<Try />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<TabsTest/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
