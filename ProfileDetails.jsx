import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MapComponent from './MapComponent';
import { fetchProfiles } from '../Services/api';
const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch profile details
    axios.get(`/api/profiles/${id}`)
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <MapComponent address={profile.address} />
    </div>
  );
};

export default ProfileDetails;
