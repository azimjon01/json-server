import axios from "axios";
import React, { useState } from "react";
import { CarPost, SetState } from "../../type";

const PostCars = ({ setData }: { setData: SetState<CarPost[]> }) => {
  const [value, setValue] = useState<CarPost>({
    marka: "",
    year: "",
    color: "",
    shina: "",
  });

  const [validateMarka, setValidateMarka] = useState(false);
  const [validateYear, setValidateYear] = useState(false);
  const [validateColor, setValidateColor] = useState(false);
  const [validateShina, setValidateShina] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.marka === "") {
      setValidateMarka(true);
    } else if (value.year === "") {
      setValidateYear(true);
    } else if (value.color === "") {
      setValidateColor(true);
    } else if (value.shina === "") {
      setValidateShina(true);
    } else {
      axios
        .post<{ success: boolean }>("http://localhost:3000/cars", {
          marka: value.marka,
          year: value.year,
          color: value.color,
          shina: value.shina,
        })
        .then(() => {
          setValue({
            marka: "",
            year: "",
            color: "",
            shina: "",
          });
          axios.get("http://localhost:3000/cars").then((res) => {
            setData(res.data);
          });
        })
        .catch((error) => {
          console.error("Xatolik yuz berdi!", error);
        });
    }
  };

  return (
    <div>
      <div className="w-[80vw] m-auto relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
            {validateMarka && <p className="text-[red]">Maydon to'lmagan!</p>}
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
            {validateYear && <p className="text-[red]">Maydon to'lmagan!</p>}
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
            {validateColor && <p className="text-[red]">Maydon to'lmagan!</p>}
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
            {validateShina && <p className="text-[red]">Maydon to'lmagan!</p>}
          </div>
          <div className="mt-5">
            <button className="bg-[#31af31] absolute left-[50%] translate-x-[-50%] border-[0] w-[150px] h-[40px] rounded-[8px]">
              Qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCars;
