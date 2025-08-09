import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import ProjectListItem from './ProjectListItem';
import ProjectPage from './ProjectPage';

function ProjectList({projects}) {
  const [searchTerm, setSearchTerm] = useState('');

  function onSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredProjects = projects.filter((project => project.name.includes(searchTerm)))

  return (
    <div className="ProjectList">
      <div className="SearchBar">
        <input type="text" name="search" placeholder="Search Projects" onChange={onSearchChange} className="block w-full rounded-md bg-white py-1.5 px-3 text-base text-gray-900 outline-1 -outline-offset-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:text-sm/6" />
      </div>
      <ul className="Projects divide-y divide-gray-100">
        {filteredProjects.map(project => (
            <Link key={uuid()} to={`/${project.name.replace(' ', '-')}`}>
            <ProjectListItem project={project} />
        </Link>
        ))}
      </ul>
      <Routes>
        <Route path="/"></Route>
        <Route path="/:name" element={<ProjectPage />} />
      </Routes>
    </div>
  )
}

export default ProjectList;
