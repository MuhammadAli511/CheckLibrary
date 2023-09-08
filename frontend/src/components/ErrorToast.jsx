import React from 'react';
import { errorToast } from "../constants/svgs";

const ErrorToast = ({ message }) => (
    <div className=' flex'>
        <div className='bg-[#F55] w-[8px] rounded-l rounded-tl rounded-bl'>
        </div>
        <div className='w-full flex items-center bg-[#4E4E4E] px-2 py-4'>
            <div dangerouslySetInnerHTML={{ __html: errorToast }}></div>
            <span className='ml-[10px] text-[#F55] text-[15px] font-semibold'>{message}</span>
        </div>
    </div>
);

export default ErrorToast;
