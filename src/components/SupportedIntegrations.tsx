import React from 'react';
import { Container, Button } from 'react-bootstrap';
import bgCrm from '../assets/bg-crm.png';
import chatIcon from '../assets/crm-chat.svg';

const SupportedIntegrations: React.FC = () => {
  return (
    <section className="py-5 bg-white supported-integrations-section position-relative overflow-hidden">
      <Container>
        <div className="text-center mb-4 mb-lg-5">
          <div className='d-flex flex-column mx-auto w-100' style={{ maxWidth: '550px' }}>
            <div className='ms-auto'>
              <img src={chatIcon} alt="Chat Icon" />
            </div>
            <h2 className="fs-2 mb-3" style={{ color: '#090F4E' }}>Our Supported LeadCRM</h2>
          </div>
          <p className="mx-auto fw-normal" style={{ maxWidth: '800px', color: '#4D4D4D' }}>
            LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting.
            We don't want you to miss any revenue opportunity on the internet!
          </p>
        </div>

        {/* Image Container */}
        <div className="text-center py-4 mb-5">
          <img
            src={bgCrm}
            alt="Supported Integrations Data Flow"
            className="img-fluid"
            style={{ maxHeight: '500px' }}
          />
        </div>

        <div className="text-center mt-4 mb-5">
          <Button
            variant="success"
            size="lg"
            className="px-5 py-3 rounded-3 border-0"
          >
            Lets Integrate your CRM Now!
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default SupportedIntegrations;
