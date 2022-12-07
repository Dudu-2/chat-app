import React from 'react';
import * as C from './styles';
import SidebarHeader from './../SidebarHeader/index';
import SidebarChats from './../SidebarChats/index';

const sidebar = ({ setUserChat, userChat }) => {
  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  );
};

export default sidebar;
