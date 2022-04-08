import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ABOUT_ME_DATA } from '../constants';

const Members = () => {
  let { username } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const found = ABOUT_ME_DATA.find((data) => data.name === username);
    setCurrentUser(found);
  }, [username]);

  return (
    <>
      <h1 className="hello"> Hello, I am </h1>
      <h1 className="nametitle">{currentUser.fullName || ''}</h1>
      <p className="profiletext">{currentUser.desc || ''}</p>
      <img src={currentUser.image || ''} alt={currentUser.alt}></img>
    </>
  );
};

export default Members;
