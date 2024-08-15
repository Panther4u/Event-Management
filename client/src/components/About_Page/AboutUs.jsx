import React from 'react';
import styles from './AboutUs.module.scss';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>About Us</h1>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a> <span> / </span> <a href="/about">About</a>
          </nav>
        </div>
      </header>
      
      <div className={styles.whoWeAre}>
        <h2>Who We Are</h2>
        <div className={styles.profiles}>
          <div className={styles.profile}>
            <Image src='/images/about profile1.jpeg' alt='Shivam' width={180} height={180} />
            <h3 className={styles.name}>Shivam</h3>
            <h4>Director & Event Manager</h4>
            <p>Shivam is a Fellow Chartered Certified Accountant and holds an MBA in Financial Management. She has over 20 years of experience in Banking and Financial Industry both in Mauritius and overseas and her led several high-profile projects in the latter field.</p>
            <p>She has significant experience of budgeting, planning and coordinating Corporate, Community and Personal Functions including Corporate Workshops and Seminars, Networking Events, Team Buildings Activities, Musical Events and Weddings.</p>
          </div>
          <div className={styles.profile}>
            <Image src='/images/about profile2.jpeg' alt='Shivam' width={180} height={180} />
            <h3>Shivam</h3>
            <h4>Founder, Director & Event Manager</h4>
            <p>Shivam is a qualified Financial Planner by formation with over 15 years experience in the Financial Services Industry in the UK and Mauritius; with a passion for Events design and organisation since has early years. Throughout has career and personal life, he has been actively involved in planning and organizing Corporate Events as well as Private Functions for friends and families.</p>
            <p>To further nurture has passion, he embarked on a Post Graduate Qualification in Events Management from the Event Academy in London, UK and looking forward to pursue has career with a strong objective to be a game changer in the fascinating World of Events in Mauritius.</p>
          </div>
        </div>
      </div>

      <div className={styles.whyChooseUs}>
        <h2>Why Choose Us</h2>
        <div className={styles.reasons}>
          <div className={styles.reason}>
            <div className={styles.reason_right}>
              <Image src='/images/about image 1.png' alt='' width={480} height={300} />
              <p>Our level of professionalism in managing client relationships, delivery of proposals and timely planning and organisation puts us amongst the best in the market.</p>
            </div>
            <div className={styles.reason_left}>
              <Image src='/images/about image 2.png' alt='' width={430} height={500} />
            </div>
            <span></span>
          </div>
          <div className={styles.reason_two}>
            <div className={styles.reason_right_two}>
              <Image src='/images/about image 3.png' alt='' width={430} height={500} />
            </div>
            <div className={styles.reason_left_two}>
              <Image src='/images/about image 4.png' alt='' width={480} height={300} />
              <p>We are your One Stop Shop when it comes to producing and managing Events.</p>
            </div>
            <span></span>
          </div>
          <div className={styles.reason_three}>
            <div className={styles.reason_right_three}>
              <Image src='/images/about image 5.png' alt='' width={480} height={300} />
              <p>Our level of professionalism in managing client relationships, delivery of proposals and timely planning and organisation puts us amongst the best in the market.</p>
            </div>
            <div className={styles.reason_left_three}>
              <Image src='/images/about image 6.png' alt='' width={430} height={500} />
            </div>
            <span></span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
