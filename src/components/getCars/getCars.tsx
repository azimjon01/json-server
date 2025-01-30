import axios from "axios";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { CarPost, SetState } from "../../type";
import { Link } from "react-router-dom";

interface GetCarsProps {
  setData: SetState<CarPost[]>;
  data: CarPost[];
}

const GetCars = ({ setData, data }: GetCarsProps) => {
  // const [deleteMethod, setDeleteMethod] = useState("");

  useEffect(() => {
    axios
      .get<CarPost[]>("http://localhost:3000/cars")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [setData]);

  const handleDelete = async (id?: number) => {
    try {
      axios.delete(`http://localhost:3000/cars/${id}`).then(() => {
        axios
          .get<CarPost[]>("http://localhost:3000/cars")
          .then((res) => setData(res.data))
          .catch((err) => console.error("Error fetching data:", err));
      });
      // await axios.delete(`http://localhost:3000/cars/`+id);
      // const res = await axios.get<CarPost[]>(`http://localhost:3000/cars/`);
      // setData(res.data);
    } catch (err) {
      console.error("Xatolik yuz berdi:", err);
    }
  };

  return (
    <div>
      <table className="flex justify-center items-center flex-col min-h-[100vh]">
        <thead>
          <tr>
            <th>Marka</th>
            <th>Year</th>
            <th>Color</th>
            <th>Shina</th>
            <th>Qo'shimcha</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.marka}</td>
                <td>{item.year}</td>
                <td>{item.color}</td>
                <td>{item.shina}</td>
                <td>
                  <button className="flex gap-5">
                    <FiTrash2
                      onClick={() => handleDelete(item.id)}
                      className="text-[red] text-[30px]"
                    />
                    <Link to={`/update/${item.id}`}>
                      <FaEdit className="text-[#2bbe2b] text-[30px]" />
                    </Link>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                Ma'lumot yo‘q
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetCars;
