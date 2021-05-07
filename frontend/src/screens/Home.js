import React, { Component } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './home.css'
import './theme.css'

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
}
class Home extends Component {
    render() {
        const category = [
            {
                name: 'Array',
                id: 'array',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/codemonk-arrays-strings/images/e77429ac-9-4_1.png',
            },
            {
                name: 'String',
                id: 'string',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/codemonk-sorting/images/c56712c0-9-2_1.png',
            },
            {
                name: 'Searching',
                id: 'searching',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/searching-1/images/431f29ae-9-5_1.png',
            },
            {
                name: 'Stack & queues',
                id: 'stackqueue',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/stacks-queues-2/images/646d80f6-9-6_1.png',
            },
            {
                name: 'Number-Theory',
                id: 'numbertheory',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/number-theory-part-i-2/images/15ca10b4-9-9_1.png',
            },
            {
                name: 'Trees',
                id: 'tree',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/trees/images/1ec0258a-9-8_1.png',
            },
            {
                name: 'Graph-Theory',
                id: 'graph',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/graph-theory-part-i-1/images/6fc39412-9-7_1.png',
            },
            {
                name: 'Hashing',
                id: 'hashing',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/hashing-1/images/a9da97e8-b-Hashing_1.png',
            },
            {
                name: 'DSU',
                id: 'dsu',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/disjoint-set-union-union-find-1/images/ee858f54-b-Disjoint-Set-Union_1.png',
            },
            {
                name: 'Greedy',
                id: 'gredy',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/greedy-technique-1/images/4227441afa-Greedy-Technique_1.png',
            },
            {
                name: 'Dynamic-Programming',
                id: 'dp',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/dynamic-programming-part-i/images/8c325b3efa-Dynamic-Programming_2.png',
            },
            {
                name: 'Bit-Manipulation',
                id: 'bitwise',
                img:
                    'https://media-fastly.hackerearth.com/media/codemonk/bit-manipulation-1/images/206a7390fa-Bit-Manipulation_1.png',
            },
        ]

        return (
            <div className="full-page">
                <div className="mycontainer">
                    <div style={{ textAlign: 'center' }}>
                        <main role="main">
                            <div className="jumbotron1">
                                <div className="container">
                                    <h3>BYTE CODE</h3>
                                    <p>
                                        This is the platform which useful for the coders who want some interview preparation content.
                                </p>
                                    <p>
                                        <a
                                            className="btn btn-primary btn-lg"
                                            href="/problems"
                                            role="button"
                                        >
                                            All Problems &raquo;
                                    </a>
                                    </p>
                                </div>
                            </div>
                            <div className="corousel">
                                <Carousel
                                    swipeable={false}
                                    draggable={false}
                                    showDots={true}
                                    responsive={responsive}
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={true}
                                    autoPlay={
                                        this.props.deviceType !== 'mobile'
                                            ? true
                                            : false
                                    }
                                    autoPlaySpeed={10000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerclassName="carousel-container"
                                    removeArrowOnDeviceType={['tablet', 'mobile']}
                                    deviceType={this.props.deviceType}
                                    dotListclassName="custom-dot-list-style"
                                    itemclassName="carousel-item-padding-40-px"
                                >
                                    {category.map((cat) => {
                                        return (
                                            <div key={cat.id} className="card">
                                                <h3> {cat.name} </h3>
                                                <div className="imsp">
                                                    <img
                                                        src={cat.img}
                                                        alt={cat.name}
                                                    ></img>
                                                </div>

                                                <p>
                                                    <a
                                                        className="btn btn-outline-light"
                                                        href={`/problems?cat=${cat.id}`}
                                                        role="button"
                                                    >
                                                        View Problems &raquo;
                                                </a>
                                                </p>
                                            </div>
                                        )
                                    })}
                                    <div></div>
                                </Carousel>
                            </div>
                            <div className="container">
                                <hr />
                            </div>
                        </main>

                        <footer className="container">
                            <p>&copy; Company BYTE-CODERS</p>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
