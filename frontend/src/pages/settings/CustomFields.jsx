import CustomFieldsComponent from "../../components/CustomFieldsComponent";

function CustomFields() {
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <CustomFieldsComponent />
                </div>
            </div>
        </div>
    );
}

export default CustomFields;