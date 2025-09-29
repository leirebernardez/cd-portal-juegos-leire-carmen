<template>
  <div class="portal">
    <!-- Header -->
    <header class="header">
      <h1>GAME PORTAL</h1>
      <div class="filters">
        <input type="text" placeholder="Search games" v-model="search" />
        <select v-model="sort">
          <option value="newest">Sort by: Newest</option>
          <option value="oldest">Sort by: Oldest</option>
        </select>
        <button class="filter-btn">FILTER</button>
      </div>
    </header>

    <!-- Layout -->
    <div class="layout">
      <!-- Game list -->
      <section class="games">
        <div
          v-for="(game, index) in filteredGames"
          :key="index"
          class="game-card"
        >
          <img :src="game.image" alt="cover" />
          <div class="game-info">
            <h3>{{ game.name }}</h3>
            <p>{{ game.description }}</p>
            <span class="year">{{ game.year }}</span>
          </div>
        </div>
      </section>

      <!-- Sidebar with Hangman and Keywords -->
      <aside class="sidebar">
        <section class="hangman-card">
          <h2>Hangman</h2>
          <Hangman />
        </section>

        <section class="keywords-card">
          <h2>Keywords</h2>
          <div class="keywords">
            <span v-for="(kw, index) in keywords" :key="index" class="tag">
              {{ kw }}
            </span>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
import Hangman from "./components/Hangman.vue";

export default {
  components: { Hangman },
  data() {
    return {
      search: "",
      sort: "newest",
      games: [
        {
          name: "Marvel’s Spider-Man 2",
          description:
            "Accompany Peter Parker and Miles Morales in a new open world adventure",
          year: 2023,
          image: "https://via.placeholder.com/80x100.png?text=Spiderman"
        },
        {
          name: "EA Sports FC (FIFA)",
          description:
            "Soccer simulation game with competitive and club modes",
          year: 2023,
          image: "https://via.placeholder.com/80x100.png?text=FIFA"
        },
        {
          name: "LEGO Star Wars: The Skywalker Saga",
          description: "Relive all 9 films of the LEGO series in this adventure",
          year: 2022,
          image: "https://via.placeholder.com/80x100.png?text=LEGO"
        },
        {
          name: "Animal Crossing: New Horizons",
          description:
            "Create your own island in this simulation with anthropomorphic animals",
          year: 2020,
          image: "https://via.placeholder.com/80x100.png?text=ACNH"
        }
      ],
      keywords: ["open-world", "soccer", "adventure", "action", "simulation"]
    };
  },
  computed: {
    filteredGames() {
      let list = this.games.filter((g) =>
        g.name.toLowerCase().includes(this.search.toLowerCase())
      );
      if (this.sort === "newest") {
        return list.sort((a, b) => b.year - a.year);
      } else {
        return list.sort((a, b) => a.year - b.year);
      }
    }
  }
};
</script>

<style scoped>
/* General */
.portal {
  background: #0f172a;
  color: #e2e8f0;
  font-family: "Poppins", "Segoe UI", sans-serif;
  min-height: 100vh;
  display: flex;          /* Para que el contenido pueda expandirse */
  flex-direction: column; 
  width: 100vw;           /* Ocupa todo el ancho de la pantalla */
}


/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 28px;
  font-weight: bold;
}

.filters {
  display: flex;
  gap: 10px;
}

.filters input,
.filters select {
  background: #1e293b;
  border: 1px solid #334155;
  color: white;
  padding: 8px;
  border-radius: 6px;
}

.filter-btn {
  background: #10b981; /* verde */
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

/* Layout */
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr; /* izquierda y derecha */
  gap: 20px;

  width: 100vw;
  max-width: 100%;  /* límite de ancho */
  overflow-x:hidden;
  margin: 0 auto;     /* centra horizontalmente */
  padding: 20px;
  box-sizing: border-box;
}

/* Games list */
.games {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.game-card {
  display: flex;
  gap: 10px;
  background: #1e293b;
  padding: 10px;
  border-radius: 8px;
}

.game-card img {
  width: 80px;
  height: 100px;
  border-radius: 6px;
}

.game-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.game-info p {
  margin: 5px 0;
  font-size: 14px;
  color: #cbd5e1;
}

.year {
  font-size: 12px;
  color: #94a3b8;
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hangman-card,
.keywords-card {
  background: #1e293b;
  border-radius: 8px;
  padding: 15px;
}

.keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #10b981;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  color: white;
  font-weight: bold;
}

</style>
