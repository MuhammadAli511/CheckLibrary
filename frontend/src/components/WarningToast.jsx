import React from 'react';
import { warningToast } from "../constants/svgs";

const WarningToast = ({ message }) => (
    <div className=' flex'>
        <div className='bg-[#FEC125] w-[8px] rounded-l rounded-tl rounded-bl'>
        </div>
        <div className='w-full flex items-center bg-[#4E4E4E] px-2 py-4'>
            <div dangerouslySetInnerHTML={{ __html: warningToast }}></div>
            <span className='ml-[10px] text-[#FEC125] text-[15px] font-semibold'>{message}</span>
        </div>
    </div>
);

export default WarningToast;
