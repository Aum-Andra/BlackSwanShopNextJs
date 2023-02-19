import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="card">
      <Image  alt="image" src={data.image} width="200px" height="300px"></Image>
      <div className="content">
        <div className="name">
          <h4>{data.name}</h4>
        </div>
        <div className="price">
          <p>Price : {data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
