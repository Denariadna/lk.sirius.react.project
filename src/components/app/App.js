import './App.css';
import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePade';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import { Responses404 } from '@consta/uikit/Responses404';
import MainLayout from '../../layout/main-layouts/MainLayout';
import { AppRoute } from '../../const';

function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={AppRoute.servisDetails} element={<ServiceDetailPage />} />
          </Route>
          <Route path='*' element={<Responses404 />} />
        </Routes>
      </BrowserRouter>
    </Theme >
  );
};

export default App;
