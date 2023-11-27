import './Ingredients.scss'
interface Ingredient {
    id: number;
    quantity: number;
    unit: string;
    name: string;
  }
  
  interface IngredientsProps {
    ingredients: Ingredient[];
  }

  const Ingredients = ({ingredients} : IngredientsProps) => {
    return (
    <div>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              <div className='qty'>{ingredient.quantity}  {ingredient.unit} </div> {ingredient.name}
            </li>
            
          ))}
        </ul>
    </div>
      );
}

export default Ingredients