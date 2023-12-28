import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Loader';

// lazy loading for imageGallary first component
const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./ImageGallary'));
    }, 2000);
  });
});

// lazy loading for imageGallary second component
const About = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./ImageGallary2'));
    }, 2000);
  });
});

const App = () => {
  return (
    <div className="App">
      {/* Routing and add loader using Suspense react built-in method  */}
      <Router>
        <Routes>
          <Route path="/" element={<><Suspense fallback={<Loader/>}><Home /></Suspense></>}/>
          <Route path="/about" element={<Suspense fallback={<Loader/>}><About /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
