import { useDispatch, useSelector } from "react-redux";

import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={css.searchBox}>
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
