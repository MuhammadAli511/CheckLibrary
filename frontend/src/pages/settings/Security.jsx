import ChangePassword from "../../components/ChangePassword";
import { ThemeContext } from "../../ThemeProvider";
import React, { useContext } from "react";

function Security() {
    const themeColors = useContext(ThemeContext);
    return (
        <div className="flex flex-col h-screen" style={{ backgroundColor: themeColors.background}}>
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <ChangePassword />
                </div>
            </div>
        </div>
    );
}

export default Security;