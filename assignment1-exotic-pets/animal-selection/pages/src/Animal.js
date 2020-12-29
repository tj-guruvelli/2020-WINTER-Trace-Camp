import Image from "next/image";
import Button from "./Button";

const Animal = (props) => {
  return (
    <div className="flex flex-row items-center p-8 m-10 rounded-md border-gray border-2 bg-black-500">
      <Image
        className="animate-pulse"
        height={100}
        width={100}
        src={`/animal-data/${props.img}`}
      ></Image>
      <h2 class="p-10 gap-10">Type: {props.type}</h2>
      <b>State: {props.state}</b>
      <div className="p-5 flex-grow">
        <h2>Price: {"\u0024"}{props.adoption_fee} </h2>
      </div>
      <Button>Buy</Button>
    </div>
  );
};

export default Animal;
