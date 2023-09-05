import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import Appearance from "../../components/Appearance";
import PersonalInfo from "../../components/PersonalInfo";

function MyAccount() {
    const themeColors = useContext(ThemeContext);
    return (
        <div className="flex flex-col h-screen" style={{backgroundColor: themeColors.background}}>
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <PersonalInfo />
                    <Appearance />
                </div>
            </div>
        </div>
    );
}

export default MyAccount;