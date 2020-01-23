<template>
  <form class="form">
    <h1>Добавить рецепт</h1>
    <div>
      <div class="input">
        <input type="text" placeholder="Название рецепта">
      </div>
      <div class="input">
        <input type="text" placeholder="Описание рецепта">
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit">Создать</button>
      <button class="btn secondary" type="button">Убрать форму</button>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #eee;
    margin-bottom: 1rem;
  }

  .form h1 {
    margin: 0;
    margin-bottom: 1rem;
  }

  .input {
    margin-bottom: 1rem;
  }

  .input input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 8px;
    width: 400px;
  }

  .buttons {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
</style>
