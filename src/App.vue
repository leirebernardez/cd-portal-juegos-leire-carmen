<template>
    <!-- Cabecera -->
    <header class="header">
      <h1>GAME PORTAL</h1>
      <div class="filters">
        <input type="text" placeholder="Search games" v-model="search" />
        <select v-model="sort">
          <option value="newest">Sort by: Newest</option>
          <option value="oldest">Sort by: Oldest</option>
        </select>
      </div>
    </header>

    <!-- Aquí carga cada vista según la ruta -->
    <router-view 
    :search="search" 
    :sort="sort" 
    @updateKeywords="updateKeywords"
    />
    
    <!-- El footer SIEMPRE abajo -->
    <Footer :keywords="keywords" />
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
    }
  }
};
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #0f172a; /* azul marino */
  color: white;
  font-family: "Poppins", "Segoe UI", sans-serif;
  overflow-x: auto;
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

/* Busqueda cabecera */
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
  display: grid;
  grid-template-columns: 2fr 1fr; /* izquierda y derecha */
  gap: 20px;

  width: 100vw;
  max-width: 100%;  /* límite de ancho */
  overflow-x:hidden;
  margin-top: 130px;    /* centra horizontalmente */
  padding: 20px;
  box-sizing: border-box;
}

/* Lista de juegos */
.games {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  gap: 20px; /* espacio entre las cards */
  padding-bottom: 100px;

  max-width: 1200px;   /* ancho máximo del grid */
  margin: 0 auto;      /* centra el grid horizontalmente */
  width: 100%;         /* ocupa todo el ancho hasta el max-width */
  box-sizing: border-box;
}


.game-card {
  display: flex;
  gap: 15px;
  background: #1e293b;
  padding: 15px;
  border-radius: 10px;
}

.game-card img {
  width: 80px;
  height: 100px;
  border-radius: 8px;
}

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
/*Botón de jugar */
.play-btn {
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
.app-footer {
  background-color: #1e293b;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
