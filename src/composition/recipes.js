import {ref} from '@vue/composition-api'

export function useRecipes() {
  const recipes = ref([])
  const current = ref(null)

  const addRecipe = recipe => {
    recipes.value.push(recipe)
  }

  const selectRecipe = id => {
    current.value = recipes.value.find(r => r.id === id)
  }

  const removeRecipe = id => {
    current.value = null
    recipes.value = recipes.value.filter(r => r.id !== id)
  }

  return {
    recipes, current, addRecipe, selectRecipe, removeRecipe
  }
}
