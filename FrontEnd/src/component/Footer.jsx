import React from 'react';
import '../Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className='desk'>website ini dibuat untuk mempermudah orang orang untuk membaca cerita tanpa membayar dengan online bermodalkan kuota dan device apapun.</p>
          </div>
          <div className="col-md-4">
            <h5 className='top'>Our Team</h5>
            <ul className='ul'>
              <li><a href="https://www.instagram.com/adityabt._/">Aditya Bambang Triono</a></li>
              <li><a href="https://www.instagram.com/natadikaarya/">Dika Arya Nata</a></li>
              <li><a href="#">Hafidz Sahru Majid</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className='top'>Contact</h5>
            <ul className='ul'>
              <li>
                <MdEmail /> <a href="mailto:adityabt2006@gmail.com">Email</a>
              </li>
              <li>
                <AiFillPhone /> <a href="tel:+6289656231386">Phone</a>
              </li>
              <li>
                <FaFacebook /> <a href="#" target="_blank">Facebook</a>
              </li>
              <li>
                <FaTwitter /> <a href="#" target="_blank">Twitter</a>
              </li>
              <li>
                <FaInstagram /> <a href="https://www.instagram.com/adityabt._/" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <p className='mark'>Copyright 2024 Novel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;