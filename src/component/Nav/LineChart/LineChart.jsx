import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentData = [
    {
      id: 1,
      name: "Alice",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 82,
    },
    { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 72, chemistryMarks: 85 },
    {
      id: 3,
      name: "Charlie",
      mathMarks: 90,
      physicsMarks: 85,
      chemistryMarks: 88,
    },
    {
      id: 4,
      name: "David",
      mathMarks: 65,
      physicsMarks: 68,
      chemistryMarks: 72,
    },
    { id: 5, name: "Eva", mathMarks: 70, physicsMarks: 75, chemistryMarks: 78 },
    {
      id: 6,
      name: "Frank",
      mathMarks: 88,
      physicsMarks: 82,
      chemistryMarks: 90,
    },
    {
      id: 7,
      name: "Grace",
      mathMarks: 72,
      physicsMarks: 68,
      chemistryMarks: 75,
    },
    {
      id: 8,
      name: "Hannah",
      mathMarks: 80,
      physicsMarks: 78,
      chemistryMarks: 82,
    },
    {
      id: 9,
      name: "Isaac",
      mathMarks: 83,
      physicsMarks: 80,
      chemistryMarks: 85,
    },
    {
      id: 10,
      name: "Jasmine",
      mathMarks: 75,
      physicsMarks: 72,
      chemistryMarks: 78,
    },
  ];

  return (
    <div className="">
      <LChart width={500} height={400} data={studentData}>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Line dataKey={"chemistryMarks"} stroke="white"></Line>
        <Line dataKey={"physicsMarks"} stroke="black"></Line>
        <Line dataKey={"mathMarks"} stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
