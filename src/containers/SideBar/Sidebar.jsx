import React from "react";

import BoardItem from "./BoardItem.jsx";
import './Sidebar.scss';

const boards = [
    { id: 1, name: 'Website Redesign', color: '--highlight-green' },
    { id: 2, name: 'Mobile App', color: '--highlight-cyan' },
    { id: 3, name: 'Blog Theme', color: '--highlight-pink' },
    { id: 4, name: 'UI Kit', color: '--highlight-purple' },
    { id: 5, name: 'Icon Set', color: '--highlight-blue' },
    { id: 6, name: 'Marketing Site', color: '--highlight-green' },
    { id: 7, name: 'Dashboard UI', color: '--highlight-cyan' },
    { id: 8, name: 'API Integration', color: '--highlight-pink' },
    { id: 9, name: 'Calendar Widget', color: '--highlight-purple' },
    { id: 10, name: 'Chat Application', color: '--highlight-blue' },
    { id: 11, name: 'Project Management', color: '--highlight-yellow' },
    { id: 12, name: 'E-commerce Platform', color: '--highlight-cyan' },
    { id: 13, name: 'Blog Redesign', color: '--highlight-pink' },
    { id: 14, name: 'Dashboard Analytics', color: '--highlight-purple' },
    { id: 15, name: 'Social Media Integration', color: '--highlight-blue' },
    { id: 16, name: 'Task Manager', color: '--highlight-green' },
    { id: 17, name: 'Event Calendar', color: '--highlight-cyan' },
    { id: 18, name: 'Customer Support Portal', color: '--highlight-pink' },
    { id: 19, name: 'Knowledge Base', color: '--highlight-purple' },
    { id: 20, name: 'Collaboration Tool', color: '--highlight-blue' },
  ];

const Sidebar = () => {
    return (
        <div className="app__sidebar">
            <ul className="app__sidebar-boards">
                {
                    boards.map(item => (
                            <BoardItem item={item} key={item.id}/>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default Sidebar;