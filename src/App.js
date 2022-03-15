import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import MainPage from './pages/MainPage';

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}

function App() {
  // index 속성은 사이트에 들어갔을때 기본으로 보여주도록 한다. 해당 라우트가 들어있는 상위 라우트도 자동으로 보여지게 된다.
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path=":movieId" element={<DetailPage />}/>
          <Route path="search" element={<SearchPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
