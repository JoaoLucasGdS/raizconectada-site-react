import ExpandableRecipesList from "../components/ExpandableRecipesList";

import mockRecipes from "../data/mockRecipes";

function RecipesPage() {

    const initialItems =  mockRecipes;

    return(
        <ExpandableRecipesList initialItems={initialItems} />
    )
}

export default RecipesPage;