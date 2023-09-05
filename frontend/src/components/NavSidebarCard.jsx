import React from 'react';
import home from "../assets/home.svg";
// import projects from "../assets/projects.svg";
// import tasks from "../assets/tasks.svg";
// import marketplace from "../assets/marketplace.svg";
// import settings from "../assets/settings.svg";
// import docs from "../assets/docs.svg";
import ToggleButton from './ToggleButton';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const CARD_DATA = [
    {
        position: 0,
        title: "Home",
        icon: home,
        description: "The main communication channel for your community: threads, chats and direct messages."
    },
    {
        position: 1,
        title: "Projects",
        icon: home,
        description: "Manage and view all your current projects."
    },
    {
        position: 2,
        title: "Tasks",
        icon: home,
        description: "All the tasks assigned to you or your team."
    },
    {
        position: 3,
        title: "Marketplace",
        icon: home,
        description: "Buy or sell services and goods."
    },
    {
        position: 4,
        title: "Settings",
        icon: home,
        description: "Configure your account and app preferences."
    },
    {
        position: 5,
        title: "Docs",
        icon: home,
        description: "Documentation and guides for the platform."
    },
    {
        position: 6,
        title: "CustomLink",
        icon: home, // You can add an icon for CustomLink if you have one
        description: null,
        type: "customLink"
    }
];

function CustomLinkCard() {
    return (
        <div className="border p-4 rounded-lg bg-white mb-4">
            <div className="flex items-center">
                <img src={home} alt={"custom card link"} className="w-6 h-6" />

                <span className="ml-2 text-primary-light">Custom Link</span>
            </div>

            <div className="mb-8 my-8">
                <label htmlFor="nameField" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" id="nameField" name="nameField" className="border border-gray-300 p-3 rounded-lg w-full" placeholder="Enter name" />
            </div>

            <div className="mb-4 my-8">
                <label htmlFor="linkField" className="block text-sm font-medium text-gray-700 mb-2">Link</label>
                <input type="text" id="linkField" name="linkField" className="border border-gray-300 p-3 rounded-lg w-full" placeholder="Enter link" />
            </div>

            <div className="relative my-12">
                <hr className="border-t border-gray-300" />
                <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-600">or Embed Code</span>
            </div>

            <div className="mb-4">
                <label htmlFor="htmlCode" className="block text-sm font-medium text-gray-700 mb-2">HTML code</label>
                <textarea id="htmlCode" name="htmlCode" rows="5" className="border border-gray-300 p-3 rounded-lg w-full" placeholder="Paste your embed code here"></textarea>
            </div>
        </div>
    );
}



function NavSideBarCard() {
    const [cards, setCards] = React.useState(CARD_DATA);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(cards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setCards(items);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="cards">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {cards.map((card, index) => (
                            <Draggable key={card.position} draggableId={String(card.position)} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <CardItem card={card} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}


const CardItem = ({ card }) => {
    if (card.type === "customLink") {
        return <CustomLinkCard />;
    }

    const [selected, setSelected] = React.useState(false);

    return (
        <div className="border p-4 rounded-lg bg-white mb-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <img src={card.icon} alt={card.title.toLowerCase()} className="w-6 h-6" />
                    <span className="ml-2 text-primary-light">{card.title}</span>
                </div>
                <ToggleButton selected={selected} setSelected={setSelected} />
            </div>
            <p className="text-[#9B9B9B] mb-4">{card.description}</p>
            <div className="mt-4">
                <label htmlFor={`${card.title}Field`} className="block text-sm font-medium text-gray-700 mb-2">Custom Name</label>
                <input type="text" id={`${card.title}Field`} name={`${card.title}Field`} className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
            </div>
        </div>
    );
}



export default NavSideBarCard;
