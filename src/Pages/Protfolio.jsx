import React from 'react'
import Footer from '../Components/Footer';

function Protfolio() {
  return (
    <div className='mt-20'>
    <div className="text-center">
      {/* Profile Card */}
      <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <a href="https://x.com/nur637788/photo" target="_blank" rel="noopener noreferrer">
          {/* Cover Photo */}
          <div className="relative">
            <img
              className="h-36 w-full object-cover"
              src="https://nur637788protfolio.netlify.app/my%20protfolio%20website.png"
              alt="Cover"
            />
            {/* Profile Photo */}
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
              <img
                className="h-28 w-28 rounded-full ring-4 ring-blue-600 object-cover"
                src="https://nur637788protfolio.netlify.app/profile%20image1.jpg"
                alt="Profile"
              />
            </div>
          </div>

          {/* Info */}
          <div className="pt-16 pb-6 text-center">
            <h1 className="text-xl font-bold text-gray-800">Md. Abdun Nur</h1>
            <p className="text-gray-500 text-sm px-10">
             Hi, I'm Abdun Nur
Creative Frontend web Developer & Designer
            </p>

            {/* Followers */}
            <div className="flex justify-center gap-6 mt-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">99</p>
                <p className="text-gray-500 text-xs">Followers</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">79</p>
                <p className="text-gray-500 text-xs">Viewer</p>
              </div>
            </div>

            
            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Follow
              </button>
              <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Contact
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Protfolio;
