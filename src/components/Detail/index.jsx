import React from 'react';

import Button from '../Button';

import './detail.scss';

const Detail = (props) => {
  const {detail} = props;

  return (
    <div className='detail-wrapper'>
      <div className='details-title'>{detail.name}</div>

      <div className='details-annotation'>{detail.annotation}</div>

      <p>Choose cinema</p>

      <select>
        <option selectedvalue="cinema1">cinema1</option>
        <option value="cinema2">cinema2</option>
        <option value="cinema3">cinema3</option>
        <option value="cinema4">cinema4</option>
        <option value="cinema5">cinema5</option>
        <option value="cinema6">cinema6</option>
        <option value="cinema7">cinema7</option>
      </select>

      <p>Choose date</p>
      <input type="date" />

      <p>Choose time</p>
      <input type="time" />

      <Button />
    </div>
  )
}

export default Detail;
