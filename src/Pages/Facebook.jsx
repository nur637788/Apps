import React from 'react'

function Facebook() {
  return (
    <div className='mt-20 mb-10 '>
    <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Cover photo is clickable */}
      <a
        href="https://www.facebook.com/nur637788"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative">
          <img
            className="h-36 w-full object-cover"
            src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/536028003_1262182135646523_1440398984691605114_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=d0zNdgAPVnMQ7kNvwFCnDmV&_nc_oc=AdkdmIrIAHrnepShQrkANaiiNQ6DicY4zEYlJ98OYw-se0fgRVwBqzHrLLZTFpm9nE0&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=ZHGVU8BT2vXgeIkDQ9I0Zw&oh=00_AfbUw0k1pUEqeTdY7V0Ik1F31HQ7zZY4HqVqhA8X6E2F0w&oe=68CCC9F6"
            alt="Cover photo of Md. Abdun Nur"
          />
          <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
            <img
              className="h-28 w-28 rounded-full ring-4 ring-blue-600 object-cover"
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/540930645_1271773248020745_3955730965070077154_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=8HgH48YJG-kQ7kNvwG_MA6t&_nc_oc=AdnqQ1GPa6Usa4RgQKu09nNYVFqsj0MlAv0LgOTB16KM5bLMzZiCK_0hSU_9CV3QaDc&_nc_zt=24&_nc_ht=scontent.fdac5-2.fna&_nc_gid=ZHGVU8BT2vXgeIkDQ9I0Zw&oh=00_AfbJ0esDEtxgy4hg31tT_gAIxgEeNV1Vd0Spz4CD6ypVRQ&oe=68CCA08F"
              alt="Profile photo of Md. Abdun Nur"
            />
          </div>
        </div>
      </a>

      {/* Info & buttons */}
      <div className="pt-16 pb-6 text-center">
        <h1 className="text-xl font-bold text-gray-800">Md. Åbdüñ Ñur (নয়ন)</h1>
        <p className="text-gray-500 text-sm px-10 whitespace-pre-line">
          Alhamdulillah For Everything
          {"\n"}I'M Proud OF MY Religion ISLAM.
          {"\n"}I'm a Web Design & Developer.
          {"\n"}#nur637788
        </p>

        {/* Followers */}
        <div className="flex justify-center gap-6 mt-4">
          <div>
            <p className="text-lg font-semibold text-gray-800">4.4K</p>
            <p className="text-gray-500 text-xs">Followers</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">0</p>
            <p className="text-gray-500 text-xs">Following</p>
          </div>
        </div>

        {/* Mutual friends */}
        <div className="mt-5 -space-x-3 flex justify-center">
          <img
            className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/489955611_1836486040515488_2736355642027297738_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=OhrRCCZfKk4Q7kNvwHVnBOE&_nc_oc=AdmsnGI2Gq4eRLXKmurrjeTO7xt0-WoycT5dZQkMCc6c5olql4nORb09k7xHQL-jZB4&_nc_zt=24&_nc_ht=scontent.fdac5-2.fna&_nc_gid=a8plq-UcJrWwCTTBD64Dkg&oh=00_AfaWg1Oh5eW825yFKO0F3EyHDeigE55cHSxzz8SUuxpdNQ&oe=68CD60C7"
            alt="mutual friend 1"
          />
          <img
            className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/514509797_122116650224897823_321627234458454577_n.jpg?stp=c0.0.120.120a_dst-jpg_s120x120_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_ohc=kZzJhsmC_ucQ7kNvwEy_ooi&_nc_oc=AdmIqPA90pM5OQhaVKJ7ZzUKplrRSb3NkC_c3LomuMH_Ox2kOOWwzKmIpnqIKTnjwqs&_nc_zt=24&_nc_ht=scontent.fdac5-2.fna&_nc_gid=7o8E_Sbn3CdEyCOJTvxI9g&oh=00_AfakswO73iZd2cc0VnHIYPhUtUourCnbfZSV7l-vcXCLCg&oe=68CD5F29"
            alt="mutual friend 2"
          />
          <img
            className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/547830965_779768248100207_487014801560524584_n.jpg?stp=c0.0.415.415a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=V47HmSnDxWwQ7kNvwFHmDqT&_nc_oc=AdlrHMCsayANEaD-3IcFNr6mnPFyG3OihuyDe7OPQGEY9sCsd5tU7_ryeKOEfbFQS2w&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=LHLMUoWGAgJdi_gnvaPJrQ&oh=00_AfYFSLMYUkwuUMP4sZaCiuoFyPoIfcrI4kpF0cBC0Uy0cg&oe=68CD75DD"
            alt="mutual friend 3"
          />
          <img
            className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/509356243_122120271860871571_7353424747508950227_n.jpg?stp=dst-jpg_p100x100_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=5bwJCX6-wZ0Q7kNvwH3MZwe&_nc_oc=AdlaSQTZB8SEhJ9hhrlNBCzy3nPnsPv2LUN9salzmjPDgE0pqaxJIRjZN4gMbSDS5ck&_nc_zt=24&_nc_ht=scontent.fdac5-2.fna&_nc_gid=UMQ9BdIKzmPj2t0Y5fzHhg&oh=00_AfYLhD9Cb30QJnHfVVhBE1UWLlt7z0sH1nQT9gBwUEoLvQ&oe=68CD5D29"
            alt="mutual friend 4"
          />
          <img
            className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/545034839_122138911916807281_5895730283385387523_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=qiJaSAJSsn4Q7kNvwHh9SeP&_nc_oc=AdkN_C4kGyDuW49Kqk5bUmOyssW0bGKMTSfVGDXpHtJLocaqCvwaj5gRnTI0KieiEsg&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=d9XmcuSOIm3UOos0tndLOQ&oh=00_Afazvf9Q0bUg5ckM1KFcrTYcz-aUkY8hQIcrxRUtxzj6wQ&oe=68CD77F2"
            alt="mutual friend 4"
          />
          <img
            className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/502332964_122145066248589208_3572900798471134925_n.jpg?stp=c0.0.827.827a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=S6EpzUvmLJUQ7kNvwFTObly&_nc_oc=AdlxfqkETFNGK01otKBkvp9VGySaILWqx6TN1O-fBV2fwpdY4mU00NKVME4HQa3wQjM&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=F18VjbADbeHwLWy52r5UbA&oh=00_AfZUuC0ln9Pg4diwYnB44UN9W1cQ70L24541qyfK-4lJ3g&oe=68CD752D"
            alt="mutual friend 4"
          />
          <img
            className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/490971839_122099141234843359_3916948703479402758_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=qOs48_vgtqMQ7kNvwGeggGq&_nc_oc=AdkXeakJOwgh5vXqTWA5brtfE7i0rD7WPpzJRUTTif5f9oau3TMMbKdoTixuz9FAIhU&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=D3rcaJ7-5_QkHCL6cwzAlg&oh=00_AfavnvDQqlkmA8bSMHcxb9elU2X6d_KA6Q-seK5XHxgKIQ&oe=68CD6734"
            alt="mutual friend 4"
          />
        </div>
        <p className="text-sm text-blue-500 mt-2 cursor-pointer">999 + others</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            type="button"
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => {
              // তোমার Follow লজিক বা API এখানে যোগ করো
              console.log("Follow clicked");
            }}
          >
            Follow
          </button>

          <button
            type="button"
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            onClick={() => {
              // Message লজিক / modal এখানে যোগ করো
              console.log("Message clicked");
            }}
          >
            Message
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Facebook;
