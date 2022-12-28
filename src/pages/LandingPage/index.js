import React from "react";
import { NavBar } from "components/NavBar";
import { Footer } from "./components/Footer";
import { LandingLayout } from "layouts/LandingLayout";
import styled from "@emotion/styled";
import { Button } from "components/Button";
import { typography } from "assets/typography";
import { colors } from "assets/colors";
import LandingImg from "assets/images/landing-image.png";
import PurposeImg from "assets/images/purpose-image.png";
import { Link } from "react-router-dom";
const Presentation = styled.section`
  padding: 2rem 11.625rem 67px 11.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.darkGray};
  background-color: ${colors.background};
  gap: 2rem;
  & h2 {
    width: 504px;
    ${typography.regular.headline2}
    & span {
      color: ${colors.pink};
    }
  }
  & button {
    width: 16.58rem;
  }
  & p {
    width: 720px;
    ${typography.regular.headline5}
    text-align:center;
  }
`;

const Purpose = styled.section`
  display: flex;
`;
const PurposeContent = styled.div`
  padding: 4rem 7.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
  width: 880px;
  background-color: ${colors.darkPink};
  & h3 {
    ${typography.regular.headline3}
  }
  & p {
    ${typography.regular.headline5}
  }
`;
const PurposeImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  & img {
    width: 335px;
    height: 242px;
  }
`;

const Team = styled.section`
  background-color: ${colors.background};
  padding: 4rem 12rem;
  height: 486px;
`;

export const LandingPage = () => {
  return (
    <LandingLayout>
      <NavBar />
      <main>
        <Presentation>
          <h2>
            The place where you get <span>that</span> job
          </h2>
          <p>
            With our Machine Learning algorithm you will get that job in no
            time. We promise you! Just give us the money and we will take care
            of it.
          </p>
          <Link to="/signup">
            <Button size="Large">Create an Account Now</Button>
          </Link>
          <img src={LandingImg} alt="" />
        </Presentation>
        <Purpose>
          <PurposeContent>
            <h3>Find your next job</h3>
            <p>
              Our Machine learning algorithm is so good that it’s even illegal
              in some countries. Join us to use our barelly legal algorithm that
              is actually a group of interns that work on our basement.
              <br />
              <br />
              We have a job for you, no matter your background or previous
              experience. Is sending random memes through chat your only skill?
              That’s ok, we got you, our Rock Star Meme Curator role is here for
              you.
            </p>
          </PurposeContent>
          <PurposeImageWrapper>
            <img src={PurposeImg} alt="" />
          </PurposeImageWrapper>
        </Purpose>
        <Team>
          <h3>Meet the team</h3>
        </Team>
      </main>
      <Footer />
    </LandingLayout>
  );
};
