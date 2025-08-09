import {useState} from 'react';

function ProjectForm({onFormSubmit}) {
  const [formData, setFormData] = useState({name:'', description: '', image: '/src/assets/coding.png'});

  function onTitleChange(event) {
    setFormData({...formData, name: event.target.value});
  }

  function onDescriptionChange(event) {
    setFormData({...formData, description: event.target.value});
  }

  function onSubmit(event) {
    event.preventDefault();
    onFormSubmit(formData);
    setFormData({name:'', description: '', image: '/src/assets/coding.png'});
  }

  return (
    <form onSubmit={onSubmit}>
        <h2 className="text-lg/7 font-semibold text-gray-900 mb-2">Add Project</h2>
        <label className="block text-sm/6 font-medium text-gray-900">
            Title
            <input className="block w-full rounded-md mb-2 bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 outline-1 -outline-offset-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:text-sm/6" type="text" name="title" onChange={onTitleChange} value={formData.name} />
        </label>
        <label className="block text-sm/6 font-medium text-gray-900">
            Description
            <textarea className="block w-full rounded-md mb-2 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" name="description" onChange={onDescriptionChange} value={formData.description} />
        </label>

        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
    </form>
  )
}

export default ProjectForm;
