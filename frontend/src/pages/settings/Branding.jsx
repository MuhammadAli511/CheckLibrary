import AccountLogo from "../../components/AccountLogo";
import ColorCodes from "../../components/ColorCodes";
import CustomDomain from "../../components/CustomDomain";
import Favicon from "../../components/Favicon";
import Typography from "../../components/Typography";

function Branding() {
    return (
        <div className="bg-background-light">
            <div className="grid grid-cols-2 flex-1 space-x-5">
                <CustomDomain />
                <Favicon />
            </div>
            <div className="grid grid-cols-2 flex-1 space-x-5">
                <ColorCodes />
                <div>
                    <AccountLogo />
                    <Typography />
                </div>
            </div>
        </div>
    );
}

export default Branding;
