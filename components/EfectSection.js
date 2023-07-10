import React from 'react';
import { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

function Example() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  
  return (
    <>
      <nav className="bg-light">
        <ul className="flex justify-center">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                activeClassName="active"
                exact={route.path === '/'}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}

const EfectSection = () => (
  <RouterProvider router={router} />
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<EfectSection />);

export default EfectSection;
