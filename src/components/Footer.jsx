import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Home & Living</a>
            </li>
            <li>
              <a href="#">Beauty</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Myntra Insider</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Whitehat</a>
            </li>
            <li>
              <a href="#">Cleartrip</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>T&C</a>
            </li>
            <li>
              <a>Terms Of Use</a>
            </li>
            <li>
              <a>Track Orders</a>
            </li>
            <li>
              <a>Shipping</a>
            </li>
            <li>
              <a>Cancellation</a>
            </li>
            <li>
              <a>Returns</a>
            </li>
            <li>
              <a>Privacy policy</a>
            </li>
            <li>
              <a>Grievance Officer</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
          <ul>
            <li>
              <a>Keep in touch</a>
            </li>
            <li>
              <a>100% ORIGINAL guarantee for all products at myntra.com</a>
            </li>
            <li>
              <a>Return within 14 days of receiving your order</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="popular">
        <div className="copyright">
          <p>© 2024 www.myntra.com. All rights reserved.</p>
          <p>A Flipkart company</p>
          <p>Registered Office Address</p>
        </div>
        <div>
          <h4 className="">POPULAR SEARCHES</h4>
          <p>
            Makeup || Dresses For Girls || T-Shirts || Sandals || Headphones||
            Babydolls || Blazers For Men|| Handbags || Ladies Watches || Bags ||
            Sport Shoes || Reebok Shoes || Puma Shoes || Boxers || Wallets||
            Tops || Earrings|| Fastrack Watches || Kurtis || Nike|| Smart
            Watches || Titan Watches || Designer Blouse|| Gowns || Rings ||
            Cricket Shoes || Forever 21 || Eye Makeup || Photo Frames || Punjabi
            Suits || Bikini || Myntra Fashion Show || Lipstick || Saree ||
            Watches || Dresses|| Lehenga || Nike Shoes || Goggles || Bras ||
            Suit || Chinos || Shoes || Adidas Shoes || Woodland Shoes ||
            Jewellery || Designers Sarees
          </p>
          <p>
            In case of any concern,
            <a href="#" className="text-blue-500">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
