
function TrackingPixel() {
    return (
        <>
            <div className="flex justify-center items-center mt-4">
                <div className="w-[748px] border rounded-[10px] bg-background-light pt-6 pl-6 pr-6 pb-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-medium text-xl">Tracking Pixels</span>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="metaPixelID" className="block text-sm font-medium text-gray-700 mb-3">Meta Pixel ID</label>
                        <input type="text" id="metaPixelID" name="metaPixelID" className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="tikTokPixelID" className="block text-sm font-medium text-gray-700 mb-3">TikTok Pixel ID</label>
                        <input type="text" id="tikTokPixelID" name="tikTokPixelID" className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="googleAdsPixelID" className="block text-sm font-medium text-gray-700 mb-3">Google Ads (YouTube) Pixel ID</label>
                        <input type="text" id="googleAdsPixelID" name="googleAdsPixelID" className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="googleAnalyticsPixelID" className="block text-sm font-medium text-gray-700 mb-3">Google Analytics Pixel ID</label>
                        <input type="text" id="googleAnalyticsPixelID" name="googleAnalyticsPixelID" className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="microsoftClarityPixelID" className="block text-sm font-medium text-gray-700 mb-3">Microsoft Clarity Pixel ID</label>
                        <input type="text" id="microsoftClarityPixelID" name="microsoftClarityPixelID" className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="inboxEmailMarketingPixelID" className="block text-sm font-medium text-gray-700 mb-3">Inbox email marketing Pixel ID</label>
                        <input type="text" id="inboxEmailMarketingPixelID" name="inboxEmailMarketingPixelID" className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="linkDripPixelID" className="block text-sm font-medium text-gray-700 mb-3">LinkDrip Pixel ID</label>
                        <input type="text" id="linkDripPixelID" name="linkDripPixelID" className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="cookieBannerPixelID" className="block text-sm font-medium text-gray-700 mb-3">Cookie Banner Pixel ID</label>
                        <input type="text" id="cookieBannerPixelID" name="cookieBannerPixelID" className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center mt-4">
                <div className="w-[748px] border rounded-[10px] bg-background-light pt-6 pl-6 pr-6 pb-6">
                    <span className="font-medium text-xl">Add Code To Theme</span>

                    <div className="mt-6">
                        <label htmlFor="headCode" className="block text-sm font-medium text-gray-700 mb-3">HTML code for &lt;head&gt;</label>
                        <textarea id="headCode" name="headCode" className="border border-[#DCDCDC] p-3 rounded-lg w-full h-[200px]"></textarea>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="bodyCode" className="block text-sm font-medium text-gray-700 mb-3">HTML code for &lt;body&gt;</label>
                        <textarea id="bodyCode" name="bodyCode" className="border border-[#DCDCDC] p-3 rounded-lg w-full h-[200px]"></textarea>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="footerCode" className="block text-sm font-medium text-gray-700 mb-3">HTML code for &lt;footer&gt;</label>
                        <textarea id="footerCode" name="footerCode" className="border border-[#DCDCDC] p-3 rounded-lg w-full h-[200px]"></textarea>
                    </div>

                </div>
            </div>


        </>


    );
}

export default TrackingPixel;