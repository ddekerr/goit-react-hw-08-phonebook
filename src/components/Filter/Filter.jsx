import { FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterInput type="text" name="filter" value={value} onChange={onChange} />
  );
};
