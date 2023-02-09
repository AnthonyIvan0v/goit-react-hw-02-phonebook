import styles from './contactList.module.css';

export default function ContactsList({ items, removeContact }) {
  const contacts = items.map(({ id, name, number }) => {
    return (
      <li className={styles.listItem} key={id}>
        <p className={styles.name}>
          {name} : {number}
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={() => removeContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>{contacts}</ul>
    </div>
  );
}
