import React from 'react'

function Instagram() {
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
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/514332843_1223603519504385_8469045472923250809_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oLRfk-gWylYQ7kNvwHA-rdm&_nc_oc=AdmXIoKx0Erg3J8Adq6lG5I0lTUgIa1H28SIzfXpaJtqJjpdVLFXnH6njbl53y2rAsA&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=JsRy397BBFZuCRQDdsC5-A&oh=00_Afa67lXblJyJPOgJNvlXuzVFz1KEu2I0yQvRP8VPwSIutA&oe=68CD70A2"
              alt="Cover"
            />
            {/* Profile Photo */}
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
              <img
                className="h-28 w-28 rounded-full ring-4 ring-blue-600 object-cover"
                src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/514418463_1223591386172265_2015498190275534476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jMQ09VjOivYQ7kNvwHSQlS-&_nc_oc=Adl7z5xyAWYUOHf3VP0NfAlrcPxYgOsndl-dfmtq6t4KRNJ4ihBmLJwTz2PMcgVtOP0&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=0VN0hFnOe7C1Ca90N869XA&oh=00_AfYvVssxZlKff3q8VwZ_NguuT7XKOLInVHJ3-ClZsQxhNA&oe=68CD8307"
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
                <p className="text-lg font-semibold text-gray-800">75</p>
                <p className="text-gray-500 text-xs">Followers</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">32</p>
                <p className="text-gray-500 text-xs">Following</p>
              </div>
            </div>

            {/* Mutual Friends */}
            <div className="mt-5 -space-x-3 flex justify-center">
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/495592370_122222755724167875_5810210313859663610_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_ohc=ieofA7Ux19QQ7kNvwGskDHo&_nc_oc=AdkFark6Tk8sMV5jN0_d8JEne5XIDS6zEMgchwy9lYcI5ejppzlyec_21cNtKte2TmU&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=Li49ROh8K5SHKFb5mIb-Bg&oh=00_AfYe7eawQyLrmu92q-MsbQ75iB6p56Tg3CdumPp1uEjjUw&oe=68CD56B9"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/441607100_122101446308320317_5967868455650437820_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=IVfFTWPW7LUQ7kNvwEDmB73&_nc_oc=Admf7VkaiDx381j9vBfpRloy6hXfHl5YHs_IERob21LbmgkffsMqZQdHeiiBcq_3zzE&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=ZYFDIrZDWHQrvzeH-0jheQ&oh=00_AfYSEyjm092EGwq_0kLWbI-CzmADX2BEUmDi_EPANkXGcw&oe=68CD8B67"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/513885301_2192532391265656_809278142811468052_n.jpg?stp=c0.256.1537.1537a_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=axugLSXBCTsQ7kNvwGA774i&_nc_oc=Adl6OrEUZgH9vQh1QZeR7H1kbTat0R6f6MLzCF9WNpjHpHDirmIF-B_qlLTecBCKubM&_nc_zt=24&_nc_ht=scontent.fdac5-2.fna&_nc_gid=re3jgSaSVE5ppipr6lSsvA&oh=00_AfbpXnWnBAQ11FhWgVXZkbwugEgEFZ_39cdOHMSMVEpDOw&oe=68CD779D"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/468575096_122110169030611630_8496047173232682939_n.jpg?stp=c0.0.720.720a_dst-jpg_s100x100_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=5lAzrDJz4oAQ7kNvwFCISMd&_nc_oc=AdlOfAqmuIeW6cskm3oALqYMYJPeaVowtlO8FukKIJdg80BSXAdFDPL5F7PudvMFomU&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=J3JJf_GvGk1nbE8ER7-kaw&oh=00_AfYxXm0CJw2Yq5PLVGCjaQfYewYWENKZ6y4Dh3Uk9ILAuA&oe=68CD761A"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/500776578_122137163600794912_739356223255230901_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=6utud7OiuLQQ7kNvwGOEZw6&_nc_oc=Adm5pUyVITNufz_Gw_m24lsS3QTMalfnN9EdvBf8Mm9AUGXv62L_cCDlNkZ24rY3mRk&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=xMtNezWcqkVeS_o4Kw-Dxw&oh=00_AfZdH1Ej9C0-cTLyFHlNezQ1KboVy8DaAsv0aonoqWDjFw&oe=68CD7ECC"
                alt=""
              />
            </div>
            <p className="text-sm text-blue-500 mt-2 cursor-pointer"> 71 + others</p>

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

export default Instagram
