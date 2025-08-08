import { useState } from 'react';
import Header from './Header';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import '../styles/App.css';
import projectData from '../data/projects';

function App() {
  const [projects, setProjects] = useState(projectData);

  function onFormSubmit(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <>
      <Header />
      <ProjectForm onFormSubmit={onFormSubmit} />
      <ProjectList projects={projects} />
    </>
  )
}

export default App
