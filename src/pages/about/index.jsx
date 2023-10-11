import React from 'react';

import styles from './style.module.css';
export const About = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/RahilAliyevCV.pdf';
    link.download = 'Rahil Aliyev.pdf';
    link.click();
  };
  return (
    <main>
      <section className={styles.about}>
        <div className="container">
          <div className={styles.box_shadow_full}>
            <div className={styles.left}>
              <div className={styles.about_info}>
                <p>
                  <span className={styles.title_info}>Name: </span> <span>Rahil Aliyev</span>
                </p>
                <p>
                  <span className={styles.title_info}>Profile: </span> <span>Front end developer</span>
                </p>
                <p>
                  <span className={styles.title_info}>Email: </span> <span>rahil.eliyev@gmail.com</span>
                </p>
                <p>
                  <span className={styles.title_info}>Phone: </span> <span>+994 50 596 62 25</span>
                </p>
              </div>
              <div className={styles['skill-mf']}>
                <p className={styles.title_info}>Skill</p>
                <span>HTML</span> <span className="pull-right">85%</span>
                <div className={styles.progress}>
                  <div
                    className={styles['progress-bar']}
                    role="progressbar"
                    style={{ width: '85%' }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>CSS3</span> <span className="pull-right">75%</span>
                <div className={styles.progress}>
                  <div
                    className={styles['progress-bar']}
                    role="progressbar"
                    style={{ width: '75%' }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>Javascript</span> <span className="pull-right">80%</span>
                <div className={styles.progress}>
                  <div
                    className={styles['progress-bar']}
                    role="progressbar"
                    style={{ width: '80%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>React JS</span> <span className="pull-right">70%</span>
                <div className={styles.progress}>
                  <div
                    className={styles['progress-bar']}
                    role="progressbar"
                    style={{ width: '70%' }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.about_me}>
                <div className={styles.title_box}>
                  <h5 className={styles.text_header}>About me</h5>
                </div>
                <p className={styles.lead}>
                  I am all about making the web come to life. With a strong focus on React, I bring your ideas
                  to the screen with captivating user interfaces that leave a lasting impression. I&apos;m all
                  in for clean code, responsive design, and staying up-to-date with the latest web tech
                  trends.
                </p>
                <p className={styles.lead}>You can download my CV here</p>

                <button onClick={downloadCV} className={styles.download}>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
