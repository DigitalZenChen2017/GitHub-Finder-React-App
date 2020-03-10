import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '10%' }}
      ></img>
      <h3>{login}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More Info
        </a>
      </div>
    </div>
  );
};

// Add PropTypes For User
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
