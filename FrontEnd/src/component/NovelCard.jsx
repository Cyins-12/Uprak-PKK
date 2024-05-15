import React from 'react';
import '../NovelCard.css';
import N1 from '../assets/N1.jpg';
import { FaEye, FaStar, FaFlag } from 'react-icons/fa';

const NovelCard = ({ rank, author, description, tittle, views, favorites, saved }) => {
  return (
    <div className="card horizontal">
      <div className="card-image">
        <img src={N1} />
        <div className="rank">{rank}</div>
      </div>
      <div className="card-content">
          <h2 className="title">{tittle}</h2>
          <div className="author">{author}</div>
        <div className="icons">
          <span><FaEye /> {views}</span>
          <span><FaStar /> {favorites}</span>
          <span><FaFlag /> {saved}</span>
        </div>
        <div className="description">{description}</div>
        <button className="btn-read">Baca Sekarang</button>
      </div>
    </div>
  );
}

export default NovelCard;