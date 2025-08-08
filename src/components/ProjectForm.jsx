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
  }

  return (
    <form onSubmit={onSubmit}>
        <h2>Add Project</h2>
        <label>
            Title
            <input type="text" name="title" onChange={onTitleChange} value={formData.name} />
        </label>
        <label>
            Description
            <textarea name="description" onChange={onDescriptionChange} value={formData.description} />
        </label>

        <button type="submit">Add</button>
    </form>
  )
}

export default ProjectForm;
