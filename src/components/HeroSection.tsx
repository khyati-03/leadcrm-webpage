import React from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import bgHero from '../assets/backgrounds/bg-hero-1.png';
import capterraLogo from '../assets/logos/capterra-logo.svg';
import chromeLogo from '../assets/logos/chrome-logo.svg';
import chromeStore from '../assets/logos/chrome-store.svg';
import hubspotLogo from '../assets/logos/hubspot.svg';
import pipedriveLogo from '../assets/logos/pipedrive.svg';
import salesforceLogo from '../assets/logos/salesforce.svg';
import rocketIcon from '../assets/icons/rocket.png';

const HeroSection: React.FC = () => {
    return (
        <section
            className="py-5 text-center position-relative"
            style={{
                backgroundImage: `url(${bgHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
                paddingTop: '120px'
            }}
        >
            <Container className="position-relative z-2">
                <div className="mb-3 mb-md-4 d-flex justify-content-center">
                    <Badge
                        bg="white"
                        className="rounded-pill px-2 px-md-3 px-lg-4 py-2 fw-normal d-flex align-items-center gap-2 shadow-sm"
                        style={{ color: '#63657E', border: '.85px solid #9ACCFF', fontSize: 'clamp(0.7rem, 2vw, 1rem)' }}
                    >
                        <img src={rocketIcon} alt="Rocket" width={20} height={20} style={{ width: 'clamp(16px, 4vw, 20px)', height: 'auto' }} />
                        <span>Thousands of Professional using LeadCRM</span>
                    </Badge>
                </div>

                <h1 className="display-4 mb-3 mb-md-4 fw-semibold" style={{ color: '#121212', fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: '1.2' }}>
                    LinkedIn CRM Integration <br className="d-none d-md-block" />
                    <span className="d-md-none"> </span>
                    Capture, Sync and Enrich in <span className="text-content-img position-relative d-inline-block text-primary" style={{ color: '#3596C0' }}>
                        Both Ways
                    </span>
                </h1>

                <p className="mb-3 mb-md-4 mx-auto fw-semibold" style={{ maxWidth: '785px', fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', color: '#363636' }}>
                    Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
                </p>

                {/* Gradient Box for Logos */}
                <div className="d-flex justify-content-center mb-3 mb-md-4 pb-3">
                    <div
                        className="rounded-4 d-flex gap-2 gap-md-3 gap-lg-4 align-items-center justify-content-center flex-wrap shadow-lg"
                        style={{
                            background: 'linear-gradient(90deg, #5ED3FF 0%, #6EC6FE 2%, #EB65F4 80%, #FD58F2 100%)',
                            maxWidth: '600px',
                            padding: 'clamp(12px, 3vw, 20px)'
                        }}
                    >
                        <span className="fw-medium text-dark" style={{ color: '#2E2E2E', fontSize: 'clamp(0.875rem, 2.5vw, 1.5rem)' }}>Works with</span>

                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                            style={{
                                width: 'clamp(45px, 10vw, 60px)',
                                height: 'clamp(45px, 10vw, 60px)',
                                backgroundColor: '#FF7A59',
                                border: '1px solid white'
                            }}
                        >
                            <img src={hubspotLogo} alt="HubSpot" style={{ width: 'clamp(20px, 5vw, 28px)', height: 'clamp(20px, 5vw, 28px)', filter: 'brightness(0) invert(1)' }} />
                        </div>
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                            style={{
                                width: 'clamp(45px, 10vw, 60px)',
                                height: 'clamp(45px, 10vw, 60px)',
                                backgroundColor: '#21844A',
                                border: '1px solid white'
                            }}
                        >
                            <img src={pipedriveLogo} alt="Pipedrive" style={{ width: 'clamp(20px, 5vw, 28px)', height: 'clamp(20px, 5vw, 28px)', filter: 'brightness(0) invert(1)' }} />
                        </div>
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: 'clamp(45px, 10vw, 60px)', height: 'clamp(45px, 10vw, 60px)' }}>
                            <img src={salesforceLogo} alt="Salesforce" style={{ width: 'clamp(26px, 6vw, 38px)', height: 'clamp(26px, 6vw, 38px)' }} />
                        </div>
                    </div>
                </div>

                {/* Ratings */}
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 gap-md-5 mb-3 mb-md-4 pb-3 align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <div className="bg-white p-2 rounded">
                            <img src={chromeStore} alt="Chrome" width="24" style={{ width: 'clamp(18px, 4vw, 24px)', height: 'auto' }} />
                        </div>
                        <div className="d-flex" style={{ color: '#C58920' }}>
                            {[...Array(5)].map((_, i) => <FaStar key={i} size={14} style={{ fontSize: 'clamp(10px, 3vw, 14px)' }} />)}
                        </div>
                        <span className="small text-dark" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>5/5</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="bg-white p-2 rounded">
                            <img src={capterraLogo} alt="Capterra" width="24" style={{ width: 'clamp(18px, 4vw, 24px)', height: 'auto' }} />
                        </div>
                        <div className="d-flex" style={{ color: '#C58920' }}>
                            {[...Array(5)].map((_, i) => <FaStar key={i} size={14} style={{ fontSize: 'clamp(10px, 3vw, 14px)' }} />)}
                        </div>
                        <span className="small text-dark" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>5/5</span>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <Button
                        variant="dark"
                        className="d-flex align-items-center justify-content-center gap-2 gap-md-3 px-3 py-2 border-0 text-white"
                        style={{ backgroundColor: '#373737', borderRadius: '14px', fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}
                    >
                        <div className="text-start fw-medium">
                            <span className="d-block" style={{ color: '#E4E4E4', fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)' }}>Available in</span>
                            <span className="lh-sm" style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}>Chrome Web Store</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: 'clamp(28px, 6vw, 32px)', height: 'clamp(28px, 6vw, 32px)', flexShrink: 0 }}>
                            <img src={chromeLogo} alt="Chrome" style={{ width: 'clamp(16px, 4vw, 20px)', height: 'auto' }} />
                        </div>
                    </Button>
                    <Button
                        variant="success"
                        className="px-3 px-md-4 py-2 border-0"
                        style={{ borderRadius: '14px', fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
                    >
                        Get a Free Trial Now!
                    </Button>
                </div>

            </Container>
        </section>
    );
};

export default HeroSection;
