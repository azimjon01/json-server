import { useState } from "react";
import PostCars from "../components/postCars/postCars";
import GetCars from "../components/getCars/getCars";
import { CarPost } from "../type";

const Home = () => {
  const [data, setData] = useState<CarPost[]>([]);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center items-center text-[30px]">
        <h1>CRUD dastur</h1>
      </div>
      <div className="mb-10">
        <PostCars setData={setData} />
      </div>
      <div className="mb-10">
        <GetCars setData={setData} data={data} />
      </div>
    </div>
  );
};

export default Home;
