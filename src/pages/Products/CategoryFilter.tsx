interface Props {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) => {
  return (
    <div className="flex justify-center mb-12 flex-wrap gap-4">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-6 py-2 rounded-full border font-medium transition duration-200 ${
          selectedCategory === null
            ? "bg-green-600 text-white"
            : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full border font-medium transition duration-200 ${
            selectedCategory === category
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
