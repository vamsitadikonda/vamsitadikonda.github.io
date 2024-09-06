import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Golang','Java', 'REST APIs', 'Kafka', 'Kubernetes','Python','Tableau', 'TypeScript', 'DynamoDB','Hadoop MapReduce'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I’m Vamsi, a dedicated computer science enthusiast with a profound interest in 
              Data Engineering and Software Engineering. My journey in the tech world is characterized 
              by continuous learning and thrilling professional experiences.
            </p>

            <p>
              Currently, I serve as a Software Engineer II at {' '}
              <a href="https://wbd.com/">Warner Bros Discovery</a> where I contribute to the Global Metadata Services for the {' '}
              <a href="https://max.com/">Max</a> and {' '}
              <a href="https://www.discoveryplus.com/">Discovery+</a> OTT platform. 
              My role is pivotal in ensuring a seamless streaming experience for millions of users. 
              Prior to this, I interned with the Partner Commerce team for HBO Max during the summer of 2022. 
              During my internship, I revamped their App Subscriptions Database to accommodate dynamic pricing 
              and efficient querying, and developed a command-line tool (CLI) to manage mobile subscriptions.
            </p>

            <p>
              Before joining Warner Bros. Discovery, I embarked on my professional journey at {' '}
              <a href="https://www.jpmorganchase.com/">JPMorgan Chase</a>. I began as a Software Engineer in 2017 and was promoted to Senior Software Engineer in 2021. 
              My responsibilities included building large data pipelines, developing informational chatbots, 
              and designing products for JPMC middle office teams and external clients. This role equipped me with 
              best practices in software design and implementation, encompassing requirement gathering, documentation, 
              infrastructure setup, coding, and testing.
            </p>

            <p>
              Academically, I hold a Master’s degree in Computer Science with a minor in Data Science from {' '}
              <a href="https://www.ncsu.edu/">North Carolina State University</a>, Raleigh (2021-2022). During my master’s program, I delved into Database Design and Development, Algorithms for Data-Driven Business Intelligence, and Parallel Systems, 
              aligning closely with my interests in Data Engineering, Machine Learning, and Software Development. Prior to this, I earned my Bachelor’s degree in Computer Science from {' '}
              <a href="https://www.bits-pilani.ac.in/">BITS Pilani</a> (2013-2017).            
            </p>

            <p>
              Outside of my professional work, I have a passion for exploring the outdoors and staying active. I enjoy going on hikes, following Formula 1 racing, and traveling around the world to experience different cultures and landscapes. These hobbies not only keep me balanced but also inspire creativity in my professional endeavors.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              height={1000}
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
