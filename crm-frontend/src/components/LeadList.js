import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leads')
      .then(response => {
        setLeads(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the leads!", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Leads</h2>
      <div className="row">
        {leads.map((lead) => (
          <div key={lead._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{lead.name}</h5>
                <p className="card-text">{lead.project}</p>
                <p className="card-text">{lead.phone}</p>
                <p className="card-text">{lead.email}</p>
                <p className="card-text">{lead.address}</p>
                <p className="card-text">{new Date(lead.meetingTime).toLocaleString()}</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadList;
