import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../services/firebase';
import * as C from '.styles';
import { useCollection } from 'react-firebase-hooks/firestore';
import SidebarChatsItem from '..sidebarChatsItem';

const SidebarChats = ([setUserChat, userChat]) => {
  const [user] = useAuthState(auth);

  const refChat = db
    .collection('Chats')
    .where('users', 'array-contains', user.email);

  const [chatsSnapshot] = useCollection(refChat);

  return (
    <C.Container>
      {chatsSnapshot?.docs.map((item, index) => {
        <C.Content key={index}>
          <SidebarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUSerChat={setUserChat}
            active={userChat?.chatId === item.id ? 'active' : ''}
          />
          <C.Divider />
        </C.Content>;
      })}
    </C.Container>
  );
};

export default SidebarChats;
