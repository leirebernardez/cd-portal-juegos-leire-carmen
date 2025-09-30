<template>
  <footer class="app-footer">
    <section class="keywords-card">
      <h2>Keywords</h2>
      <div class="keywords">
        <span v-for="(kw, index) in keywords" :key="index" class="tag">
          {{ kw }}
        </span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    keywords: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

.keywords-card h2 {
  margin-bottom: 12px;
  font-size: 18px;
  color: #f1f4f7; /* gris claro */
}

.keywords {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.tag {
  background-color: #10b981; /* azul-gris más claro */
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}
</style>
