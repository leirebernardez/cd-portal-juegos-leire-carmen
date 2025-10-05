<template>
  <div class="layout">
    <!-- Cabecera -->
    <header class="header">
      <router-link to="/" class="title-link">
        <h1>GAME PORTAL</h1>
      </router-link>

      <div class="filters">
        <input
          type="text"
          placeholder="Search games"
          v-model="search"
        />
        <select v-model="sort">
          <option value="newest">Sort by: Newest</option>
          <option value="oldest">Sort by: Oldest</option>
        </select>
      </div>
    </header>

    <!-- Contenedor principal -->
    <main>
      <router-view
        :search="search"
        :sort="sort"
        @updateKeywords="updateKeywords"
        :key="$route.fullPath"
      />
    </main>

    <!-- Footer siempre abajo -->
    <Footer
      :keywords="keywords"
      @filterByKeyword="filterGamesByKeyword"
    />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Footer },
  data() {
    return {
      search: "",
      sort: "newest",
      keywords: []
    };
  },
  methods: {
    updateKeywords(newKeywords) {
      this.keywords = newKeywords;
    },
    filterGamesByKeyword(keyword) {
      this.search = keyword; // activa el filtro al hacer clic en una keyword
    }
  },
  mounted() {
    this.$router.afterEach((to) => {
      if (to.path === "/") {
        this.search = "";
        this.sort = "newest";
      }
    });
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #0f172a;
  color: white;
  box-sizing: border-box;
}

/* Cabecera fija */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0f172a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.header h1 {
  font-size: 50px;
  font-weight: bold;
}

/* Búsqueda en cabecera */
.filters {
  display: flex;
  gap: 15px;
}

.filters input,
.filters select {
  background: #1e293b;
  border: 1px solid #334155;
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
}

.layout {
  width: 100%;
  margin-top: 130px;
  padding-bottom: 50px;
}

/* Lista de juegos */
.games {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-bottom: 100px;
  width: 100%;
}

.game-card {
  display: flex;
  gap: 12px;
  background: #1e293b;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
}

.cover {
  width: 160px;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.cover img {
  width: 100%;
  height: 100%;
  display: block;
}

/* Estilo letras juegos */
.game-info h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.game-info p {
  margin: 5px 0;
  font-size: 14px;
  color: #cbd5e1;
}

.year {
  font-size: 13px;
  color: #94a3b8;
}

.actions {
  margin-top: 10px;
}

/* Botón de jugar */
button , .play-btn {
  display: inline-block;
  margin-top: 5px;
  padding: 6px 12px;
  background: #10b981;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: background 0.2s;
}

.play-btn:hover {
  background: #059669;
}

/* Footer */
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1e293b;
  color: #fff;
  padding: 15px;
  text-align: center;
  border-top: 0.5px solid rgba(255, 255, 255, 0.08);
}
</style>
