import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './header/Header';
import { Home } from 'pages/home/Home';
import { Movies } from 'pages/movies/Movies';
import { Error404 } from 'pages/error404/Error404';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
