import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        {children}
      </div>
    </div>
  );
};


const JobCreate = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    title: '',
    content: ''
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate('/job/list');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create a new job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            name="content"
            value={job.content}
            onChange={handleChange}
            placeholder="Job Content"
            className="textarea textarea-bordered w-full"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="btn bg-black text-white">Create Job</button>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold mb-4">Job Created Successfully</h2>
        <p>Title: {job.title}</p>
        <p>Content: {job.content}</p>
        <button onClick={handleCloseModal} className="btn bg-black text-white mt-4">Close</button>
      </Modal>
    </div>
  );
};

export default JobCreate;
