import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from "../ThemeProvider";
import { CheckLibraryLogo, commCenter, commLeft, commRight } from "../assets";
import { docs, docsSelected, home, homeSelected, marketplace, marketplaceSelected, projects, projectsSelected, settings, settingsSelected, tasks, tasksSelected } from "../constants/svgs";
import { setSelectedWorkspaceName } from '../helper';

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const themeColors = useContext(ThemeContext);
  const [workspace, setWorkspace] = useState(useSelector(state => state.auth.authData?.workspace));
  const workspaceNames = useSelector(state => state.auth.authData?.workspaceNames);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspace?.name);

  const getSidebarTextColor = () => {
    if (workspace?.selectedTheme === "light") {
      return workspace?.darkColorScheme.text;
    } else if (workspace?.selectedTheme === "dark") {
      return workspace?.lightColorScheme.text;
    } else {
      return workspace?.lightColorScheme.text;
    }
  };



  const menuItems = [
    { name: "Home", path: "/dashboard", soon: false, iconBlack: home, iconWhite: homeSelected },
    { name: "Projects", path: "/projects", soon: false, iconBlack: projects, iconWhite: projectsSelected },
    { name: "Tasks", path: "/tasks", soon: false, iconBlack: tasks, iconWhite: tasksSelected },
    { name: "Docs", path: "/docs", soon: true, iconBlack: docs, iconWhite: docsSelected },
    { name: "Marketplace", path: "/marketplace", soon: false, iconBlack: marketplace, iconWhite: marketplaceSelected },
    { name: "Settings", path: "/settings", soon: false, iconBlack: settings, iconWhite: settingsSelected },
  ];
  const getSidebarIconColor = (item1, item2) => {
    if (workspace?.selectedTheme === "light") {
      return item1;
    } else if (workspace?.selectedTheme === "dark") {
      return item2;
    } else {
      return item1;
    }
  };

  return (
    <div className="h-max fixed left-5 top-5 rounded-[10px] border py-5 w-[265px]" style={{ backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius, boxShadow: "0px 10px 21px 0px rgba(152, 152, 152, 0.12)" }}>
      <div className="flex items-center justify-start space-x-4 ml-3 mb-8">
        <div onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
          <img className="h-8 w-auto sm:h-10 sm:w-auto md:h-12 md:w-auto" src={CheckLibraryLogo} alt="Logo" />
        </div>
        {isDropdownVisible && (
          <div className="absolute top-16 mt-2 w-64 rounded-md shadow-lg bg-[#F7F7F7]">
            <ul>
              {workspaceNames.map((workspaceName, idx) => (
                <li
                  key={idx}
                  className={`p-2 cursor-pointer ${workspaceName.name === selectedWorkspace ? "bg-[#079263] text-white" : "text-[#079263]"}`}
                  onClick={async () => {
                    const response = await setSelectedWorkspaceName(workspaceName.name);
                    if (response.status === 200) {
                      setWorkspace(response.workspace);
                      setSelectedWorkspace(response.workspace.name);
                      const workspace = response.workspace;
                      dispatch({
                          type: "UPDATE_WORKSPACE",
                          payload: workspace
                      });
                      setIsDropdownVisible(false);
                    } else {
                      toast(<ErrorToast message={response.message} />);
                      setIsDropdownVisible(false);
                    }
                    
                  }}
                >
                  {workspaceName.name}
                </li>
              ))}

            </ul>
          </div>
        )}


      </div>
      <div className="mx-auto h-[1px] mb-12 w-[80%]" style={{ backgroundColor: themeColors.background2 }}></div>
      <ul className="flex flex-col mx-3 h-full space-y-3">
        {menuItems.map((item, index) => (
          <li key={index} className={location.pathname === item.path ? "px-[30px] py-[10px] rounded-md" : "px-[30px] py-[10px] rounded-md"} style={{ backgroundColor: location.pathname === item.path ? themeColors.primary : "" }}>
            <Link className='flex flex-row items-center' to={item.path}>
              <div className='mr-[13px]' dangerouslySetInnerHTML={{ __html: location.pathname === item.path ? getSidebarIconColor(item.iconWhite, item.iconBlack) : getSidebarIconColor(item.iconBlack, item.iconWhite) }}>
              </div>
              <span className="font-normal" style={{ color: location.pathname === item.path ? getSidebarTextColor() : themeColors.text }}>
                {item.name}
              </span>
              {item.soon &&
                <div className="ml-2 rounded-full px-2 py-[3px] text-xs bg-[#E15785] text-white">
                  Soon
                </div>
              }
            </Link>
          </li>
        ))}
      </ul>

      <div className="px-4 pt-4 pb-[31px] rounded-[10px] mt-10 mx-[14px] relative" style={{ backgroundColor: themeColors.background2 }}>
        <div className="flex justify-center mb-10 relative">
          <img
            className="w-[37px] h-[37px] rounded-full absolute top-[-32px] left-[47%] transform -translate-x-full -ml-2"
            src={commLeft}
          />
          <img
            className="w-[59px] h-[59px] rounded-full border-[3px] border-white z-20 absolute top-[-42px]"
            src={commCenter}
          />
          <img
            className="w-[37px] h-[37px] rounded-full absolute top-[-32px] right-[47%] transform translate-x-full -mr-2"
            src={commRight}
          />
        </div>
        <h2 className="text-md font-bold mb-2 text-center" style={{ color: themeColors.text }}>
          Join our free community
        </h2>
        <p className="text-center text-zinc-500 font-normal leading-7 text-[14px]" style={{ color: themeColors.text }}>
          Surround yourself with people who are as successful as you are.
        </p>
        <div className='mx-5'>
          <button className="rounded-[8px] px-4 py-2 text-sm font-normal mt-4 w-full text-white" style={{ backgroundColor: themeColors.primary }}>
            Join Now
          </button>
        </div>
      </div>


    </div>
  );
};

export default Sidebar;
