import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  background: url('https://i.imgur.com/IuBXS4S.png') no-repeat center center fixed;
  background-size: cover;
`;

const PersonalInfo = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
`;

const MainContent = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
`;

const JobOption = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const January = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      company: "Planetary Oxygen Canning Factory",
      position: "Canister Assembly Technician",
      salary: 18,
      description: "The Planetary Oxygen Canning Factory is known to pay a good wage starting out, but they are slow to give a raise."
    },
    {
      id: 2,
      company: "Knob Hair Piece Harvesting Co.",
      position: "Harvesting Supervisor",
      salary: 12,
      description: "Knob Hair Piece Harvesting Co. tends to start an employee off at a lower wage, but is quick to offer raises to good employees."
    }
  ];

  const handleJobSelection = (job) => {
    setSelectedJob(job);
    // Add your original job selection logic here
    // This will include updating gameState with job details
  };

  return (
    <Container>
      <PersonalInfo>
        <h2>Personal Information</h2>
        <h3>MONTHLY STATEMENT</h3>
        <h4>January</h4>
        <p>Gross Salary: $0.00</p>
        <p>Income Tax: $0.00</p>
        <p>Net Income: $0.00</p>
        <p>Checking Account: $0.00</p>
        <p>Total Cash: $0.00</p>
      </PersonalInfo>
      
      <MainContent>
        <img src="https://i.imgur.com/your-knob-image.png" alt="Knob Landscape" />
        <h2>Welcome to Knob!</h2>
        <p>You've landed on Knob. While you're slowly getting used to the atmosphere, you need to quickly find a job. And because Knob's unemployment rate is a low 0.001%, you're offered two jobs right away.</p>
        <p>Choose a job below and then complete the W-4 Form that appears after you've made your selection.</p>
        
        {jobs.map(job => (
          <JobOption key={job.id}>
            <h3>Job #{job.id}</h3>
            <p>Company: {job.company}</p>
            <p>Position: {job.position}</p>
            <p>Salary: ${job.salary} per hour</p>
            <p>Knob Blab: {job.description}</p>
            <Button onClick={() => handleJobSelection(job)}>I'll Take It</Button>
          </JobOption>
        ))}
      </MainContent>
    </Container>
  );
};

export default January;