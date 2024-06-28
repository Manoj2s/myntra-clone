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
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Officer</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
          <p>Keep in touch</p>
          <p>100% ORIGINAL guarantee for all products at myntra.com</p>
          <p>Return within 14 days of receiving your order</p>
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
