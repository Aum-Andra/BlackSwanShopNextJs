import { useRouter } from "next/router";
import Image from "next/image";
import b3 from "/img/WomensStyledOutfits.jpg";
import b4 from "/img/womanCollection.jpg";
import b5 from "/img/men-fashion.jpg";
import b6 from "/img/men-clothes-light.jpg";
import authF from "/img/elegantLady.jpg";
import authM from "/img/men-fashion.jpg";
const Blog = () => {
  const router = useRouter();
  const blogId = router.query.id;

  const blogs = [
    {
      title: "Models and Confidence",
      image: b3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
      autor: "Henry Smith",
      id: 3,
      imageA: authM,
    },
    {
      title: "Miss Glamorous",
      image: b4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
      autor: "Harold Jackson",
      id: 4,
      imageA: authM,
    },
    {
      title: "Keeping up the grace",
      image: b5,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
      autor: "Sierra Rouge",
      id: 5,
      imageA: authF,
    },
    {
      title: "The gentleman guide",
      image: b6,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores voluptatem! Rerum, exercitationem iure, architecto, quaerat dolorem quidem unde minus enim iusto incidunt illum iste quibusdam. Quis, voluptatum ad? Rem ipsam reprehenderit quo nesciunt? Labore fuga, cum aliquid voluptatum at repudiandae libero? Quia quod quaerat iusto iste officiis tenetur et debitis omnis ex nobis iure ut aspernatur vitae, est labore nihil totam animi voluptatem alias! Ad sed accusantium consequuntur praesentium dolorem optio enim incidunt iste voluptatem et veritatis, adipisci minus mollitia laboriosam neque provident magni eius inventore? Sint rerum quos corporis, a culpa delectus doloremque harum ullam quia veritatis minus odio, dolor eos, totam doloribus vero enim tempora modi minima mollitia consequatur soluta eveniet reiciendis accusantium? Aliquam veritatis temporibus, ad itaque ducimus praesentium eligendi sequi dolores suscipit totam quia vel placeat, nesciunt sed natus quas consectetur quibusdam possimus sint? Culpa omnis neque, voluptate inventore, debitis rerum odit quam odio atque ad quidem, suscipit harum voluptatum temporibus dolores incidunt dicta libero? Iusto enim ex unde sequi dicta numquam consequuntur quae nam assumenda adipisci, dolor labore, deleniti voluptatibus, magnam repellendus molestias eveniet maxime excepturi fugit delectus ad necessitatibus blanditiis facere libero. Velit, ad tenetur delectus impedit maxime ab odit a sunt.",
      autor: "Jack Frosy",
      id: 6,
      imageA: authM,
    },
  ];

  const thisBlog = blogs.find((blog) => blog.id == blogId);
  console.log(thisBlog);
  return (
    <div>
      <div className="header">
        <h2>{thisBlog?.title}</h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <small style={{ fontSize: "12px" }}>By {thisBlog?.autor}</small>
          <small style={{ fontSize: "12px" }}>
            Posted on 12 September 2022 at 13:46
          </small>
        </div>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card-blog">
            {thisBlog?.image && (
              <div>
                <Image
                  src={thisBlog?.image}
                  alt="img"
                  objectFit="cover"
                  height="1000px"
                />
              </div>
            )}
            <p>{thisBlog?.body}</p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card-blog">
            <h2>About the author</h2>
            {thisBlog?.image && (
              <div>
                <Image
                  src={thisBlog?.imageA}
                  alt="img"
                  // objectFit="contain"
                  objectPosition="fill"
                  height="400px"
                  width="300px"
                />
              </div>
            )}
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className="card-blog">
            <h3>Popular Posts</h3>
            <div>
              <Image src={b5} alt="img" objectFit="cover" height="100px" />
            </div>
            <br />
            <div>
              <Image src={b3} alt="img" objectFit="cover" height="800px" />
            </div>
            <br />
            <div>
              <Image src={b4} alt="img" objectFit="cover" height="800px" />
            </div>
          </div>
          <div className="card-blog">
            <h3>Follow the author</h3>
            <p>Follow the author for more of their blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
