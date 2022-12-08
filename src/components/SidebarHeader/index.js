import React from 'react';
import * as C from './styles';
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md';
import * as EmailValidator from 'email-validator';
import { auth, db } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const sidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refchat = db
    .collection('chats')
    .where('users', 'array-contains', user.email);
  const [chatSnapshot] = useCollection(refchat);

  const handleCreateChat = () => {
    const emailInput = prompt('Escreva o e-mail desejado');

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert('E-mail inválido!');
    } else if (emailInput === user.email) {
      return alert('insira um e-mail diferente do seu!');
    } else if (chatExists(emailInput)) {
      return alert('Chat já existe!');
    }
    db.collection('chats').add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user == emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Options>
        <MdDonutLarge />
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default sidebarHeader;
