import React from "react";
import Developers from "../../components/Developers/Developers";
import TopBar from "../../components/topbar/TopBar";
import "./aboutus.scss";
import "./aboutus.css";
import logo from "../../assets/logo.png";
const AboutUs = () => {
  return (
    <div className="aboutus-mainn">
      <TopBar />

      <div id="about-main">
        {/* <div className="jumbotron">
           <div className="jumbotron-inner">
            <div className="top-box">
              <div className="content-box">
                <h1>About FindYourWorker</h1>
                <p>
                  APIMatic is a developer experience platform for web APIs.{" "}
                  <br /> Our mission is to make developers productive through
                  automatic code generation.
                </p>
              </div>
            </div>
          </div> 
           <div className="img-layer-container">
            <div className="team-image" id="team-image">
              <img src="https://apimatic.io/img/theme/aboutUs/images-1.png" />
            </div>

            <div className="circles-container">
              <div className="img-1">
                <img src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />
              </div>
              <div className="img-2">
                <img src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />
              </div>
            </div>
          </div> 
        </div> */}

        <div className="story-container">
          <div className="need-for-dx-container">
            <h3 className="text-center">Why findyourworker.lk ?
            </h3>
            <p>
              We identified your struggle of finding handymen for your
              unexpected needs in an urban area. From spending your weekends on
              repairing leaky pipes and wasting your time to fix the washing
              machine can surely be spent on something more valuable. This is
              where we enter into your life. Through our Colombo based online
              platform we provide professional workers to your doorstep to
              enhance your living condition. Our services include plumbing,
              painting, gardening, cleaning, repairing, maintenance and other
              services.
            </p>
            <div className="img-container"></div>
          </div>
          <div className="container-divider"></div>
          {/* <div className="our-tech-container">
            <h3 className="text-center">Our Technology</h3>
            <p>
              Our code generation engine enables API providers to generate SDKs
              for their APIs within minutes and at a fraction of the cost. We
              provide tools like our API editor and API transformer to further
              aid API providers in minimizing the time required to ship
              excellent quality SDKs to the developers using their APIs. Our
              code generation engine is also capable of generating succinct and
              error-free documentation for APIs and SDKs, both. The
              documentation for the SDKs includes dynamic screenshots detailing
              usage instructions tailored to the provider's specific API and
              also code snippets showing example usage. As the cherry on the
              cake, we provide beautifully designed DX portals to encapsulate
              this documentation.
            </p>
            <div className="img-container">
             
            </div>
          </div> */}
          <div className="container-divider"></div>
          {/* <div className="origin-story-container">
            <h3 className="text-center">Origin Story</h3>
            <p>
              While doing research work for their PhDs from the University of
              Auckland in 2014, our founders came across one of the API
              industry's pain points: SDKs. They realized that API providers who
              spent hundreds of thousands of dollars every year on improving
              developer experience, by providing SDKs and user-friendly
              documentation were able to reach a wider developer audience for
              their APIs compared to API providers who weren't able to do so.
            </p>
            <p>
              It was so clear that even though writing SDKs and documentation
              was a difficult and expensive task, it followed repeatable
              patterns which could be defined as logic blocks in a code
              generation engine. So, as a research project, they started working
              on a code generation engine which dynamically generated SDKs using
              API description as input.
            </p>
            <p>
              After a rigorous journey, this research project was selected as a
              candidate for commercialization by Return on Science (a NZ
              national research commercialization program focused on bringing
              new academic research to market) and the concept was transformed
              into a product i.e. APIMatic.
            </p>
          </div> */}
          <div className="container-divider"></div>
          <div className="today-container">
            <h3 className="text-center">What's more?</h3>
            <p>
              With the goal of contributing to the society by reducing
              unemployment we act as an intermediary while catering to your
              needs with the best fit. We ensure your safety by obtaining NIC
              and police reports from our workers since your safety is our
              priority. Our skilled workers will guarantee a quality service
              enhancing customer satisfaction to the fullest. Furthermore, we
              have added multiple payment options and Free online estimate
              features for your convenience.
            </p>

            {/* <ul>
              <li>Create and store definitions of their APIs</li>
              <li>Generate SDKs for their APIs for 10 platforms</li>
              <li>Keep these SDKs in sync with API updates</li>
              <li>
                Convert API descriptions into multiple formats (Swagger, API
                Blueprint, RAML etc.)
              </li>
              <li>Generate beautiful documentation for their APIs and SDKs</li>
              <li>Generate complete Developer Experience API Portals</li>
            </ul> */}
          </div>

          <div className="origin-story-container">
            {/* <h3 className="text-center">Origin Story</h3> */}
            <h4>
              With findyourworker.lk your weekends will no longer be wasted.
            </h4>
          </div>
        </div>
      </div>
      <footer>
        <div className="today-footerr">
          <div className="footer-left">
            <div>
              <img src={logo} className="footer-logo" />
            </div>
            <div className="footer-icons">
              <div>
                {" "}
                <a href="https://www.facebook.com/findyourworker/">
                  <i className="footer-icon fab fa-facebook-square"></i>
                </a>
                facebook
              </div>
              <div>
                <a href="https://www.instagram.com/invites/contact/?i=113zamdgn5tia&utm_content=l77c5rv">
                  <i className="footer-icon fab fa-instagram-square"></i>
                </a>
                instagram{" "}
              </div>
              <div>
                <a href="findyourworker.lk@gmail.com">
                  <i class="footer-icon fa-solid fa-envelope"></i>
                </a>{" "}
                findyourworker.lk@gmail.com
              </div>
              <div>
                <a>
                  {" "}
                  <i class="footer-icon fa-solid fa-phone"></i>
                </a>
                +94 77 253 3777
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div>
              {" "}
              Copyright <i class="fa-solid fa-copyright"></i> Quickhelp
            </div>
            <br />
            <div>
              <p>developed and designed by </p>
              <ul className="footer-list">
                <li>Nuwan Perera</li>
                <li>Thushalya</li>
                <li>Kalindu Gandara</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
