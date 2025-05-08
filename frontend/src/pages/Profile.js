import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

  useEffect(() => {
    // Simulated fetch – replace with actual API call
    // fetchUserProfile().then(setUser);
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;