import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import "../components/Styles/cardDeal.scss"; 

const CardDeal = () => {

  const dynamicIndex = 0;
  const indices = Array.from({ length: 7 }, (_, index) => index);

  return (
  
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Transform Your Business with <span className={styles.trendyText}>Next-Gen</span> Analytics.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elevate your business to new heights with Invova's cutting-edge analytic IT services. Our team leverages the latest technologies, including <span className={styles.trendyText}>AI</span>, <span className={styles.trendyText}>Machine Learning</span>, and <span className={styles.trendyText}>Blockchain</span>, to provide strategic insights that propel your business forward. Stay ahead of the curve and unlock the full potential of your data.
        </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <div class="card">
          <div class="card__header">
            <p class="card__headline">Invova</p>
            <p class="card__text">Today</p>
          </div>

          <div class="card__chart">
            <div class="card__axis">
              <div class="card__row card__row--top">460</div>
              <div class="card__row card__row--middle">230</div>
              <div class="card__row card__row--bottom">0</div>
            </div>
            {/* Generate columns dynamically */}
            {indices.map((index) => (
              <div className={`card__column${index === 6 ? ' active' : ''}`} key={index}>
                <div className="card__bar" style={{ '--index': index }}></div>
              </div>
            ))}
        </div>
        <div class="card__number">460</div>
      </div>
    </div>
    </section>
  );
};

export default CardDeal;
