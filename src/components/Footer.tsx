import React from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaQuestionCircle, FaTwitter } from 'react-icons/fa';
import chromeLogo from '../assets/logos/chrome-logo.svg';
import logo from '../assets/logos/logo.svg';

const Footer: React.FC = () => {
   return (
      <footer style={{ background: 'linear-gradient(to right, rgba(1, 178, 216, 0.07) 0%, rgba(1, 178, 216, 0.07) 23%, rgba(1, 178, 216, 0.22) 100%)', paddingTop: '50px', paddingBottom: '50px' }}>
         <Container>
            <Row className="gy-2">
               <Col lg={4} md={6}>
                  <div className="d-flex align-items-center mb-4">
                     <img src={logo} alt="LeadCRM" className="me-2" />
                  </div>

                  <p className="mb-4 fw-normal" style={{ maxWidth: '300px', color: '#000000' }}>
                     LeadCRM is LinkedIn integration tool for your CRM.
                  </p>

                  <div className="d-flex gap-3">
                     {[
                        { icon: <FaFacebookF />, bg: '#01B2D8' },
                        { icon: <FaTwitter />, bg: '#01B2D8' },
                        { icon: <FaLinkedinIn />, bg: '#01B2D8' },
                        { icon: <FaInstagram />, bg: '#01B2D8' }
                     ].map((social, idx) => (
                        <a
                           key={idx}
                           href="#"
                           className="rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none"
                           style={{ width: '40px', height: '40px', backgroundColor: social.bg }}
                        >
                           {social.icon}
                        </a>
                     ))}
                  </div>
               </Col>

               <Col lg={3} md={6}>
                  <h5 className="mb-4 fw-bold" style={{ color: '#090F4E' }}>Integrations</h5>
                  <ul className="list-unstyled fw-normal d-flex flex-column gap-3" style={{ fontSize: '14px' }}>
                     <li><a href="#" className="text-decoration-none text-black">HubSpot</a></li>
                     <li><a href="#" className="text-decoration-none text-black">Salesforce</a></li>
                     <li><a href="#" className="text-decoration-none text-black">Pipedrive</a></li>
                     <li className="d-flex align-items-center gap-2">
                        <a href="#" className="text-decoration-none text-black">Close.io</a>
                        <Badge bg={""} className="fw-medium px-2 py-1" style={{ color: '#002A06', backgroundColor: '#D8FFDD', border: '1px solid #ffffff', fontSize: '0.7rem' }}>Coming Soon</Badge>
                     </li>
                     <li className="d-flex align-items-center gap-2">
                        <a href="#" className="text-decoration-none text-black">Insightly</a>
                        <Badge bg={""} className="fw-medium px-2 py-1" style={{ color: '#002A06', backgroundColor: '#D8FFDD', border: '1px solid #ffffff', fontSize: '0.7rem' }}>Coming Soon</Badge>
                     </li>
                  </ul>
               </Col>

               <Col lg={2} md={6}>
                  <div className="mb-5">
                     <h5 className="mb-4 fw-bold" style={{ color: '#090F4E' }}>Alternative</h5>
                     <ul className="list-unstyled fw-normal d-flex flex-column gap-3" style={{ fontSize: '14px' }}>
                        <li><a href="#" className="text-decoration-none text-black">Surfe VS LeadCRM</a></li>
                        <li><a href="#" className="text-decoration-none text-black">Linkmatch Alternative</a></li>
                     </ul>
                  </div>

                  <div>
                     <h5 className="mb-4 fw-bold" style={{ color: '#090F4E' }}>Legal</h5>
                     <ul className="list-unstyled fw-normal d-flex flex-column gap-3" style={{ fontSize: '14px' }}>
                        <li><a href="#" className="text-decoration-none text-black">Privacy Policy</a></li>
                        <li><a href="#" className="text-decoration-none text-black">Terms of Use</a></li>
                     </ul>
                  </div>
               </Col>

               <Col lg={3} md={6}>
                  <h5 className="mb-4 fw-bold" style={{ color: '#090F4E' }}>Contact Us</h5>
                  <ul className="list-unstyled fw-normal d-flex flex-column gap-3 mb-4" style={{ fontSize: '14px' }}>
                     <li>
                        <a href="mailto:support@leadcrm.io" className="text-decoration-none text-black d-flex align-items-center gap-2">
                           <FaEnvelope style={{ color: '#01B2D8' }} /> support@leadcrm.io
                        </a>
                     </li>
                     <li>
                        <a href="tel:+12315387466" className="text-decoration-none text-black d-flex align-items-center gap-2">
                           <FaPhone style={{ color: '#01B2D8' }} /> +1 231-538-7466
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-decoration-none text-black d-flex align-items-center gap-2">
                           <FaQuestionCircle style={{ color: '#01B2D8' }} /> Help Center
                        </a>
                     </li>
                  </ul>

                  <Button
                     variant="dark"
                     className="d-flex align-items-center gap-3 px-4 py-2 border-0 text-white"
                     style={{ backgroundColor: '#373737', borderRadius: '14px' }}
                  >
                     <div className="text-start fw-medium">
                        <span className="d-block" style={{ color: '#E4E4E4', fontSize: '12px' }}>Available in</span>
                        <span className="fs-6 lh-sm">Chrome</span>
                     </div>
                     <div className="d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: '32px', height: '32px' }}>
                        <img src={chromeLogo} alt="Chrome" width="20" />
                     </div>
                  </Button>
               </Col>
            </Row>


            {/* Bottom Section */}
            <div className="text-center mt-5">
               <p className="mb-3" style={{ fontSize: '12px', color: '#54595F' }}>
                  Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
               </p>

               <hr className="my-2 opacity-25" style={{ border: '1px solid #8D8D8D/0.58' }} />
               <p className="mb-0" style={{ color: '#7A7A7A', fontSize: '14px' }}>
                  Copyright © 2025 LeadCRM. All Rights Reserved.
               </p>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
