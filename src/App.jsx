import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  BestServices,
  ClarityGlass,
  InfiniteLoopSlider
} from "./components";

const App = () => (
  <div className=" bg-full w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-full ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-full ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <ClarityGlass />
        <Business />
        <ClarityGlass />
        <Billing />
        <ClarityGlass />
        <CardDeal />
        <ClarityGlass />
        <BestServices />
        <ClarityGlass />
        <InfiniteLoopSlider />
        <Testimonials />
        
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
