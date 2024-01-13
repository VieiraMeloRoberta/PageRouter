import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css"

import heroImg from "../../assets/images/hero.jpg"

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="text-white">
                Discover rare diagital art and collet{" "}
                <span>sell extraordinary</span>NFTs
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi minus autem adipisci ab ducimus sapiente temporibus
                molestias laboriosam obcaecati dolorum fugiat asperiores cum at
                similique excepturi, non dolore vel quia.
              </p>

              <div className=" hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btns d-flex align-items-center gap-2">
                  <i class="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className=" create__btns d-flex align-items-center gap-2">
                  <i class="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
           <div className="hero__img">
            <img src={heroImg} alt="" className="w-100" />
           </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
export default HeroSection;
