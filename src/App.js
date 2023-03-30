import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
