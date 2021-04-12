import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import AppContext from '../context/AppContext';
import ProfileInputName from '../components/ProfilePage/ProfileInputName';
import ProfileInputEmail from '../components/ProfilePage/ProfileInputEmail';
import ProfileInputPassword from '../components/ProfilePage/ProfileInputPassword';
import ProfileButton from '../components/ProfilePage/ProfileButton';
import '../css/profile.css';

export default function ProfilePage() {
  const token = localStorage.getItem('token') || null;
  const user = JSON.parse(localStorage.getItem('user')) || null;
  const { userData, apiSuccess } = useContext(AppContext);
  const [localName, setLocalName] = useState(userData.name);
  const [localEmail, setLocalEmail] = useState(userData.email);
  const [localPassword, setLocalPassword] = useState(userData.password);
  const inpName = { localName, setLocalName, user };
  const inpEmail = { localEmail, setLocalEmail, user };
  const inpPassword = { localPassword, setLocalPassword, user };
  const buttonData = { localName, localEmail, localPassword, user };
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div className="profile">
      <Menu />
      <div className="bodyProfile">
        <ProfileInputName inpName={ inpName } />
        <ProfileInputEmail inpEmail={ inpEmail } />
        <ProfileInputPassword inpPassword={ inpPassword } />
        <ProfileButton buttonData={ buttonData } />
        {apiSuccess && <div className="sucesso">Atualização concluída com sucesso</div>}
      </div>
    </div>
  );
}
