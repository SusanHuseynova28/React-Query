import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [jobMenuOpen, setJobMenuOpen] = useState(true);

  const toggleJobMenu = () => {
    setJobMenuOpen(!jobMenuOpen);
  };

  return (
    <aside className="w-64 h-screen bg-white flex flex-col">
      <div className="p-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 512 512"><defs><linearGradient id=":r34:-1" x1="100%" x2="50%" y1="9.946%" y2="50%"><stop offset="0%" ></stop><stop offset="100%"></stop></linearGradient><linearGradient id=":r34:-2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="var(--palette-primary-light)"></stop><stop offset="100%" ></stop></linearGradient><linearGradient id=":r34:-3" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="var(--palette-primary-light)"></stop><stop offset="100%" stop-color="var(--palette-primary-main)"></stop></linearGradient></defs><g fill="var(--palette-primary-main)" fill-rule="evenodd" stroke="none" stroke-width="1"><path fill="url(#:r34:-1)" d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"></path><path fill="url(#:r34:-2)" d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"></path><path fill="url(#:r34:-3)" d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"></path></g></svg>
      </div>
      <nav className="flex flex-col p-4 space-y-2">
      <span className='pl-4 text-gray-500'>Overview</span>
        <NavLink
          to="/banking"
          className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
          activeClassName="bg-gray-100"
        > 
          <span className="material-icons-outlined mr-2">App</span>
          
        </NavLink>
        <NavLink
          to="/booking"
          className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
          activeClassName="bg-gray-100"
        >
          <span className="material-icons-outlined mr-2">Ecommerce</span>
         
        </NavLink>
        <NavLink
          to="/file"
          className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
          activeClassName="bg-gray-100"
        >
          <span className="material-icons-outlined mr-2">Banking</span>
          
        </NavLink>
        <NavLink
          to="/course"
          className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
          activeClassName="bg-gray-100"
        >
          <span className="material-icons-outlined mr-2">Booking</span>
          
        </NavLink>
        <div className="mt-4">
          <h2 className="text-gray-400 text-xs uppercase pl-4">Management</h2>
          <NavLink
            to="/user"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
            activeClassName="bg-gray-100"
          >
            
            <span>User</span>
          </NavLink>
          <NavLink
            to="/product"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
            activeClassName="bg-gray-100"
          >
            
            <span>Product</span>
          </NavLink>
          <NavLink
            to="/order"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
            activeClassName="bg-gray-100"
          >
            
            <span>Order</span>
          </NavLink>
          <NavLink
            to="/invoice"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
            activeClassName="bg-gray-100"
          >
           
            <span>Invoice</span>
          </NavLink>
          
          <div className="flex flex-col">
            <button
              onClick={toggleJobMenu}
              className="flex items-center py-2 px-4 rounded hover:bg-gray-100 focus:outline-none"
            >
              
              <span>Job</span>
              
            </button>
            {jobMenuOpen && (
              <div className="flex flex-col pl-8">
                <NavLink
                  to="/job/list"
                  className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
                  activeClassName="bg-gray-100"
                >
                  <span>List</span>
                </NavLink>
                <NavLink
                  to="/job/create"
                  className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
                  activeClassName="bg-gray-100"
                >
                  <span>Create</span>
                </NavLink>
                <NavLink
                  to="/job/edit/:id"
                  className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
                  activeClassName="bg-gray-100"
                >
                  <span>Edit</span>
                </NavLink>
                <NavLink
                  to="/job/view/:id"
                  className="flex items-center py-2 px-4 rounded hover:bg-gray-100"
                  activeClassName="bg-gray-100"
                >
                  <span>Details</span>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
