import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=' w-full h-[70px] flex justify-center items-center'>
        <div className=' w-[95%] h-[89%] bg-red-500 flex justify-between items-center'>
            <div>Logo</div>
            <div>Nav</div>
            <div className=' w-[100px] h-full flex justify-center items-center'>
                <Link to='/register'>
                <button className=' h-[40px] px-4 rounded-lg bg-green-700 border'>Register</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header;