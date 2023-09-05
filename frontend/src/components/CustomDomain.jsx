import React, { useState } from "react";


function CustomDomain() {
    const [customDomain, setCustomDomain] = useState("https://www.app.checklibrary.com");

    return (
        <div className="mt-4">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-[30px] rounded-lg">
                <div className="mb-6">
                    <span className="font-medium text-xl">Custom Domain</span>
                    <p className="mt-4 mb-6">
                        Set up custom domain to point the default domain for your Flowlu account to a custom domain. Learn more.
                        IP address 138.197.51.210
                    </p>
                    <input type="text" id="customDomain" name="customDomain" value={customDomain}
                        onChange={e => setCustomDomain(e.target.value)} className="border border-[#DCDCDC] p-3 mb-4 rounded-lg w-full" />
                        
                </div>
            </div>
        </div>
    );
}

export default CustomDomain;
