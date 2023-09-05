import mastercard_logo from '../assets/mastercard.svg';
import visa_logo from '../assets/visa.svg';

function CardDetails() {
    return (
        <div className="mt-4 w-108 h-66 flex-shrink-0">
            <div className="border bg-background-light p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-2xl text-text-light">Card Details</span>
                    <button 
                        className="flex-shrink-0 rounded-md text-[#079263] border border-[#079263] text-lg w-36 h-12"
                        onClick={() => {}}
                    >
                        Add New Card
                    </button>
                </div>

                <CardInfo />
            </div>
        </div>
    );
}

function CardInfo() {
    const cardInfo = {
        cardType: 'mastercard',
        cardText: "Mastercard **** **** **** 3229",
        subText: "Upto 50 users & 100 GB team data"
    };

    const logoMap = {
        mastercard: {
            src: mastercard_logo,
            width: "33px",
            height: "25.652px"
        },
        visa: {
            src: visa_logo,
            width: "60.304px",
            height: "50.652px"
        }
    };

    const cardLogo = logoMap[cardInfo.cardType];

    return (
        <div className="border bg-background-light p-4 w-89.75 h-25 flex-shrink-0 rounded-lg mb-5">
            <div className="flex items-center">
                <img 
                    src={cardLogo.src} 
                    alt={`${cardInfo.cardType} Logo`} 
                    style={{ width: cardLogo.width, height: cardLogo.height }}
                    className="flex-shrink-0 mr-4"
                />
                <div>
                    <span className="font-medium text-lg text-text-light">{cardInfo.cardText}</span>
                    <div className="text-gray-500 text-base mt-1">
                        <span>{cardInfo.subText}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;
