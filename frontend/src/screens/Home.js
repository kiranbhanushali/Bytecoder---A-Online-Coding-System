import React, { Component } from "react";
import "./home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class Home extends Component {
  render() {
    const category = ["Array", "String", "Searching", "Stack & queues", "Number-Theory", "Trees", "Graph-Theory", "Hashing", "DSU", "Greedy", "Dynamic-Programming", "Bit-Manipulation"];

    return (
      <div className="full">
        <div style={{ textAlign: "center" }}>
          <main role="main">
            <div class="jumbotron1">
              <div class="container">
                <h3>BYTE CODE</h3>
                <p>
                  This is a template for a simple marketing or informational
                  website. It includes a large callout called a jumbotron and
                  three supporting pieces of content. Use it as a starting point
                  to create something more unique.
              </p>
                <p>
                  <a class="btn btn-primary btn-lg" href="#" role="button">
                    All Problems &raquo;
                </a>
                </p>
              </div>
            </div>
            <div class="corousel">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {
                  category.map(
                    (cat) => {

                      return (
                        <div className="card">
                          <h3> {cat} </h3>
                          <div className="imsp">
                            <img
                              src="https://media-fastly.hackerearth.com/media/codemonk/codemonk-arrays-strings/images/e77429ac-9-4_1.png"
                              alt="Checkpoint - 2"
                            ></img>
                          </div>

                          <p>
                            <a class="btn btn-outline-light" href="#" role="button">
                              View Problems &raquo;
                              </a>
                          </p>

                        </div>
                      )
                    })
                }
                <div>

                </div>
              </Carousel>
            </div>
            <div class="container">
              <hr />
            </div>
          </main>

          <footer class="container">
            <p>&copy; Company BYTE-CODERS</p>
          </footer>
        </div>
      </div>
    );
  }
}
export default Home;
