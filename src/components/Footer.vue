<template>
  <footer class="app-footer">
    <section class="keywords-card">
      <h2>Keywords</h2>
      <div class="keywords">
        <span 
          v-for="(kw, index) in keywords" 
          :key="index" 
          class="tag"
          @click="$emit('filterByKeyword', kw)"
        >
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
  color: #f1f4f7;
}

.keywords {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.tag {
  background-color: #10b981;
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.tag:hover {
  background-color: #059669;
}
</style>