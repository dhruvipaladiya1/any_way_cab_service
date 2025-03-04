import React, { useState } from 'react';
import MainContext from './MainContext';

export default function ContextState(props) {

  const [userData, setUserData] = useState(false);
  const value = {
    userData, setUserData,
  }

  return (
    <MainContext.Provider value={value}>
      {props.children}
    </MainContext.Provider>
  )
}