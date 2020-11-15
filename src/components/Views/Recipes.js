import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Recipes() {
  const { userId } = useContext(UserContext);
  return (
    <div>
      <h3>Hi {userId}. These are you're saved recipes</h3>
    </div>
  );
}

export default Recipes;
