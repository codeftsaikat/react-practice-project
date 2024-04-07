import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="mr-11 text-black p-2 rounded-sm bg-amber-400 hover:bg-yellow-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
