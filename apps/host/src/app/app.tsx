import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const About = React.lazy(() => import('about/Module'));

const CRA = React.lazy(() => import('cramfedemo/App'));

const Vue = React.lazy(() => import('app_exposes/App'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/cra">CRA</Link>
        </li>

        <li>
          <Link to="/vue">Vue</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />} />

        <Route path="/cra" element={<CRA />} />
        <Route path="/vue" element={<Vue />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
