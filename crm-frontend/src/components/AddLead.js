import React, { useState } from 'react';
import axios from 'axios';

const AddLead = () => {
  const [lead, setLead] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    project: '',
    notes: '',
    meetingTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead({
      ...lead,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/leads', lead)
      .then(response => {
        alert('Lead added successfully');
        setLead({
          name: '',
          address: '',
          phone: '',
          email: '',
          project: '',
          notes: '',
          meetingTime: ''
        });
      })
      .catch(error => {
        console.error('There was an error adding the lead!', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Lead</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={lead.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={lead.address} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="phone" name="phone" value={lead.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={lead.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="project" className="form-label">Project</label>
          <input type="text" className="form-control" id="project" name="project" value={lead.project} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">Notes</label>
          <textarea className="form-control" id="notes" name="notes" value={lead.notes} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="meetingTime" className="form-label">Meeting Time</label>
          <input type="datetime-local" className="form-control" id="meetingTime" name="meetingTime" value={lead.meetingTime} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Lead</button>
      </form>
    </div>
  );
};

export default AddLead;
