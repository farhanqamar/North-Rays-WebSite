import React from 'react';



const CourseDetils = () => {
  return (
    <>
    <section className='bg-neutral-100'>
    <div className="p-6 mx-auto lg:w-[1440px]">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        alt="IBM logo"
        className="w-24 mb-4"
      />
      <h1 className="text-2xl font-bold mb-4">
        IBM Back-End Development Professional Certificate
      </h1>
      <p className="text-gray-700 mb-4">
        Prepare for a career as a back-end developer. Gain the in-demand skills
        and hands-on experience to get job-ready in less than 6 months.
      </p>
      <div className="flex items-center mb-4">
        <img
          src="https://i.imgur.com/kPznr0I.jpg" // Use a placeholder for instructor images
          alt="Instructor"
          className="w-12 h-12 rounded-full"
        />
        <p className="ml-2 text-sm text-gray-700">
          Instructors: <span className="font-bold">John Rofrano</span> +12 more{' '}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded">
            Top Instructor
          </span>
        </p>
      </div>
      <div className='flex gap-4 items-center'>
      <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 mb-4">
        Enroll for Free
      </button>
      <p className="text-xs text-gray-600">Financial aid available</p>
      </div>
      <p className="text-xs text-gray-600 mb-1">
        Starts <span className="font-semibold">Oct 21</span>
      </p>
      <p className="text-sm text-blue-600 mb-4 cursor-pointer">
        Try for Free: Enroll to start your 7-day full access free trial
      </p>
      <p className="text-sm text-gray-700 mt-4">
        <span className="font-bold">19,805</span> already enrolled
      </p>
      <div className="mt-4">
        <img
          src="https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/coursera-favicon-v2.png"
          alt="Coursera Plus"
          className="w-6 h-6 inline mr-2"
        />
        <span className="text-sm text-blue-600">Included with Coursera Plus</span>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mt-4 flex justify-between items-center max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-lg">15 course series</h2>
        <p className="text-gray-600 text-sm">Earn a career credential that demonstrates your expertise</p>
      </div>

      <div className="text-center border-l-2 pl-4">
        <h2 className="font-bold text-lg flex items-center">
          4.6
          <svg
            className="w-4 h-4 text-blue-500 ml-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.28 3.922a1 1 0 00.95.691h4.09c.969 0 1.371 1.24.588 1.81l-3.312 2.406a1 1 0 00-.364 1.118l1.282 3.924c.3.922-.755 1.688-1.54 1.118l-3.314-2.408a1 1 0 00-1.175 0l-3.313 2.407c-.784.57-1.838-.196-1.539-1.118l1.281-3.924a1 1 0 00-.363-1.118L2.14 9.35c-.783-.57-.38-1.81.588-1.81h4.09a1 1 0 00.95-.691l1.28-3.922z" />
          </svg>
        </h2>
        <p className="text-gray-600 text-sm">(7,080 reviews)</p>
      </div>

      <div className="text-center border-l-2 pl-4">
        <h2 className="font-bold text-lg">Beginner level</h2>
        <p className="text-gray-600 text-sm">No prior experience required</p>
      </div>

      <div className="text-center border-l-2 pl-4">
        <h2 className="font-bold text-lg">Flexible schedule</h2>
        <p className="text-gray-600 text-sm">5 months, 10 hours a week</p>
        <p className="text-blue-500 text-sm cursor-pointer">Learn at your own pace</p>
      </div>

      <div className="text-center border-l-2 pl-4">
        <h2 className="font-bold text-lg">Build toward a degree</h2>
        <p className="text-blue-500 text-sm cursor-pointer">Learn more</p>
      </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default CourseDetils