import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Missing } from '@/pages/Missing';
import { Dashboard } from '@/pages/Dashboard';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Set the general layout across all pages */}
      <Route path="/" element={<Layout />}>
        {/* Pages (would be private routes)*/}
        <Route path="/" element={<Dashboard />} />

        {/* 404 not found */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};
