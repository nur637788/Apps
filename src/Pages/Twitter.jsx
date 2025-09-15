import React from 'react'

function Twitter() {
  return (
    <div className='mt-20 mb-10'>
    <div className="text-center">
      {/* Profile Card */}
      <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <a href="https://x.com/nur637788/photo" target="_blank" rel="noopener noreferrer">
          {/* Cover Photo */}
          <div className="relative">
            <img
              className="h-36 w-full object-cover"
              src="https://pbs.twimg.com/profile_banners/1512974430355750915/1730056325/1080x360"
              alt="Cover"
            />
            {/* Profile Photo */}
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
              <img
                className="h-28 w-28 rounded-full ring-4 ring-blue-600 object-cover"
                src="https://pbs.twimg.com/profile_images/1850616809315340288/5kjVplwq_400x400.jpg"
                alt="Profile"
              />
            </div>
          </div>

          {/* Info */}
          <div className="pt-16 pb-6 text-center">
            <h1 className="text-xl font-bold text-gray-800">Md. Abdun Nur</h1>
            <p className="text-gray-500 text-sm px-10">
              Hi I'm Abdun Nur Freelancer & Digital Marketer And Frontend Developer & Designer
            </p>

            {/* Followers */}
            <div className="flex justify-center gap-6 mt-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">1</p>
                <p className="text-gray-500 text-xs">Followers</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">33</p>
                <p className="text-gray-500 text-xs">Following</p>
              </div>
            </div>

            {/* Mutual Friends */}
            <div className="mt-5 -space-x-3 flex justify-center">
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?q=80&w=256&h=256"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=256&h=256"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256"
                alt=""
              />
            </div>
            <p className="text-sm text-blue-500 mt-2 cursor-pointer">+ 198 others</p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Follow
              </button>
              <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Message
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Twitter;
