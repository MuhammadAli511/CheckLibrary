
const ActivityOverview = () => {
    return (
        <div className="shadow-lg rounded-xl bg-white p-4">
            <h2 className="text-lg font-bold text-gray-900 leading-6 mb-2">Activity Overview</h2>
            <div className="flex items-center text-green-600 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7256 4.25L11.7256 19.25" stroke="#079263" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.70124 10.2998L11.7252 4.2498L17.7502 10.2998" stroke="#079263" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>16% this month</span>
            </div>
            <ol className="relative border-l-2 border-gray-200 min-h-[15vh]">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#079263" strokeWidth="2" viewBox="0 0 24 24" className="w-3 h-3">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900" style={{color: '#079263'}}>Nick Mark Mentioned Sara Smith In New Post <span className="bg-#079263 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span></h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">Released on January 13th, 2022</time>
                </li>
            </ol>
            <ol className="relative border-l-2 border-gray-200 min-h-[15vh]">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#079263" strokeWidth="2" viewBox="0 0 24 24" className="w-3 h-3">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-green-900" style={{color: '#079263'}}>Patrick Sulivan Published a New Post</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">Released on January 13th, 2022</time>
                </li>
            </ol>
            <ol className="relative border-l-2 border-gray-200 min-h-[15vh]">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#079263" strokeWidth="2" viewBox="0 0 24 24" className="w-3 h-3">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900" style={{color: '#079263'}}>240+ users have subscribed to Newsletter #1 <span className="bg-#079263 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span></h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500" >Released on January 13th, 2022</time>
                </li>
            </ol>
        </div>
    )
}

export default ActivityOverview;
