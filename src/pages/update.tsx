import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    id: id,
    marka: "",
    year: "",
    color: "",
    shina: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/cars/${id}`).then((res) => {
      setValue((prev) => ({
        ...prev,
        marka: res.data.marka,
        year: res.data.year,
        color: res.data.color,
        shina: res.data.shina,
      }));
    });
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) {
      console.error("ID mavjud emas!");
    }

    axios
      .put(`http://localhost:3000/cars/${id}`, value)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  };

  return (
    <div>
      <div className="w-[80vw] m-auto relative mt-10">
        <form onSubmit={handleUpdate} className="flex flex-col gap-2">
          <div>
            <label className="text-[20px]" htmlFor="">
              Marka
            </label>
            <br />
            <input
              value={value.marka}
              onChange={(e) => setValue({ ...value, marka: e.target.value })}
              type="text"
              placeholder="marka..."
              className="border-[none] w-[100%] h-[40px] pl-[10px] text-[black] outline-0 rounded-[8px]"
            />
            <br />
          </div>
          <div>
            <label className="text-[20px]" htmlFor="">
              Year
            </label>
            <br />
            <input
              value={value.year}
              onChange={(e) => setValue({ ...value, year: e.target.value })}
              type="number"
              placeholder="Year..."
              className="border-[none] w-[100%] h-[40px] pl-[10px] text-[black] outline-0 rounded-[8px]"
            />
            <br />
          </div>
          <div>
            <label className="text-[20px]" htmlFor="">
              Color
            </label>
            <br />
            <input
              value={value.color}
              onChange={(e) => setValue({ ...value, color: e.target.value })}
              type="text"
              placeholder="color..."
              className="border-[none] w-[100%] h-[40px] pl-[10px] text-[black] outline-0 rounded-[8px]"
            />
            <br />
          </div>
          <div>
            <label className="text-[20px]" htmlFor="">
              Shina
            </label>
            <br />
            <input
              value={value.shina}
              onChange={(e) => setValue({ ...value, shina: e.target.value })}
              type="number"
              placeholder="shina..."
              className="border-[none] w-[100%] h-[40px] pl-[10px] text-[black] outline-0 rounded-[8px]"
            />
            <br />
          </div>
          <div className="mt-5">
            <button className="bg-[#31af31] absolute left-[50%] translate-x-[-50%] border-[0] w-[150px] h-[40px] rounded-[8px]">
              Yangilash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Update;
