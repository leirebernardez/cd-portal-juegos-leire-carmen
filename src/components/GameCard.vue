<template>
  <article class="game-card">
    <div class="cover">
      <img
        :src="game.image"
        :alt="`${game.name} cover`"
        loading="lazy"
        @error="onError"
      />
    </div>

    <div class="game-info">
      <h3>{{ game.name }}</h3>
      <p class="description">{{ game.description }}</p>
      <span class="year">{{ game.year }}</span>

      <div class="actions">
        <button class="play" @click="$emit('play', game)">Play</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    game: { type: Object, required: true }
  },
  emits: ['play'],
  methods: {
    onError(e) {
      const ph = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="#1e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Poppins,Segoe UI,sans-serif" font-size="28" fill="white">No cover</text></svg>`;
      e.target.src = ph;
    }
  }
}
</script>

<style scoped>
.game-card{
  display:flex; gap:16px; align-items:center;
  padding:18px; background:#1e2636;
  border:1px solid rgba(255,255,255,.08); border-radius:16px;
}

/* Portada a la izquierda */
.cover{
  width:160px; aspect-ratio:16/9; /* cambia a 1/1 o 4/3 si prefieres */
  border-radius:12px; overflow:hidden; background:#0b1220; flex-shrink:0;
}
.cover img{ width:100%; height:100%; object-fit:cover; object-position:center; display:block; }

.game-info h3{ margin:0 0 6px }
.description{ margin:0 0 10px; color:#b9c2d0; line-height:1.2 }
.year{ display:inline-block; margin-bottom:10px; opacity:.8; font-size:.9rem }

.play{
  background:#10b981; color:#0b1220; border:none; padding:8px 14px;
  border-radius:10px; cursor:pointer; font-weight:600;
}
.play:hover{ filter:brightness(1.05) }
</style>
