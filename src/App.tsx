import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/offer';
import Error from './pages/Error';
import { AppRoute, AuthorizationStatus } from './constanse';
import PrivateRoute from './components/Privateroute';

export default function App(props) {
  const isAuth = AuthorizationStatus.Auth;


  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} key={AppRoute.Root} element={<Main places={props.places} />} />
        <Route path={AppRoute.Login} key={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorite}
          key={AppRoute.Favorite}
          // element={
          //   isAuth === AuthorizationStatus.Auth
          //     ? <Favorites />
          //     : <Navigate to={'/login'} />
          // }
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
              path={AppRoute.Login}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} key={AppRoute.Offer} element={<Offer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
