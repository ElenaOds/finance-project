import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';

const MainPage = lazy(() => import('./pages/MainPage'));

function App() {

  return (
  <>
     <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element ={<Navigate to="tickers"/>} />
            <Route path="/tickers" element={<MainPage />} /> 
         </Route>
        </Routes>
     </Suspense>
  </>
  )
}

export default App;
