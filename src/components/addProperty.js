import React, { useState } from "react";
import "../styles/addProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="add-property">
      <h2 className="add-property-header">Add Property Page</h2>
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title -
          <input
            id="title"
            name="title"
            value={fields.title}
            placeholder="Property Name"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City -
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms -
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            placeholder="Number of Bedrooms"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms -
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            placeholder="Number of Bathrooms"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price (£) -
          <input
            id="price"
            name="price"
            value={fields.price}
            placeholder="Property Asking Price"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email -
          <input
            id="email"
            name="email"
            value={fields.email}
            placeholder="Contact Email"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="type">
          Type -
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <button className="submit-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddProperty;
