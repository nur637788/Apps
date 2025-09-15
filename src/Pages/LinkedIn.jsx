import React from 'react'

function LinkedIn() {
  return (
    <div className='mt-20 mb-10'>
    <div className="text-center">
      {/* Profile Card */}
      <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <a href="https://www.linkedin.com/in/nur637788/" target="_blank" rel="noopener noreferrer">
          {/* Cover Photo */}
          <div className="relative">
            <img
              className="h-36 w-full object-cover"
              src="https://media.licdn.com/dms/image/v2/D4D16AQG_Xb-qRvA8bg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1729536551033?e=1760572800&v=beta&t=RDU0jGeBqnNgdYX52VKMMq67RPMntAt6WUYG5EFNdfU"
              alt="Cover"
            />
            {/* Profile Photo */}
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
              <img
                className="h-28 w-28 rounded-full ring-4 ring-blue-600 object-cover"
                src="https://media.licdn.com/dms/image/v2/D4D03AQGUySlVUCVZbA/profile-displayphoto-scale_400_400/B4DZiR0flRGgAg-/0/1754793116005?e=1760572800&v=beta&t=JR4iaBXmjBlMVOkDh8HjGv9oO7zzcmO9kr_YUcnBgG8"
                alt="Profile"
              />
            </div>
          </div>

          {/* Info */}
          <div className="pt-16 pb-6 text-center">
            <h1 className="text-xl font-bold text-gray-800">Md. Abdun Nur</h1>
            <p className="text-gray-500 text-sm px-10">
              👨‍💻 Frontend Developer || HTML | CSS | JavaScript | React || Building Live Projects || Netlify & GitHub User
            </p>

            {/* Followers */}
            <div className="flex justify-center gap-6 mt-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">99</p>
                <p className="text-gray-500 text-xs">Followers</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">10</p>
                <p className="text-gray-500 text-xs">Following</p>
              </div>
            </div>

            {/* Mutual Friends */}
            <div className="mt-5 -space-x-3 flex justify-center">
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://media.licdn.com/dms/image/v2/D5603AQEGPphKiDMi3Q/profile-displayphoto-scale_100_100/B56ZgprICcHUAc-/0/1753045829761?e=1760572800&v=beta&t=NNkBL3bSTYEqMYcmabNL-T8j_BWWvL80Wn0rpUNjnb8"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://media.licdn.com/dms/image/v2/D4D03AQEAXJ7y9gGSgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1647274868026?e=1760572800&v=beta&t=C9MijovkJmkQP4D_VelHSDDNyGzytlksWubM2q7ULrU"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://media.licdn.com/dms/image/v2/C5603AQErEnhvyKKQ5w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1598924919752?e=1760572800&v=beta&t=EH57ph4TubQCbd9XlRU7xIfhjwfMxlG5laGTZvJ76fg"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://media.licdn.com/dms/image/v2/D4D35AQHDW_nPdKw7Kw/profile-framedphoto-shrink_100_100/B4DZkkTUOYGsAo-/0/1757250667693?e=1758520800&v=beta&t=fOkc-ijAAJUTp-Vshrzo51mp6ZI1YPlx2-1HUlPmsjM"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://media.licdn.com/dms/image/v2/D5603AQHESD_5O9LagQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1665198113005?e=1760572800&v=beta&t=jm1JgvY61j53ekMj10aZQl2zT8EQGJDGv116CnMKGms"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://media.licdn.com/dms/image/v2/D4E35AQHfxYpDG7NUZQ/profile-framedphoto-shrink_100_100/B4EZiusXk6GUAo-/0/1755277523667?e=1758520800&v=beta&t=AIEN71l1h4cIboV3dPFhsT2WOenPqmtofDrK1jj387k"
                alt=""
              />
            </div>
            <p className="text-sm text-blue-500 mt-2 cursor-pointer">91 + others</p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Connect
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

export default LinkedIn;
