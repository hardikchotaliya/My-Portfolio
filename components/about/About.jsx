import React, { Suspense, useEffect, useMemo, useState, useRef } from 'react';
import styles from './about.module.css';
import HyperOne from '../customH1/HyperOne';
import CustomButton from '../button/CustomButton';
import Link from 'next/link';
import { AboutFallback } from '../image/Fallback';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const currentRef1 = ref1.current;
    const currentRef2 = ref2.current;
    const currentRef3 = ref3.current;
    const currentRef4 = ref4.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observer1 = new IntersectionObserver(handleIntersection, observerOptions);
    const observer2 = new IntersectionObserver(handleIntersection, observerOptions);
    const observer3 = new IntersectionObserver(handleIntersection, observerOptions);
    const observer4 = new IntersectionObserver(handleIntersection, observerOptions);

    if (currentRef1) observer1.observe(currentRef1);
    if (currentRef2) observer2.observe(currentRef2);
    if (currentRef3) observer3.observe(currentRef3);
    if (currentRef4) observer4.observe(currentRef4);

    return () => {
      if (currentRef1) observer1.unobserve(currentRef1);
      if (currentRef2) observer2.unobserve(currentRef2);
      if (currentRef3) observer3.unobserve(currentRef3);
      if (currentRef4) observer4.unobserve(currentRef4);
    };
  }, []);
  const MyAboutImage = React.lazy(() => import('../image/MyImage'));

  const memoizedImage = useMemo(
    () => (
      <Suspense fallback={<AboutFallback />}>
        <MyAboutImage />
      </Suspense>
    ),
    []
  );
  const aboutText = 
      `A results-driven Automation Test Engineer focused on delivering high-quality software through effective test automation strategies. Proficient in developing and maintaining robust test frameworks using tools like WebDriverIO, Selenium and various programming languages like JavaScript/TypeScript. Passionate about continuous improvement and ensuring seamless integration of testing within the CI/CD pipeline.`;
  return useMemo(
    () => (
      <div id="about" className={`${styles['about-container']}`}>
        <div className={`${styles['about-content']}`}>
          <section className={styles.imageSection}>{memoizedImage}</section>
          <section className={`${styles.infosection}`}>
            <HyperOne value={'About Me'} />
            <h2 className="text-2xl">
              {' '}
              Automation Test Engineer 
            </h2>
            <p className="text-xl text-justify">{aboutText}</p>
            <div className={`${styles.personalInfo}`}>
              <div>
                <span className="font-bold">Full Name:</span>
                <span>Hardik Chotaliya</span>
              </div>
              <div>
                <span className="font-bold">Email:</span>
                <span>hardikchotaliya26@gmail.com</span>
              </div>
              <div>
                <span className="font-bold">Field:</span>
                <span>Software Engineering</span>
              </div>
              <div>
                <span className="font-bold">Availability:</span>
                <span>Available for work</span>
              </div>
            </div>
            {/* <Link
              aria-label="download cv"
              download
              target="_blank"
              href={'#'}
            >
              <CustomButton text={'Download CV'} />
            </Link> */}
          </section>
          <section className={styles.skillSection}>
            <div className={styles.subject}>
              <div className={'subject'}>Hard Work</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref1}
                  className={`${
                    isVisible ? styles['fade-in1'] : styles['progress-line']
                  }`}
                  // value="95%"
                  style={{
                    width: '95%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Automation Testing</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref2}
                  className={`${
                    isVisible ? styles['fade-in2'] : styles['progress-line']
                  }`}
                  // value="85%"
                  style={{
                    width: '85%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Creativity</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref3}
                  className={`${
                    isVisible ? styles['fade-in3'] : styles['progress-line']
                  }`}
                  // value="80%"
                  style={{
                    width: '80%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Leadership</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref4}
                  className={`${
                    isVisible ? styles['fade-in4'] : styles['progress-line']
                  }`}
                  // value="80%"
                  style={{
                    width: '80%',
                  }}
                ></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    ),
    [isVisible, memoizedImage, aboutText]
  );
};

export default About;
