'use client';

import { useState } from 'react';

const NavBar = () => {
  const [classDropdown, setClassDropdown] = useState(false);
  const [skillDropdown, setSkillDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png" // Replace with your logo path
            alt="10 Minute School"
            className="h-8 mr-4"
          />
          <input
            type="text"
            placeholder="কোর্স খুঁজুন, স্কুল প্রোগ্রাম সার্চ করুন..."
            className="border rounded-md px-4 py-2 focus:outline-none w-80"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setClassDropdown(!classDropdown)}
              className="text-gray-800 hover:text-green-600"
            >
              ক্লাস ৬-১২ ▾
            </button>
            {classDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md p-2 w-48">
                <ul className="space-y-2">
                  {['ষষ্ঠ শ্রেণি', 'সপ্তম শ্রেণি', 'অষ্টম শ্রেণি', 'নবম শ্রেণি', 'দশম শ্রেণি'].map((item, index) => (
                    <li
                      key={index}
                      className="hover:bg-gray-100 rounded-md px-3 py-1 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setSkillDropdown(!skillDropdown)}
              className="text-gray-800 hover:text-green-600"
            >
              স্কিলস ▾
            </button>
            {skillDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md p-2 w-48">
                <ul className="space-y-2">
                  {[
                    'ডিজাইন',
                    'ডেভেলপমেন্ট',
                    'মার্কেটিং',
                    'প্রোগ্রামিং',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="hover:bg-gray-100 rounded-md px-3 py-1 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="#!" className="text-gray-800 hover:text-green-600">
            ইংলিশ সেন্টার
          </a>
          <a href="#!" className="text-gray-800 hover:text-green-600">
            আরো ▾
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="border rounded-md px-4 py-2 text-green-600 border-green-600">
            লগ-ইন
          </button>
          <span className="text-green-600 font-bold">16910</span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
