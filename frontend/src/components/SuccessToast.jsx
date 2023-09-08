import React from 'react';
import { successToast } from "../constants/svgs";

const SuccessToast = ({ message }) => (
    <div className=' flex'>
        <div className='bg-[#C1F464] w-[8px] rounded-l rounded-tl rounded-bl'>
        </div>
        <div className='w-full flex items-center bg-[#4E4E4E] px-2 py-4'>
            <div dangerouslySetInnerHTML={{ __html: successToast }}></div>
            <span className='ml-[10px] text-[#C1F464] text-[15px] font-semibold'>{message}</span>
        </div>
    </div>
);

export default SuccessToast;
