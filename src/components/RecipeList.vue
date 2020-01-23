<template>
  <div class="list">
    <div>
      <div class="card">
        <h2 class="card-title">Название рецепта</h2>
      </div>
    </div>

    <p class="center">Нет рецептов. Добавьте первый</p>
  </div>
</template>

<script>
export default {

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
