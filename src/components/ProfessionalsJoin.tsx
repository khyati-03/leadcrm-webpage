import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import bannerImg from '../assets/product-hunt-banner-image.png';

const ProfessionalsJoin: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#EAEFFA' }}>
      <Container>
        <div className="mb-4">
          <h2 className="fs-2 mb-3" style={{ color: '#090F4E' }}>Join Thousands of Professionals Using LeadCRM</h2>
        </div>

        <div className="mb-5">
          <div className="rounded-4 overflow-hidden" >
            <img
              src={bannerImg}
              alt="LeadCRM Product Hunt Banner"
              className="img-fluid w-100"
            />
          </div>
        </div>

        <div className="text-center pb-4">
          <Button
            variant="success"
            size="lg"
            className="px-5 py-3 rounded-3 border-0 d-inline-flex align-items-center gap-2"
          >
            Get Started Today <FaArrowRight />
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default ProfessionalsJoin;
