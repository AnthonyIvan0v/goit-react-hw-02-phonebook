import styles from './filter.module.css';

const Filter = ({ handleChange }) => {
  return (
    <div>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </div>
  );
};
export default Filter;
