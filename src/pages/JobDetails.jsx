import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = {
    title: 'Marketing Manager',
    description: 'Occaecati est et illo quibusdam accusamus qui...',
    responsibilities: [
      'Working with agency for design drawing detail, quotation and local production.',
      'Produce window displays, signs, interior displays, floor plans and special promotions displays.',
      'Change displays to promote new product launches and reflect festive or seasonal themes.',
      'Planning and executing the open/renovation/ closing store procedure.',
      'Follow-up store maintenance procedure and keep updating SKU In & Out.'
    ],
    postedDate: '02 Aug 2024',
    expirationDate: '02 Aug 2024',
    employmentType: 'Part-time',
    salary: 'Negotiable',
    experience: '1 year exp',
    company: {
      name: 'Gleichner, Mueller and Tromp',
      address: '1147 Rohan Drive Suite 819 - Burlington, VT / 82021'
    }
  };

  return (
    <div className="p-4 ">
      <button onClick={() => navigate(-1)} className="btn btn-secondary mb-4">Back</button>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <div>
            <button className="btn btn-secondary mr-2" onClick={() => navigate(`/job/edit/${id}`)}>Edit</button>
            <button className="btn bg-black text-white">Published</button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Job description</h2>
          <p>{job.description}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Key responsibilities</h2>
          <ul className="list-disc pl-5">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex">
          <div className="w-1/2">
            <p><strong>Date posted:</strong> {job.postedDate}</p>
            <p><strong>Expiration date:</strong> {job.expirationDate}</p>
            <p><strong>Employment type:</strong> {job.employmentType}</p>
            <p><strong>Offered salary:</strong> {job.salary}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
          </div>
          <div className="w-1/2">
            <p><strong>Company:</strong> {job.company.name}</p>
            <p>{job.company.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
