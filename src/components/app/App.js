import React, { useEffect } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePade';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import Auth from '../../pages/auth/Auth';
import { Responses404 } from '@consta/uikit/Responses404';
import MainLayout from '../../layout/main-layouts/MainLayout';
import { AppRoute } from '../../const';
import Profile from '../../pages/profile/Profile';
import ProtectedRoute from '../ProtectedRoute';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { Button } from '@consta/uikit/Button';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Проверяем, если пользователь авторизован в localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={AppRoute.serviceDetails} element={<ServiceDetailPage />} />
            <Route path={AppRoute.auth} element={<Auth />} />
            <Route
              path={AppRoute.user}
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<Responses404 actions={<Button label={"Вернуться назад"} onClick={() => window.history.back()} />} />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
