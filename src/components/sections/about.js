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

  const skills = ['Golang', 'Python', 'Java', 'REST APIs', 'Kafka', 'Kubernetes', 'TypeScript', 'DynamoDB', 'LLMs', 'Distributed Systems'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Vamsi, a software engineer with over 8 years of experience designing scalable
              distributed systems and microservices architectures. My work spans media streaming,
              financial technology, and most recently Generative AI.
            </p>

            <p>
              Currently, I&apos;m a Principal Member of Technical Staff at {' '}
              <a href="https://www.oracle.com/artificial-intelligence/">Oracle</a>, where I&apos;m part of the OCI
              GenAI Tools team. I build LLM-powered tools for Oracle Cloud Infrastructure, including a Code
              Interpreter for natural language-driven code execution and{' '}
              <a href="https://blogs.oracle.com/cloud-infrastructure/enterprise-nl2sql-with-semantic-enrichments">OCI NL2SQL</a>,
              an enterprise-ready system that uses semantic enrichment to resolve ambiguous business queries
              into accurate SQL across large data warehouses.
            </p>

            <p>
              Prior to Oracle, I spent over three years at {' '}
              <a href="https://wbd.com/">Warner Bros. Discovery</a> as a Software Engineer II, contributing to
              the Global Metadata Services for the {' '}
              <a href="https://max.com/">Max</a> and {' '}
              <a href="https://www.discoveryplus.com/">Discovery+</a> OTT platforms. I built a scalable Ad
              Partner service processing 2M+ daily requests across 70+ countries, engineered a media transcoding
              workflow that projected $2M in annual CDN savings, and implemented the Contextual Ad Segments
              feature supporting a $19.4M revenue initiative.
            </p>

            <p>
              Before that, I spent four years at {' '}
              <a href="https://www.jpmorganchase.com/">JPMorgan Chase</a> building large-scale data pipelines
              ingesting 16 billion daily trade records, financial chatbots serving 60 global sales and trading
              rooms, and RESTful reporting services for Transaction Cost Analysis.
            </p>

            <p>
              Academically, I hold a Master's degree in Computer Science with a minor in Data Science from {' '}
              <a href="https://www.ncsu.edu/">North Carolina State University</a>, Raleigh (2021-2022). During my master's program, I delved into Database Design and Development, Algorithms for Data-Driven Business Intelligence, and Parallel Systems, 
              aligning closely with my interests in Data Engineering, Machine Learning, and Software Development. Prior to this, I earned my Bachelor's degree in Computer Science from {' '}
              <a href="https://www.bits-pilani.ac.in/">BITS Pilani</a> (2013-2017).            
            </p>

            <p>
              Outside of my professional work, I have a passion for exploring the outdoors and staying active. I enjoy going on hikes, following Formula 1 racing, and traveling around the world to experience different cultures and landscapes. These hobbies not only keep me balanced but also inspire creativity in my professional endeavors.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/vamsi-tadikonda.jpg"
              height={1000}
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Vamsi Tadikonda"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
