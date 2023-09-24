// CSS Component using styled-components
import styled, { keyframes } from 'styled-components';



const AppContainer = styled.div`
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: #94a3b8;
  }
`;

const TagList = styled.div`
  width: 40rem;
  max-width: 150vw;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1.5rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
`;

const loopAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LoopSlider = styled.div`
  .inner {
    display: flex;
    width: fit-content;
    animation-name: ${loopAnimation}; /* Add the loop animation here */
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  background-color: #003366;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  box-shadow: 
    0 0.1rem 0.2rem rgb(0 0 0 / 20%),
    0 0.1rem 0.5rem rgb(0 0 0 / 30%),
    0 0.2rem 1.5rem rgb(0 0 0 / 40%);

  span {
    font-size: 1.2rem;
    color: #64748b;
  }
`;

const Fade = styled.div`
  pointer-events: none;
  
  position: absolute;
  inset: 0;
`;



const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSliderr = ({ children, duration, reverse = false }) => {
  return (
    <LoopSlider style={{
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </LoopSlider>
  );
};

const TagComponent = ({ text }) => (
  <Tag><span>#</span> {text}</Tag>
);

const InfiniteLoopSlider = () => (
  
    <AppContainer>
      <Header>
        <p>Our technologies</p>
      </Header>
      <TagList>
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSliderr key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
              <TagComponent text={tag} key={tag} />
            ))}
          </InfiniteLoopSliderr>
        ))}
        <Fade />
      </TagList>
    </AppContainer>
  
);

export default InfiniteLoopSlider;
