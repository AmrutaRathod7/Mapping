import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import { fetchProfiles } from '../Services/api'; // Adjust the import path according to your project structure

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Fetch profiles from API when component mounts
  useEffect(() => {
    fetchProfiles()
      .then(response => {
        console.log(response.data); // Check if data is being received
        setProfiles(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  
  // Filter profiles based on search term
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile-list-container">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search profiles by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input change
        className="search-input"
      />

      {/* Display Filtered Profiles */}
      <div className="profile-list">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
          ))
        ) : (
          <p>No profiles found.</p>  // Message when no profiles match the search term
        )}
      </div>
    </div>
  );
};

export default ProfileList;
