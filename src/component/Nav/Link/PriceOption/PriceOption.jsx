import PropTypes from "prop-types";
import Feature from "../../Feature/Feature";
const PriceOption = ({ Option }) => {
  const { name, price, features } = Option;
  return (
    <div className="bg-blue-500 text-white rounded-lg p-5">
      <div className="text-center my-8">
        <h2>
          {/* <span className="text-7xl">{features}</span> */}
          <span className="text-4xl">{price}</span>
        </h2>
        <h4>
          <span className="text-6xl text-center my-9">{name}</span>
        </h4>
      </div>
      {features.map((feature, index) => (
        <Feature key={index} feature={feature}></Feature>
      ))}
      <button className="btn btn-accent mt-12 md:ml-36 ml-4">Buy Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
