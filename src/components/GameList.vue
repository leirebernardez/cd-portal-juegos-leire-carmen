<template>
  <div>
    <h2>Lista de Juegos</h2>
    <ul>
      <li v-for="game in games" :key="game.id">
        {{ game.name }} ({{ game.year }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GameList",
  data() {
    return {
      games: [
        { id: 1, name: "Tetris", year: 1984 },
        { id: 2, name: "Super Mario Bros", year: 1985 },
        { id: 3, name: "The Legend of Zelda", year: 1986 },
      ],
    };
  },
};
</script>
