import React from 'react';
import { services, services1 } from '../Data/staticData';
import Image from 'next/image';

const Category = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="heading">Our Service</h1>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div className="serviceOne" key={index}>
            <div className="serviceBox">
              <div className="service-icon">
                <Image src={service.icon} alt={service.title} width={30} height={30} />
              </div>
              <h3 className="title">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {services1.map((service1, index) => (
          <div className="serviceTwo" key={index}>
            <div className="serviceBox">
              <div className="service-icon">
                <Image src={service1.icon} alt={service1.title} width={30} height={30} />
              </div>
              <h3 className="title">{service1.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
