import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ProjectListItem from './ProjectListItem';

function ProjectList({projects}) {
  const [searchTerm, setSearchTerm] = useState('');

  function onSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredProjects = projects.filter((project => project.name.includes(searchTerm)))

  return (
    <>
      <input type="text" name="search" placeholder="Search Projects" onChange={onSearchChange} />
      <ul className="Projects">
        {filteredProjects.map(project => (
            <ProjectListItem key={uuid()} project={project} />
        ))}
      </ul>
    </>
  )
}

export default ProjectList;
