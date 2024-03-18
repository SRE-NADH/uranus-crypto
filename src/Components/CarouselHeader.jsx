import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
const array = [
  {
    text: "Everyone Loves to Pump Uranus more then they like when Uranus Dumps",
    img: "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fbf2f4077-f535-4195-9efb-52756a98070f%2FUntitled.png?table=block&id=89bfc120-2c14-43d7-9470-835afc89abb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2",
  },
  {
    text: "The liquidity injections just keep coming into Uranus",
    img: "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8b5aca2f-a69d-45ae-b403-a1a7db496f98%2FUntitled.png?table=block&id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2",
  },

  {
    text: "Don’t pass gas (it’s gonna be giant)",
    img: "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F4d6ff0c5-fb06-41e2-91ea-611a6b227c8f%2FUntitled.png?table=block&id=a49515d9-58bb-4c79-833d-f50cddb5d455&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2",
  },
  {
    text: "Hold onto Uranus!",
    img: "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fb2acb8fa-6443-46ee-86a2-273a39052de0%2FUntitled.png?table=block&id=bd3796d2-fdcc-4ac9-a332-df1afcae5f67&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2",
  },
];

const CarouselHeader = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 424 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 424, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={1000}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      // centerMode={true}
      // dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      sliderClass="react-multi-carousel-track"
      autoPlay={true}
      autoPlaySpeed={3000}
    >
      {array.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.img} />
          <p>{item.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselHeader;