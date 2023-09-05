import TeamMembersComponent from "../../components/TeamMembersComponent";

function TeamMembers() {
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <TeamMembersComponent />
                </div>
            </div>
        </div>
    );
}

export default TeamMembers;