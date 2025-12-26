import React, { useRef } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import avatarUser1 from '../assets/avatar.png';
import capterraLogo from '../assets/capterra-logo.svg';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      quote: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "David Fincher",
      role: "On Capterra",
      img: avatarUser1
    },
    {
      id: 2,
      quote: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus.",
      name: "Lillian Williams",
      role: "On Capterra",
      img: avatarUser1
    },
    {
      id: 3,
      quote: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "Michael",
      role: "On Capterra",
      img: avatarUser1
    },
    {
      id: 4,
      quote: "Incredible tool for LinkedIn prospecting. The bi-directional sync saves me hours every week. Data accuracy is impressive.",
      name: "Sarah Jones",
      role: "On Capterra",
      img: avatarUser1
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-5 bg-white overflow-hidden">
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-4 mt-lg-5 mb-3">
          <h2 className="fs-2" style={{ color: '#090F4E' }}>What people are saying about LeadCRM</h2>
          <div className="d-flex gap-2">
            <Button
              variant="outline-dark"
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', borderColor: '#090F4E', color: '#090F4E' }}
              onClick={() => scroll('left')}
            >
              <FaChevronLeft size={14} />
            </Button>
            <Button
              variant="dark"
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#090F4E' }}
              onClick={() => scroll('right')}
            >
              <FaChevronRight size={14} />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="d-flex gap-4 pb-4"
          style={{
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>
            {`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}
          </style>

          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0"
              style={{
                width: '100%',
                maxWidth: '400px',
                scrollSnapAlign: 'start'
              }}
            >
              <Card className="h-100 border-0" style={{ backgroundColor: '#F9F0F8', borderRadius: '1rem' }}>
                <Card.Body className="p-4 d-flex flex-column h-100">
                  <p className="mb-3" style={{ color: '#495057', fontSize: '1rem', lineHeight: '1.6' }}>
                    "{t.quote}"
                  </p>

                  <div className="d-flex align-items-center gap-2 mb-4">
                    <div className="bg-white p-1 rounded">
                      <img src={capterraLogo} alt="Capterra" width="24" height="20" />
                    </div>
                    <div className="d-flex text-dark">
                      {[...Array(5)].map((_, i) => <FaStar key={i} size={16} color="#090F4E" />)}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="border-top pt-4 mt-5">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="rounded-circle overflow-hidden bg-white"
                          style={{ width: '50px', height: '50px' }}
                        >
                          <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                          <div className="text-dark" style={{ color: '#090F4E' }}>{t.name}</div>
                          <div className="small text-muted">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Testimonials;
