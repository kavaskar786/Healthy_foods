interface Feature {
  title: string;
  description: string;
  icon: string;
}

const FeatureItem = ({ feature }: { feature: Feature }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-md">
    <div className="text-green-600 text-4xl mb-4">
      <i className={feature.icon}></i>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {feature.title}
    </h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
);

export default FeatureItem;
