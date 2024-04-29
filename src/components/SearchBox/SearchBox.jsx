import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    dispatch(changeFilter(filterValue));
  };

  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        placeholder="Enter name..."
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
