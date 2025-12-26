import React from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import aiResponseImg from '../assets/icons/ai-response.png';
import contactsImg from '../assets/icons/contacts.png';
import crmOverlayImg from '../assets/screenshots/crm-overlay.png';
import logo from '../assets/logos/logo 3.svg';
import syncImg from '../assets/icons/sync.png';
import withLeadCRM from '../assets/screenshots/with-leadcrm.png';
import withoutLeadCRM from '../assets/screenshots/without-leadcrm.png';
import curlyLine from '../assets/illustrations/curly-line.svg';

const DailyChallenges: React.FC = () => {
    return (
        <section className="py-5 mt-3 bg-white position-relative">
            <Container>
                <div className="text-center mb-lg-5 mb-4">
                    <h2 className="fs-2" style={{ color: '#090F4E' }}>
                        Every LinkedIn Prospector faces these daily challenges
                    </h2>
                </div>

                <Row className="align-items-center position-relative">
                    {/* VS Separator - Absolute centered for desktop */}
                    <div
                        className="vs-separator d-none d-lg-flex position-absolute start-50 top-50 h-100 translate-middle align-items-center justify-content-center"
                        style={{ zIndex: 10, width: '50px' }}
                    >
                        <span className="fs-4 text-primary bg-white px-2 py-2 z-3">VS</span>
                    </div>

                    {/* Left Column: Without LeadCRM */}
                    <Col lg={6} className="mb-4 mb-lg-0 pe-lg-5">
                        <Card className="border-0 h-100 shadow-none" style={{ backgroundColor: '#FFF7F8', borderRadius: '1.5rem' }}>
                            <Card.Body className="p-4">
                                {/* Image Placeholder */}
                                <div className="mb-4 rounded-4 overflow-hidden">
                                    <img src={withoutLeadCRM} alt="Without LeadCRM" className='w-100 img-fluid' />
                                </div>

                                <h3 className="h4 mb-4 fw-semibold" style={{ color: '#D24B68' }}>Without LeadCRM</h3>

                                <div className="d-flex flex-column gap-4">
                                    <div className="d-flex gap-3">
                                        <div className="mt-1">
                                            <FaTimes style={{ color: '#D24B68' }} size={20} />
                                        </div>
                                        <div>
                                            <h5 className="fs-7 mb-2 fw-semibold">
                                                Manual Data Entry
                                                <Badge bg={""} className="ms-2 fw-medium px-2 py-1" style={{ fontSize: '0.75rem', backgroundColor: '#FFDCD4', color: '#FF4C51' }}>3+ Hours wasted daily</Badge>
                                            </h5>
                                            <p className="fs-6 mb-0 fw-normal" style={{ color: '#4C4C4C' }}>Copying LinkedIn contacts to CRM manually plus losing conversation history</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <div className="mt-1">
                                            <FaTimes className="text-danger" size={20} />
                                        </div>
                                        <div>
                                            <h5 className="fs-7 mb-2 fw-semibold">
                                                Incomplete Data
                                                <Badge bg={""} className="ms-2 fw-medium px-2 py-1" style={{ fontSize: '0.75rem', backgroundColor: '#FFDCD4', color: '#FF4C51' }}>60% Data Incomplete</Badge>
                                            </h5>
                                            <p className="fs-6 mb-0 fw-normal" style={{ color: '#4C4C4C' }}>LinkedIn profiles missing Email and Phones from 700M+ Database</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <div className="mt-1">
                                            <FaTimes className="text-danger" size={20} />
                                        </div>
                                        <div>
                                            <h5 className="fs-7 mb-2 fw-semibold">
                                                No CRM Visibility
                                                <Badge bg={""} className="ms-2 fw-medium px-2 py-1" style={{ fontSize: '0.75rem', backgroundColor: '#FFDCD4', color: '#FF4C51' }}>Zero context available</Badge>
                                            </h5>
                                            <p className="fs-6 mb-0 fw-normal" style={{ color: '#4C4C4C' }}>Can't see existing CRM contacts when browsing LinkedIn profiles</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <div className="mt-1">
                                            <FaTimes className="text-danger" size={20} />
                                        </div>
                                        <div>
                                            <h5 className="fs-7 mb-2 fw-semibold">
                                                Limited Productivity
                                                <Badge bg={""} className="ms-2 fw-medium px-2 py-1" style={{ fontSize: '0.75rem', backgroundColor: '#FFDCD4', color: '#FF4C51' }}>No smart assistance</Badge>
                                            </h5>
                                            <p className="fs-6 mb-0 fw-normal" style={{ color: '#4C4C4C' }}>Writing messages manually plus no AI assistant for reply, Invite or comments.</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Column: With LeadCRM */}
                    <Col lg={6} className="ps-lg-5">
                        <Card className="border-0 h-100" style={{ borderRadius: '1.5rem', boxShadow: '0 8px 24px 0 rgba(149, 157, 165, 0.2)' }}>
                            <Card.Body className="p-4">
                                {/* Image Placeholder */}
                                <div className="mb-4 rounded-4 overflow-hidden">
                                    <img src={withLeadCRM} alt="With LeadCRM" className='w-100 img-fluid' />
                                </div>

                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <h3 className="h4 mb-0 fw-semibold" style={{ color: '#097737' }}>With LeadCRM</h3>
                                    <img src={logo} className='ms-3' alt="LeadCRM.io" width="28" />
                                    <Badge bg={""} className="fw-medium px-2 py-1" style={{ fontSize: '0.8rem', color: '#097737', backgroundColor: '#E6FFF1' }}>4+ Hours/day Saved</Badge>
                                </div>


                                <div className="d-flex flex-column gap-4">
                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="mt-1">
                                            <img src={syncImg} alt="sync" width="36" height="36" />
                                        </div>
                                        <div>
                                            <h5 className="fs-7 mb-1" style={{ color: '#262626' }}>
                                                Complete Bi-Directional Sync
                                            </h5>
                                            <p className="small mb-0 fw-normal fs-6" style={{ color: '#4C4C4C' }}>Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="mt-1">
                                            <img src={contactsImg} alt="contacts" width="36" height="36" />
                                        </div>
                                        <div>
                                            <h5 className="fs-7 mb-1" style={{ color: '#262626' }}>
                                                700M+ Contacts + Enrichment
                                            </h5>
                                            <p className="small mb-0 fw-normal fs-6" style={{ color: '#4C4C4C' }}>Get verified emails and phone numbers from a vast global database.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="mt-1">
                                            <img src={crmOverlayImg} alt="crm-overlay" width="36" height="36" />
                                        </div>
                                        <div>
                                            <h5 className="fs-7 mb-1" style={{ color: '#262626' }}>
                                                CRM Overlay on LinkedIn
                                            </h5>
                                            <p className="small mb-0 fw-normal fs-6" style={{ color: '#4C4C4C' }}>See full CRM insights directly on LinkedIn profiles without switching tabs.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="mt-1">
                                            <img src={aiResponseImg} alt="ai-response" width="36" height="36" />
                                        </div>
                                        <div>
                                            <h5 className="fs-7 mb-1" style={{ color: '#262626' }}>
                                                AI Response + Templates + Bulk Exports
                                            </h5>
                                            <p className="small mb-0 fw-normal fs-6" style={{ color: '#4C4C4C' }}>Save time with AI-crafted replies, pre-built templates, and one-click data exports.</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Bottom CTA with Handwritten Note */}
                <div className="text-center my-4 my-lg-5 pt-2 position-relative">
                    <div className="d-inline-block position-relative">
                        <Button
                            variant="success"
                            size="lg"
                            className="px-5 py-3 rounded-3 border-0 position-relative z-2"
                        >
                            Start Using LeadCRM Now
                        </Button>

                        {/* Handwritten Note and Arrow */}
                        <div
                            className="position-absolute d-none d-md-block"
                            style={{
                                fontFamily: '"Caveat", cursive',
                                fontSize: '1.5rem',
                                right: '-190px',
                                top: '-25px',
                                color: '#1D4841'
                            }}
                        >
                            Save 40+ hours <br /> every Month
                        </div>

                        <img src={curlyLine} className="position-absolute d-none d-lg-block" alt="Curly Line" style={{
                            bottom: '-40px',
                            right: '-90px',
                            width: '85px',
                            height: '85px',
                            margin: '0 auto'
                        }} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DailyChallenges;
