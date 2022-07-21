import React, { useState, useEffect, useCallback } from 'react';

import Button from '../Button';

import './detailsElements.scss';

const Detail = (props) => {
  const { detail } = props;
  const { name, annotation } = detail;

  return (
    <div className='detail-wrapper'>
      <div className="detail-descr">
        <div className='details-title'>{name}</div>

        <div className='details-annotation'>{annotation}</div>
      </div>

      <div className="details-info">
        <p>Choose cinema</p>

        <select>
          <option value="ArenaCity">Arena City</option>
          <option value="VokaCINEMA">VOKA CINEMA</option>
        </select>

        <p>Choose date</p>
        <input type="date" />

        <p>Choose time</p>
        <input type="time" />

        <Button />
      </div>
    </div>
  )
}

export default Detail;
