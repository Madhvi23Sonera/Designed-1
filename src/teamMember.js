// TeamMember.js

import React from 'react';

const TeamMember = ({ name, position, image,qualification }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{qualification}</p>
    </div>
  );
};

export default TeamMember;
