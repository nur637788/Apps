import React from 'react'

function GitHub() {
  return (
    <div className='mt-20 mb-10'>
    <div className="text-center">
      {/* Profile Card */}
      <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <a href="https://github.com/nur637788" target="_blank" rel="noopener noreferrer">
          {/* Cover Photo */}
          <div className="relative">
            <img
              className="h-36 w-full object-cover"
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/509422691_1214077997123604_9111235875977450195_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XeguBD-AU64Q7kNvwG-3DPl&_nc_oc=AdmCb2xejhawKp6LVP1_Nw8-nUgrzE6qSdgh4IRFRQHjlUasoJeOaaJc89gv4tBOkow&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=OLR5pAHaFHOT6JIQ2itoMQ&oh=00_AfaWZMOSS6yDWHQfUmt4fbkm1-XME2sEBpkFrL8EPu5Fzg&oe=68CD7FD0"
              alt="Cover"
            />
            {/* Profile Photo */}
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
              <img
                className="h-28 w-28 rounded-full ring-4 ring-blue-600 object-cover"
                src="https://avatars.githubusercontent.com/u/143613309?v=4"
                alt="Profile"
              />
            </div>
          </div>

          {/* Info */}
          <div className="pt-16 pb-6 text-center">
            <h1 className="text-xl font-bold text-gray-800">Md. Abdun Nur</h1>
            <p className="text-gray-500 text-sm px-10">
             I am a student of Computer Science and Technology (CST). I'm a Frontend developer & designer.
            </p>

            {/* Followers */}
            <div className="flex justify-center gap-6 mt-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">16</p>
                <p className="text-gray-500 text-xs">Repositories</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">5</p>
                <p className="text-gray-500 text-xs">Stars</p>
              </div>
            </div>

          
            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Follow
              </button>
              <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Stars
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
    </div>
  )
}

export default GitHub
