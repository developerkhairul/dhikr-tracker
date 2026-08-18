import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Counter from './pages/counter';
import Settings from './pages/settings';
import { History } from './pages/history';
import { Statistics } from './pages/statistics';
import { DhikrList } from './pages/dhikr/dhikr-list';
import { DhikrCreate } from './pages/dhikr/dhikr-create';
import MainLayout from './layouts/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="/dhikr-tracker">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dhikr" element={<DhikrList />} />
            <Route path="dhikr/new" element={<DhikrCreate />} />
            <Route path="counter" element={<Counter />} />
            <Route path="history" element={<History />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;