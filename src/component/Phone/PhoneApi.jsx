import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Audio } from "react-loader-spinner";

const PhoneApi = () => {
  const [phones, setPhones] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    //     fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //       .then((res) => res.json())
    //       .then((data) => setPhones(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phoneWithFakeData);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {Loading && <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />}
      <h1>phones:{phones.length}</h1>

      <BarChart width={1150} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
      </BarChart>
    </div>
  );
};

export default PhoneApi;
