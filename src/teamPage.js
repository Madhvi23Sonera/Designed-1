import React from 'react';
import TeamMember from './teamMember';
import './TeamPage.css';

const teamMembers = [
  { name: 'John Doe', position: 'Position - CEO', image: 'member1.jpg',qualification:'Qualification - PHD in media marketing' },
  { name: 'Cane meo', position: 'Position - President', image: 'member2.jpg',qualification:'Qualification - post graduate' },
  { name: 'Jemsh smith', position: 'Position - vice President', image: 'member3.jpg',qualification:'Qualification - post graduate' },
  { name: 'Oliver', position: 'Position - Teachnical manager', image: 'member4.jpg',qualification:'Qualification - graduate' },
  { name: 'William', position: 'Position - IT manager', image: 'member5.jpg',qualification:'Qualification - graduate' },
  { name: 'Lucas', position: 'Position - Team Leader 1', image: 'member6.jpg',qualification:'Qualification - graduate' },
  { name: 'Henary', position: 'Position - Team Leader 2', image: 'member7.jpg' ,qualification:'Qualification - graduate'},
  { name: 'Jane Smith', position: 'Position - HR', image: 'member10.jpg',qualification:'Qualification - MBA'},
  // Add more team members here...
];

const TeamPage = () => {
  return (
    <div className="team-page">
      <h1>Our Team Members</h1>
      <h2>"Behind every successful company are dedicated team members, each bringing their unique talents to the table. Together, they form the beating heart of innovation and excellence, driving the company towards new heights of success."</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} position={member.position} image={member.image} qualification={member.qualification} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;

