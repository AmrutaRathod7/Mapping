import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDetails from './Components/ProfileDetails';
import ProfileCard from './Components/ProfileCard';
import AdminPanel from './Components/AdminPanel';
import MapComponent from './Components/MapComponent';
import ProfileList from './Components/ProfileList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileList />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
