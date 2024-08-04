import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchJob = async (id) => {
  const { data } = await axios.get(`/api/jobs/${id}`);
  return data;
};

const updateJob = async ({ id, job }) => {
  const { data } = await axios.put(`/api/jobs/${id}`, job);
  return data;
};

const JobEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: job } = useQuery(['job', id], () => fetchJob(id));
  const mutation = useMutation(updateJob, {
    onSuccess: () => {
      queryClient.invalidateQueries(['job', id]);
      navigate(`/job/view/${id}`);
    },
  });

  const [jobDetails, setJobDetails] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    if (job) {
      setJobDetails(job);
    }
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevJob) => ({
      ...prevJob,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ id, job: jobDetails });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edit</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={jobDetails.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            name="content"
            value={jobDetails.content}
            onChange={handleChange}
            placeholder="Job Content"
            className="textarea textarea-bordered w-full"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="btn bg-black text-white">Save Changes</button>
      </form>
    </div>
  );
};

export default JobEdit;
