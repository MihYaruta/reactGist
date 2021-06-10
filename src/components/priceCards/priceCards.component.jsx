import React from 'react';
import './priceCards.scss';

export const PriceCards = () => (
  <div className="priceCards">
    <span className="welcome-price-header">Pricing</span>
    <div className="price-cards-container">
      <div className="card">
        <div className="cardHeader">
          <h1 className="header">Basic</h1>

          <h2 className="headerAnnotation">A Great Way to get Started</h2>
        </div>

        <div className="cardPrice">
          <span className="priceText">
            <span className="up">$</span>
            25
            <span className="down">/Mounth</span>
          </span>
        </div>

        <div className="cardList">
          <ul className="list">
            <li className="listRow">
              <span>Unlimited Episodes</span>
            </li>
            <li className="listRow">
              <span>Analytics</span>
            </li>
            <li className="listRow">
              <span>Syndication to all podcast players</span>
            </li>
            <li className="listRow">
              <span>Ad Free</span>
            </li>
          </ul>
        </div>
        <a className="link" href={`${process.env.REACT_APP_URL}/signup`}>
          <div className="button">Get Started</div>
        </a>
      </div>

      <div className="cardPro">
        <div className="cardHeader">
          <h1 className="header">Pro</h1>

          <h2 className="headerAnnotation">
            For Shows That Need auto Syndication
          </h2>
        </div>

        <div className="cardPrice">
          <span className="priceText">
            <span className="up">$</span>
            50
            <span className="down">/Mounth</span>
          </span>
        </div>

        <div className="cardList">
          <ul className="list">
            <li className="listRow">
              <span>We handle the upload proccess for you</span>
            </li>
            <li className="listRow">
              <span>Custom Cover Art Design</span>
            </li>
            <li className="listRow">
              <span>Premium support</span>
            </li>
          </ul>
        </div>

        <a className="link" href={`${process.env.REACT_APP_URL}/signup`}>
          <div className="button any">Start Now</div>
        </a>
      </div>

      <div className="card">
        <div className="cardHeader">
          <h1 className="header">Premium</h1>
          <h2 className="headerAnnotation">For Shows That Need The Best</h2>
        </div>

        <div className="cardPrice">
          <span className="priceText">
            <span className="up">$</span>
            99
            <span className="down">/Mounth</span>
          </span>
        </div>

        <div className="cardList">
          <ul className="list">
            <li className="listRow">
              <span>Premium Support</span>
            </li>
            <li className="listRow">
              <span>Custom Cover Art Design</span>
            </li>
            <li className="listRow">
              <span>Sell audio, premium content, or memberships</span>
            </li>
          </ul>
        </div>

        <a className="link" href={`${process.env.REACT_APP_URL}/signup`}>
          <div className="button any">Start Now</div>
        </a>
      </div>
    </div>
  </div>
);
