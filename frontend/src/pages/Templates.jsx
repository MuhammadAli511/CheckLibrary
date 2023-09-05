import TemplatesComponent from "../components/TemplatesComponent";

function Templates() {
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <TemplatesComponent />
                </div>
            </div>
        </div>
    );
}

export default Templates;