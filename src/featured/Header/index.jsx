import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa"; 
import { FiSettings } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <img src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/workspaces/logo-1.webp" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Team 1</span>
          <div className="text-sm text-gray-600">Free</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <img src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/gb.webp" alt="Flag" className="w-8 h-6 rounded" />
        </button>
        <button className="text-[23px]">
          <IoNotificationsOutline />
        </button>
        <div className="text-[23px] flex gap-4">
          <FaUserFriends /> 
          <FiSettings />
        </div>
        <img className="w-10 h-10 rounded-full" src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp" alt="Avatar"/>
      </div>
    </header>
  );
};

export default Header;
