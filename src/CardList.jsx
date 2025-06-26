// import { useState } from 'react';
import Card from './Card';
import propTypes from 'prop-types';

export default function CardList(props) {
  return (
    <div>
      <h2>Card List</h2>

      {props.profiles.map(profile => (
        <Card {...profile} key={profile.id} />
      ))}
    </div>
  );
}


CardList.propTypes = {
  profiles: propTypes.arrayOf(propTypes.object).isRequired,
};
