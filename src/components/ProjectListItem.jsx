import react from 'react';

function ProjectListItem({project}) {

  return (
    <li>
        <img src={project.image} alt={project.name} />
        <h3>{project.name}</h3>
        <p>{project.description}</p>
    </li>
  )
}

export default ProjectListItem;