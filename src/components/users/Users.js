import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';


const Users = props => {
  
  return (
    <div style={userStyle}>
      {props.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
 
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

Users.propTypes = {
  users: PropTypes.array.isRequired
};


export default Users;