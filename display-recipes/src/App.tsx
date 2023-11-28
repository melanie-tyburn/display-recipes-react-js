import recipe from './data/recipe.ts'
import './App.css'
import Header from './Header'
import Ingredients from './Ingredients'
import Instructions from './Instructions'

const App = () => {

  return (
    <>
      <Header
        {...recipe}
      />
       <Ingredients ingredients={recipe.ingredients} />
       <Instructions instructions={recipe.instructions} />
    </>
  )
}

export default App
