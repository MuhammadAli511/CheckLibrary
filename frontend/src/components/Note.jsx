import React, { useState } from "react";


function Note() {
    const [price, setPrice] = useState("");
    const [comparePrice, setComparePrice] = useState("");

    return (
        <div className="mt-4">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-[30px] rounded-lg">
                {/* Title and Text*/}
            </div>
        </div>
    );
}

export default Note;
