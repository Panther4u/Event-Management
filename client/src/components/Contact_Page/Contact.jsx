import React from 'react';
import styles from './Contact.module.scss';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
    </Helmet>
    <section className={styles.contactSection}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Contact Us</h1>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a> <span> / </span> <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
      <div className={styles.contactInfo}>
        <div className={styles.contactCard}>
          <i class="fa-solid fa-location-dot"></i>
          <h3>Address</h3>
          <p>Kamarajapuram, Karur, Tamil Nadu 639002, India</p>
        </div>
        <div className={styles.contactCard}>
          <i class="fa-solid fa-envelope"></i>
          <h3>Email Us</h3>
          <p>info@gmail.com</p>
          <p>sample@gmail.com</p>
        </div>
        <div className={styles.contactCard}>
          <i class="fa-solid fa-phone"></i>
          <h3>Call Now</h3>
          <p>+91 xxxxxxxxxx</p>
          <p>+91 xxxxxxxxxx</p>
        </div>
      </div>
      <div className={styles.formSection}>
        <h2>Have Any Questions?</h2>
        <p>
          Interested in having your special occasion produced by ETHEREAL EVENTS?
          We'd love to hear from you.
        </p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name*" required />
          <input type="email" placeholder="Your Email*" required />
          <input type="text" placeholder="Address" />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Get in Touch</button>
        </form>
      </div>
      <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.092992337218!2d78.07384827504448!3d10.956347889203563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f295004e271%3A0x245178c7dcc6109b!2sLucky%20Furniture!5e0!3m2!1sen!2sin!4v1722845348000!5m2!1sen!2sin" 
      width="600" 
      height="450" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </section>
    </>
    
  );
};

export default Contact;
