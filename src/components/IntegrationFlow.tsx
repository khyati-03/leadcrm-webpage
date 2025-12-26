import React, { useState } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import tabOneIcon from '../assets/CRM-tab1.svg';
import tabThreeIcon from '../assets/CRM-tab2.svg';
import tabTwoIcon from '../assets/CRM-tab3.svg';
import tabFourIcon from '../assets/CRM-tab4.svg';
import searchFiltersImg from '../assets/search-filters-img.png';
import verifiedImg from '../assets/verified.png';
import waterfallImg from '../assets/waterfall-img.png';

const IntegrationFlow: React.FC = () => {
    const [activeTab, setActiveTab] = useState('enrichment');

    const tabs = [
        { id: 'enrichment', label: 'CRM Data Enrichment', icon: <img src={tabOneIcon} alt="Tab One" className="me-2" style={{ width: '24px', height: '24px' }} /> },
        { id: 'sync', label: 'CRM Data Sync', icon: <img src={tabTwoIcon} alt="Tab Two" className="me-2" style={{ width: '30px', height: '30px' }} /> },
        { id: 'export', label: 'Bulk Export & Enrichment', icon: <img src={tabThreeIcon} alt="Tab Three" className="me-2" style={{ width: '22px', height: '22px' }} /> },
        { id: 'ai', label: 'AI Productivity', icon: <img src={tabFourIcon} alt="Tab Four" className="me-2" style={{ width: '30px', height: '30px' }} /> },
    ];

    return (
        <section className="integration-flow-section py-5 bg-white">
            <Container>
                <div className="text-center mb-4 mb-lg-5">
                    <h2 className="fs-2 mb-3" style={{ color: '#090F4E' }}>Complete LinkedIn Sales Solutions</h2>
                    <p style={{ color: '#4D4D4D', fontSize: '18px' }}>Everything you need for professional LinkedIn prospecting</p>
                </div>

                {/* Custom Tabs */}
                <div className="overflow-hidden">
                    <div className="d-flex mb-4 overflow-auto" style={{ borderBottom: '1px solid #EDEDED' }}>
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`px-4 py-3 cursor-pointer d-flex align-items-center text-nowrap  ${activeTab === tab.id ? 'border-3 fw-semibold' : 'fw-normal'}`}
                                style={{
                                    cursor: 'pointer',
                                    color: activeTab === tab.id ? '#090F4E' : '#4C4C4C',
                                    marginBottom: '-2px',
                                    borderBottom: activeTab === tab.id ? '1px solid #090F4E' : '1px solid #EDEDED',
                                }}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.icon} {tab.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tab Content Area */}
                {activeTab === 'enrichment' && (
                    <div className="fade-in-up">
                        <div className="mb-4">
                            <p className="fs-5 fw-normal" style={{ color: '#4D4D4D' }}>
                                It’s hard to find the accurate contact data for every prospects by <Badge bg={""} className="ms-2 fw-medium px-2 py-1" style={{ fontSize: '0.75rem', backgroundColor: '#FFDCD4', color: '#FF4C51' }}>Incomplete Data</Badge>
                            </p>
                        </div>

                        <Row className="g-4">
                            {/* Left Panel: Verified Email & Phone */}
                            <Col lg={6}>
                                <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#F0F4FD' }}>
                                    <div className="mb-4 pb-3">
                                        <h4 className="mb-2 fs-5" style={{ color: '#262626' }}>Here is how <span style={{ color: '#4D4D4D' }}>LeadCRM tackles</span> that situation.</h4>
                                        <a href="#" className="text-decoration-none small" style={{ color: '#097737' }}>Try LeadCRM Data Enrichment &gt;</a>
                                    </div>

                                    <div className='d-flex gap-4'>
                                        <figure className='mb-0'>
                                            <img src={verifiedImg} alt="Verified Image" className='w-100' />
                                        </figure>
                                        <figure className='mb-0'>
                                            <img src={searchFiltersImg} alt="Search Filters Image" className='w-100' />
                                        </figure>
                                    </div>
                                </div>
                            </Col>

                            {/* Right Panel: Waterfall Enrichment */}
                            <Col lg={6}>
                                <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#F0F4FD' }}>
                                    <div className="mb-4 pb-3">
                                        <h4 className="mb-2 fs-5" style={{ color: '#262626' }}>
                                            If it does not works for you ! try our <span style={{ color: '#097737' }}>Advanced Waterfall Enrichment &gt;</span>
                                        </h4>
                                    </div>

                                    <figure className='mb-0'>
                                        <img src={waterfallImg} alt="Waterfall Image" className='w-100' />
                                    </figure>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}

                {/* Placeholder for other tabs */}
                {activeTab !== 'enrichment' && (
                    <div className="text-center py-5">
                        <h3 className="text-muted">Content for {tabs.find(t => t.id === activeTab)?.label}</h3>
                    </div>
                )}

            </Container>
        </section>
    );
};

export default IntegrationFlow;
