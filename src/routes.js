import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobList from './pages/JobList';
import JobCreate from './pages/JobCreate';
import JobDetails from './pages/JobDetails';
import JobEdit from './pages/JobEdit';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/job/list" element={<JobList />} />
      <Route path="/job/create" element={<JobCreate />} />
      <Route path="/job/view/:id" element={<JobDetails />} />
      <Route path="/job/edit/:id" element={<JobEdit />} />
      <Route path="/" element={<JobList />} />
    </Routes>
  );
};

export default AppRoutes;
