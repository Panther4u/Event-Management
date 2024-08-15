import React from 'react';
import styles from './Service.module.scss';
import Image from 'next/image';

const Service = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Services</h1>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a> <span> / </span> <a href="/services">Service</a>
          </nav>
        </div>
      </header>

      <div className={styles.service}> 
        <h2>Our Service</h2>
        <p>Organizing and planning events can often feel overwhelming and stressful. That's where we come in. With our expertise, experience, and extensive network, we alleviate the hassle, ensuring a smooth preparation process for your event. By entrusting us with the coordination of various functions, you and your loved ones can focus on your daily activities and relax, knowing that every task is taken care of.</p>
        <div className={styles.section}>
          <Image src="/images/service1.jpeg" alt="Decors & Florists"  width={300} height={300} />
          <div className={styles.text}>Decors & Florists</div>
        </div>
        <div className={styles.section_reverse}>
          <div className={styles.text}>Catering</div>
          <Image src="/images/service2.png" alt="Catering"  width={300} height={300} />
        </div>
        <div className={styles.section}>
          <Image src="/images/service3.png" alt="LED Walls & TV"  width={300} height={300} />
          <div className={styles.text}>LED Walls & TV</div>
        </div>
        <div className={styles.section_reverse}>
          <div className={styles.text}>Kids Gaming</div>
          <Image src="/images/service4.png" alt="Kids gaming"  width={300} height={300} />
        </div>
        <div className={styles.section}>
          <Image src="/images/service3.png" alt="Birthday Party"  width={300} height={300} />
          <div className={styles.text}>Birthday Party</div>
        </div>
        <div className={styles.section_reverse}>
          <div className={styles.text}>DJ Party</div>
          <Image src="/images/service4.png" alt="DJ Party"  width={300} height={300} />
        </div>
        <div className={styles.section}>
          <Image src="/images/service3.png" alt="Entertainment"  width={300} height={300} />
          <div className={styles.text}>Entertainment</div>
        </div>
        <div className={styles.section_reverse}>
          <div className={styles.text}>Photography</div>
          <Image src="/images/service4.png" alt="Photography"  width={300} height={300} />
        </div>
        <div className={styles.section}>
          <Image src="/images/service3.png" alt="Makeup"  width={300} height={300} />
          <div className={styles.text}>Makeup</div>
        </div>
        <div className={styles.section_reverse}>
          <div className={styles.text}>Wedding Planner</div>
          <Image src="/images/service4.png" alt="Wedding Planner"  width={300} height={300} />
        </div>
        <div className={styles.section}>
          <Image src="/images/service3.png" alt="Mehndi"  width={300} height={300} />
          <div className={styles.text}>Mehndi</div>
        </div>
        <div className={styles.section_reverse}>
          <div className={styles.text}>Wedding Cards</div>
          <Image src="/images/service4.png" alt="Wedding Cards"  width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Service;
