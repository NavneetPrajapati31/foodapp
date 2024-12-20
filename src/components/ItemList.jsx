import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div key={food.id}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
