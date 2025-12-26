import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesMarquee from './components/FeaturesMarquee';
import DailyChallenges from './components/DailyChallenges';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import IntegrationFlow from './components/IntegrationFlow';
import SupportedIntegrations from './components/SupportedIntegrations';
import ProfessionalsJoin from './components/ProfessionalsJoin';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '64px' }}>
        <HeroSection />
        <FeaturesMarquee />
        <DailyChallenges />
        <HowItWorks />
        <Testimonials />
        <IntegrationFlow />
        <SupportedIntegrations />
        <ProfessionalsJoin />
      </main>
      <Footer />
    </>
  );
}

export default App;
