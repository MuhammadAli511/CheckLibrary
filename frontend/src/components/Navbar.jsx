import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from "../ThemeProvider";
import { bell, document, documentWhite, gift, giftWhite, help, helpWhite, menuLines, plus, profile, search, settings, whiteMenuLines } from "../constants/svgs";

const Navbar = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const themeColors = useContext(ThemeContext);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setDropdownVisible(!isDropdownVisible);
      }
    };
    if (isDropdownVisible) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [isDropdownVisible]);


  const workspace = useSelector(state => state.auth.authData?.workspace);
  const location = useLocation();
  let displayText;

  const getMenuLines = () => {
    if (workspace?.selectedTheme === "light") {
      return menuLines;
    } else if (workspace?.selectedTheme === "dark") {
      return whiteMenuLines;
    } else {
      return menuLines;
    }
  }

  const getGift = () => {
    if (workspace?.selectedTheme === "light") {
      return gift;
    } else if (workspace?.selectedTheme === "dark") {
      return giftWhite;
    } else {
      return gift;
    }
  }

  const getHelp = () => {
    if (workspace?.selectedTheme === "light") {
      return help;
    } else if (workspace?.selectedTheme === "dark") {
      return helpWhite;
    } else {
      return help;
    }
  }

  const getDocument = () => {
    if (workspace?.selectedTheme === "light") {
      return document;
    } else if (workspace?.selectedTheme === "dark") {
      return documentWhite;
    } else {
      return document;
    }
  }

  switch (location.pathname) {
    case '/dashboard':
      displayText = "Dashboard";
      break;
    case '/settings':
      displayText = "Settings";
      break;
    case '/onboarding':
      displayText = "Onboarding";
      break;
    case '/import':
      displayText = "Import";
      break;
    default:
      displayText = "CheckLibrary";
  }
  return (
    <nav className="flex items-center justify-between p-2 mx-1 rounded-[10px] border border-zinc-300" style={{ backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius, boxShadow: "0px 10px 21px 0px rgba(152, 152, 152, 0.12)" }}>
      <div className="flex flex-row items-center">
        <div className='m-4' dangerouslySetInnerHTML={{ __html: getMenuLines() }}></div>
        <span className="text-[20px] font-medium" style={{ color: themeColors.text }}>
          {displayText}
        </span>
      </div>
      <div className="flex items-center w-[70%] justify-end space-x-3">
        <div className="relative w-[30%]">
          <div className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2" dangerouslySetInnerHTML={{ __html: search }}></div>
          <input className="w-full rounded-[10px] border border-zinc-300 py-2 pl-10 pr-14 outline-none" type="search" placeholder="Search..." style={{ backgroundColor: themeColors.background2, borderColor: themeColors.cornerRadius }} />
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-[51px] h-[30px] px-[11px] py-[3px] rounded border justify-center items-center gap-2.5 inline-flex" style={{ backgroundColor: themeColors.background2, borderColor: themeColors.cornerRadius }}>
            <div className="text-neutral-400 text-base font-normal">
              Ctrl
            </div>
          </div>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-[30px] px-[11px] py-[3px] rounded border justify-center items-center gap-2.5 inline-flex" style={{ backgroundColor: themeColors.background2, borderColor: themeColors.cornerRadius }}>
            <div className="text-neutral-400 text-base font-normal">
              K
            </div>
          </div>

        </div>
        <div className="w-[108px] h-10 px-[9px] py-[10.50px] rounded-[5px] border justify-start items-center gap-1 inline-flex" style={{ backgroundColor: themeColors.background2, borderColor: themeColors.primary }}>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative" dangerouslySetInnerHTML={{ __html: plus }}>
            </div>
          </div>
          <div className="text-lg font-normal" style={{ color: themeColors.primary }}>
            Create
          </div>
        </div>
        <div className="w-10 h-10 rounded-[5px]  items-center justify-center flex" dangerouslySetInnerHTML={{ __html: getGift() }} style={{ backgroundColor: themeColors.background2, borderColor: themeColors.cornerRadius }}>

        </div>
        <div className="w-10 h-10 rounded-[5px]  items-center justify-center flex" dangerouslySetInnerHTML={{ __html: getDocument() }} style={{ backgroundColor: themeColors.background2, borderColor: themeColors.cornerRadius }}>

        </div>
        <div className="w-10 h-10 rounded-[5px] items-center justify-center flex" dangerouslySetInnerHTML={{ __html: getHelp() }} style={{ backgroundColor: themeColors.background2, borderColor: themeColors.cornerRadius }}>

        </div>
        <div className="w-10 h-10 rounded-[5px]  items-center justify-center flex" dangerouslySetInnerHTML={{ __html: getHelp() }} style={{ backgroundColor: themeColors.background2, borderColor: themeColors.cornerRadius }}>

        </div>
        <div className='flex justify-center items-center pl-4' onClick={toggleDropdown} ref={dropdownRef}>
          <div className="text-md font-normal mr-4" style={{ color: themeColors.text }}>
            {workspace?.firstName} {workspace?.lastName}
          </div>
          <div className="w-10 h-10 flex items-center" dangerouslySetInnerHTML={{ __html: profile }}></div>

          {isDropdownVisible && (
            <div className="absolute right-5 top-20 w-60 rounded-[10px] shadow border z-20" style={{ backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className='pl-4' dangerouslySetInnerHTML={{ __html: settings }}></div>
                  <div className="pl-3 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Settings
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className='pl-4' dangerouslySetInnerHTML={{ __html: settings }}></div>
                  <div className="pl-3 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Notification Settings
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className='pl-4' dangerouslySetInnerHTML={{ __html: settings }}></div>
                  <div className="pl-3 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Billing
                  </div>
                </div>
                <div className="border-t-[0.5px] my-2" style={{ borderColor: themeColors.cornerRadius }}>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    What's New
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Public Roadmap
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Help Center
                  </div>
                </div>
                <div className="border-t-[0.5px] my-2" style={{ borderColor: themeColors.cornerRadius }}>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/onboarding') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Onboarding Video
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Book A Consultation
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Join our Free Community
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Earn 30% Commission
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Rate your Experience
                  </div>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/settings') }}>
                  <div className="pl-4 pr-4 py-2 text-base " role="menuitem" style={{ color: themeColors.text }}>
                    Hire Us
                  </div>
                </div>
                <div className="border-t-[0.5px] my-2" style={{ borderColor: themeColors.cornerRadius }}>
                </div>
                <div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/') }}>
                  <div className="pl-4 pr-4 py-2 text-[#EC5453] text-base " role="menuitem">Log Out</div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
