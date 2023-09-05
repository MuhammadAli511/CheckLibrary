import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import SettingTabs from "../../components/SettingTabs";
import Sidebar from "../../components/Sidebar";

import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import Billing from "./Billing";
import Branding from "./Branding";
import CustomFields from "./CustomFields";
import DateAndTime from "./DateAndTime";
import MyAccount from "./MyAccount";
import NavSideBar from "./NavSideBar";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Security from "./Security";
import TeamMembers from "./TeamMembers";
// import TrackingPixel from "./TrackingPixel";

const tabComponents = {
    'My Account': MyAccount,
    'Profile': Profile,
    'Security': Security,
    'Billing': Billing,
    'Team Members': TeamMembers,
    'Date & Time': DateAndTime,
    'Notifications': Notifications,
    'Custom Fields': CustomFields,
    'Branding': Branding,
    'Nav Sidebar': NavSideBar,
    // 'Tracking Pixel': TrackingPixel
};

const Settings = () => {
    const settingTab = useSelector((state) => state.settingTab);
    const RenderedComponent = tabComponents[settingTab];
    const themeColors = useContext(ThemeContext);

    return (
        <div className="flex flex-col"  style={{backgroundColor: themeColors.background}}>
            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className="mt-5 mx-10">
                        <SettingTabs />
                        {RenderedComponent && <RenderedComponent />}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Settings;
