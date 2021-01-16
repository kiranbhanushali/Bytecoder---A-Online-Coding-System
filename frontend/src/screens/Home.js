import React, { Component } from "react";
import "./home.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <main role="main">


          <div class="jumbotron1">
            <div class="container">
              <h3>BYTE CODE</h3>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">All Problems &raquo;</a></p>
            </div>
          </div>
          <Carousel swipeable={false}
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
          itemClass="carousel-item-padding-40-px">
            <div>
              
                <h2>Array</h2>
                <div className="imsp">
                <img src="https://media-fastly.hackerearth.com/media/codemonk/codemonk-arrays-strings/images/e77429ac-9-4_1.png" alt="Checkpoint - 2"></img>
                </div>
                
                <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
            
            </div>
            <div>
            <h2>String</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/codemonk-sorting/images/c56712c0-9-2_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
            
            </div>
            <div> 
            <h2>Searching</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/searching-1/images/431f29ae-9-5_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
            </div>
            <div> 
            <h2>Stack & queues</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/stacks-queues-2/images/646d80f6-9-6_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
        
          </div>
          <div> 
            <h2>Number-Theory</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/number-theory-part-i-2/images/15ca10b4-9-9_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
        
          </div>
          <div> 
            <h2>Trees</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/trees/images/1ec0258a-9-8_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
        
          </div>
          <div> 
            <h2>Graph-Theory</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/graph-theory-part-i-1/images/6fc39412-9-7_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
        
          </div>
          <div> 
            <h2>Hashing</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/hashing-1/images/a9da97e8-b-Hashing_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
        
          </div>
          <div> 
            <h2>DSU</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/disjoint-set-union-union-find-1/images/ee858f54-b-Disjoint-Set-Union_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
        
          </div>
          <div> 
            <h2>Greedy</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/greedy-technique-1/images/4227441afa-Greedy-Technique_1.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
        
          </div>
          <div> 
            <h2>Dynamic-programming</h2>
            <div className="imsp">
            <img src="https://media-fastly.hackerearth.com/media/codemonk/dynamic-programming-part-i/images/8c325b3efa-Dynamic-Programming_2.png" alt="Checkpoint - 2"></img>
            </div>
            
            <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
        
          </div>
          <div> 
          <h2>Bit-Manipulation</h2>
          <div className="imsp">
          <img src="https://media-fastly.hackerearth.com/media/codemonk/bit-manipulation-1/images/206a7390fa-Bit-Manipulation_1.png" alt="Checkpoint - 2"></img>
          </div>
          
          <p><a class="btn btn-primary" href="#" role="button">View Problems &raquo;</a></p>
      
        </div>
        
          
          </Carousel>;

            <div class="container">

            <hr />

          </div>

        </main>

        <footer class="container">
          <p>&copy; Company BYTE-CODERS</p>
        </footer>
      </div>
    );
  }
}
export default Home;
