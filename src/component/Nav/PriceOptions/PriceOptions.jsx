import PriceOption from "../Link/PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: 1,
      name: "Basic",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Access to locker room",
        "Basic gym equipment",
        "Free Wi-Fi",
        "Locker rental available",
      ],
      price: "$29.99/month",
    },
    {
      id: 2,
      name: "Standard",
      features: [
        "Access to all Basic features",
        "Access to group fitness classes",
        "Access to sauna",
        "Extended gym equipment",
        "Access to nutrition counseling",
        "Discounts on gym merchandise",
      ],
      price: "$49.99/month",
    },
    {
      id: 3,
      name: "Premium",
      features: [
        "Access to all Standard features",
        "Access to personal training sessions",
        "Access to swimming pool",
        "Access to sports facilities",
        "Towel service",
        "Complimentary beverages",
      ],
      price: "$79.99/month",
    },
  ];

  return (
    <div className="m-10">
      <h2 className="text-5xl">Best Prices In The Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {PriceOptions.map((Option) => (
          <PriceOption key={Option.id} Option={Option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
