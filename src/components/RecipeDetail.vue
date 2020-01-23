<template>
  <div class="detail">
    <div class="recipe" v-if="recipe">
      <h2>{{ recipe.title }}</h2>
      <a href="#" @click.prevent="toggle">{{ visible ? 'Скрыть' : 'Показать' }}</a>
      <p v-if="visible">{{ recipe.description }}</p>
      <button class="btn remove" @click="$emit('remove', recipe.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
import {useToggle} from '../composition/toggle'
import {watch} from '@vue/composition-api'

export default {
  props: {
    recipe: Object
  },
  setup(props) {
    const {visible, toggle} = useToggle()

    watch(() => props.recipe, () => {
      visible.value = false
    })

    return {
      visible, toggle
    }
  }
}
</script>

<style>
  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .recipe p {
    font-size: .8rem;
    margin-bottom: .5rem;
  }

  .recipe a, .recipe h2 {
    margin-bottom: .5rem;
  }
</style>
