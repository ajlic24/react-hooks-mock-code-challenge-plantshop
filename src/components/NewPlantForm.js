import React, { useState } from "react";

function NewPlantForm({setPlants}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newPlant = {name: formData.name, image: formData.image, price: formData.price}
    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(data => setPlants(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" value={formData.name} />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={formData.image}  />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" value={formData.price}  />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
