import React from 'react'; // Even if you aren't using React directly, import it for JSX

// Your component definition here
const SearchInput: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
    />
  );
};

export default SearchInput;