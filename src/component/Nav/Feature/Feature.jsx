import PropTypes from "prop-types";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2 pl-6">
        <IoMdCheckmarkCircleOutline className="text-green-300"></IoMdCheckmarkCircleOutline>

        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
