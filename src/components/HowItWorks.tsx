import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import ballImg from '../assets/ball.png';
import syncCrmImg from '../assets/sync-crm.svg';
import installExtImg from '../assets/install-extension.svg';
import browseLinkedInImg from '../assets/browse-linkedin.svg';
import getDataImg from '../assets/getData.svg';

const HowItWorks: React.FC = () => {

    const steps = [
        {
            id: 1,
            title: "Install the Extension",
            desc: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
            img: installExtImg
        },
        {
            id: 2,
            title: "Browse LinkedIn",
            desc: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
            img: browseLinkedInImg
        },
        {
            id: 3,
            title: "Get Enriched Data",
            desc: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
            img: getDataImg
        },
        {
            id: 4,
            title: "Sync to CRM Instantly",
            desc: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
            img: syncCrmImg
        }
    ];

    return (
        <section className="py-5 position-relative" style={{ backgroundColor: '#EAEFFA' }}>
            {/* Background Grid Pattern Simulation */}
            <div
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{
                    backgroundImage: 'linear-gradient(#E1E8F5 1px, transparent 1px), linear-gradient(90deg, #E1E8F5 1px, transparent 1px)',
                    backgroundSize: '200px 200px',
                    opacity: 0.25,
                    pointerEvents: 'none'
                }}
            ></div>

            <Container className="position-relative z-2">
                <div className="mb-3 pb-3">
                    <h2 className="display-6 mb-2 fw-semibold" style={{ color: '#090F4E' }}>How it Works</h2>
                    <p className="fw-normal mb-0" style={{ color: '#4C4C4C' }}>From setup to success in <strong className="fw-semibold">4 simple steps</strong></p>
                </div>

                <Row className="position-relative crm-cards-row gy-4 gy-lg-0">
                    {steps.map((step) => (
                        <Col className='crm-cards-cols' lg={3} md={6} key={step.id}>
                            <Card className="h-100 border-0 shadow-sm text-center">
                                <Card.Body className="p-0 d-flex flex-column align-items-center">
                                    {/* Number */}
                                    <div
                                        className="position-relative bg-white pt-2 mb-3"
                                        style={{ zIndex: 1, width: 'fit-content' }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Sriracha, cursive',
                                                fontSize: '6rem',
                                                color: '#2D96BC',
                                                lineHeight: 1
                                            }}
                                        >
                                            {step.id}
                                        </span>
                                    </div>

                                    <h4 className="fs-5 px-2 mb-2" style={{ color: '#090F4E' }}>{step.title}</h4>
                                    <p className="small text-muted px-2 mb-3" style={{ fontSize: '0.9rem' }}>
                                        {step.desc}
                                    </p>

                                    <div className="mt-auto w-100 rounded overflow-hidden">
                                        <img src={step.img} alt={step.title} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <Button
                        variant="success"
                        size="lg"
                        className="px-5 py-3 rounded-3 border-0 d-inline-flex align-items-center gap-2"
                    >
                        Try LeadCRM Now <FaArrowRight />
                    </Button>
                </div>
            </Container>

            <img
                src={ballImg}
                alt="Decoration"
                className="position-absolute"
                width="120"
                style={{
                    bottom: -40,
                    right: 10,
                    zIndex: 1,
                    width: 64
                }}
            />
        </section>
    );
};

export default HowItWorks;
