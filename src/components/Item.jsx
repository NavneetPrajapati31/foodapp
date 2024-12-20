import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div className={StyleSheet.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://api.spoonacular.com/recipes/${item.id}/ingredientWidget.png`}
            alt=""
          />
        </div>

        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
