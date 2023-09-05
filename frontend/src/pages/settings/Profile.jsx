import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeProvider";
import ProfileComponent from "../../components/ProfileComponent";

function Profile() {
    const themeColors = useContext(ThemeContext);
    return (
        <div className="flex flex-col h-screen" style={{ color: themeColors.text, backgroundColor: themeColors.background }}>
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <ProfileComponent />
                </div>
            </div>
        </div>
    );
}

export default Profile;