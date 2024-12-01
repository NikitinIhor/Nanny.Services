import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import sprite from "../../images/sprite.svg";
import { changeFilter } from "../../redux/filter/filterSlice";
import css from "./Filter.module.css";

interface FilterItem {
  id: number;
  name: string;
  checked: boolean;
}

interface FilterProps {}

const filterList: FilterItem[] = [
  { id: 1, name: "A to Z", checked: true },
  { id: 2, name: "Z to A", checked: false },
  { id: 3, name: "Less than 10$", checked: false },
  { id: 4, name: "Greater than 10$", checked: false },
  { id: 5, name: "Popular", checked: false },
  { id: 6, name: "Not popular", checked: false },
  { id: 7, name: "Show all", checked: false },
];

const Filter: React.FC<FilterProps> = () => {
  const dispatch = useDispatch();
  const [filter, setfilter] = useState(filterList);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleFilter = useCallback(
    (id: number) => {
      const updateFilter = filter.map((el) =>
        el.id === id ? { ...el, checked: true } : { ...el, checked: false }
      );

      setfilter(updateFilter);

      const selectedFilter = updateFilter.find((el) => el.id === id);
      if (selectedFilter?.name) {
        dispatch(changeFilter({ sortBy: selectedFilter.name }));
      }

      setShow(false);
    },
    [filter, dispatch]
  );

  return (
    <div className={css.container}>
      <p className={css.title}>Filters</p>
      <div className={css.filter_wrapper}>
        <div className={css.filter}>
          <span className={css.filter_name}>
            {filter.find((el) => el.checked)?.name}
          </span>
          <button className={css.arrow} onClick={handleShow} type="button">
            <svg className={css.open} width={50} height={50}>
              <use href={`${sprite}#icon-filter_open`}></use>
            </svg>
          </button>
        </div>
      </div>
      <ul className={`${css.list} ${show ? css.show : ""}`}>
        {filter.map((el) => (
          <li key={el.id} className={css.item}>
            <button
              className={el.checked ? css.selected : ""}
              onClick={() => handleFilter(el.id)}
            >
              {el.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
