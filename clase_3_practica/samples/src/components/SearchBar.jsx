import { useRef, useEffect } from "react";

const SearchBar = ({ search, setSearch }) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <input
      type="text"
      ref={searchRef}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
};

export default SearchBar;