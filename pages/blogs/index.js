import bhb from "/img/bbk.jpg";
import Image from "next/image";
import b1 from "/img/instElegant.jpg";
import b2 from "/img/menfas.jpg";
import b3 from "/img/WomensStyledOutfits.jpg";
import b4 from "/img/womanCollection.jpg";
import b5 from "/img/men-fashion.jpg";
import b6 from "/img/men-clothes-light.jpg";
import Link from "next/link";

const AllBlogs = () => {
  const blogs = [
    // {
    //   title: "Fashion and Ettiquette",
    //   image: b1,
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
    //   autor: "Jane Vixen",
    //   id: 1,
    // },
    // {
    //   title: "The gentleman guide II",
    //   image: b2,
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
    //   autor: "Miriam Snow",
    //   id: 2,
    // },
    {
      title: "Models and Confidence",
      image: b3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
      autor: "Henry Smith",
      id: 3,
    },
    {
      title: "Miss Glamorous",
      image: b4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
      autor: "Harold Jackson",
      id: 4,
    },
    {
      title: "Keeping up the grace",
      image: b5,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
      autor: "Sierra Rouge",
      id: 5,
    },
    {
      title: "The gentleman guide",
      image: b6,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
      autor: "Jack Frosy",
      id: 6,
    },
  ];
  return (
    <section id="blog-posts">
      <div className="herobox">
        <Image
          alt="image"
          className="hero-img"
          src={bhb}
          height="300px"
          layout="responsive"
        ></Image>
        <div className="text">
          <p>Black Swan</p>
          <h1>EXQUISITE </h1>
          <h1>
            LESSONS IN <span className="white-card">FASHION & ETTIQUETTE</span>
          </h1>
        </div>
      </div>
      <h1 className="heading"> BLOGS</h1>
      <div className="from-the-blog-container">
        {blogs.map((blog) => (
          <Link href={"/blogs/" + blog.id} key={blog.id} passHref>
            <div className="blog">
              <Image
                alt="image"
                src={blog.image}
                width="300px"
                height="300px"
              ></Image>
              <div className="bk">
                <h1 className="heading">{blog.title}</h1>
                <div className="clicks">
                  <p>November 17 2021 | {blog.autor}</p>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
