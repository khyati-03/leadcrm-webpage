import React from 'react';
import { Container } from 'react-bootstrap';
import contactIcon from '../assets/icons/contacts.png';
import cursorIcon from '../assets/icons/cursor-pointer-icon.png';
import mappingIcon from '../assets/icons/mappingIcon.png';
import waterfallIcon from '../assets/icons/waterfall-3d-icon.png';

const FeaturesMarquee: React.FC = () => {
  const features = [
    {
      icon: <img src={contactIcon} alt="Contacts" width={44} />,
      text: <span>Access to <strong>700M+ Contacts</strong></span>
    },
    {
      icon: <img src={cursorIcon} alt="Cursor" width={36} />,
      text: <span><strong>One click push</strong> to CRM</span>
    },
    {
      icon: <img src={mappingIcon} alt="Cursor" width={40} />,
      text: <span><strong>Custom Field</strong> Mapping</span>
    },
    {
      icon: <img src={waterfallIcon} alt="Cursor" width={40} />,
      text: <span>Advanced <strong>Waterfall Enrichment</strong></span>
    }
  ];

  const marqueeItems = [...features, ...features, ...features, ...features];

  return (
    <section className="featured-marquee py-5 bg-white overflow-hidden">
      <Container fluid className="p-0">
        <div className="marquee-container d-flex">
          <div className="marquee-content d-flex align-items-center">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="marquee-item d-flex align-items-center gap-3 px-5" style={{ whiteSpace: 'nowrap' }}>
                <div className="d-flex align-items-center justify-content-center">
                  {item.icon}
                </div>
                <span className="fs-5 text-dark font-family-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesMarquee;
