<template>
  <div class="list" :class="{empty: recipes.length === 0}">
    <div v-if="recipes.length">
      <div
        class="card"
        v-for="recipe of recipes"
        @click="$emit('select', recipe.id)"
      >
        <h2 class="card-title">{{ recipe.title }}</h2>
      </div>
    </div>

    <p v-else class="center">Нет рецептов. Добавьте первый</p>
  </div>
</template>

<script>
export default {
  props: {
    recipes: {
      type: Array
    }
  }
}
</script>

<style>
  .card {
    border-bottom: 1px solid #eee;
    padding: 1rem;
    transition: 300ms all ease;
    cursor: pointer;
    background: #fff;
  }

  .empty {
    padding: 1rem;
    background: #fff!important;
  }

  .card-title {
    padding: 1rem;
    text-align: center;
  }

  .card:hover {
    background: #eee;
  }

  .list {
    background: #fffeee;
  }
</style>
