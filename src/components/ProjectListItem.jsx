import react from 'react';

function ProjectListItem({project}) {
  //Renders each project as a list item with an image, the project name, and a short description
  return (
    <li className="flex justify-between gap-x-6 p-5">

        <img src={project.image} alt={project.name} className="w-50 self-start" />

        <div className="min-w-0 flex-auto">
            <h3 className="text-base font-semibold text-gray-900 mb-2">{project.name}</h3>
            <p className="text-sm text-gray-900">{project.description}</p>
        </div>

    </li>
  )
}

export default ProjectListItem;