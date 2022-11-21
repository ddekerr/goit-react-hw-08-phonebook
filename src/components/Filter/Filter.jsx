import { FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/actions';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};
