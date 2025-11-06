<template>
  <div class="tag-category-bar" v-if="popularTags.length > 0">
    <div class="tag-bar-container">
      <div class="tag-bar-scroll">
        <div class="tag-list">
          <button
            v-for="(tag, index) in popularTags"
            :key="`${tag}-${index}`"
            class="tag-item"
            :class="{ 'active': selectedTag === tag }"
            @click="handleTagClick(tag)"
          >
            <span class="tag-text">{{ tag }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePluginStore } from '../stores/plugins'

const store = usePluginStore()
const { allTags, selectedTag, plugins } = storeToRefs(store)

const popularTags = computed(() => {
  if (!plugins.value || plugins.value.length === 0) return []

  // 统计每个tag出现的次数
  const tagCounts = {}
  plugins.value.forEach(plugin => {
    if (plugin.tags && Array.isArray(plugin.tags)) {
      plugin.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }
  })

  // 按出现次数降序排序，并选择前12个
  const sortedTags = Object.entries(tagCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 12)
    .map(([tag]) => tag)

  return sortedTags
})

const handleTagClick = (tag) => {
  // 如果点击的是当前选中的tag，则取消选择
  if (selectedTag.value === tag) {
    store.setSelectedTag(null)
  } else {
    store.setSelectedTag(tag)
  }
  // 重置到第一页
  store.setCurrentPage(1)
}
</script>

<style scoped>
.tag-category-bar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px 8px;
  position: sticky;
  top: 72px;
  z-index: 100;
  background: linear-gradient(to bottom, var(--bg-base), var(--bg-base) 80%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.tag-bar-container {
  position: relative;
  overflow: hidden;
}

.tag-bar-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 4px;
}

.tag-bar-scroll::-webkit-scrollbar {
  display: none;
}

.tag-list {
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  padding: 0 4px;
  min-width: max-content;
}

.tag-item {
  flex: 0 0 auto;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-base);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  overflow: hidden;
}

.tag-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: -1;
}

.tag-item:hover {
  background: var(--bg-card-hover);
  border-color: var(--primary-color);
  color: var(--text-primary);
  transform: translateY(-1px);
  box-shadow:
    0 2px 8px rgba(16, 185, 129, 0.15),
    0 1px 3px rgba(16, 185, 129, 0.1);
}

.tag-item:hover::before {
  opacity: 0.1;
}

.tag-item.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  font-weight: 600;
  box-shadow:
    0 4px 12px rgba(16, 185, 129, 0.3),
    0 2px 4px rgba(16, 185, 129, 0.2);
}

.tag-item.active::before {
  opacity: 0;
}

.tag-item.active:hover {
  background: var(--primary-active);
  border-color: var(--primary-active);
  transform: translateY(-2px);
  box-shadow:
    0 6px 16px rgba(16, 185, 129, 0.4),
    0 3px 6px rgba(16, 185, 129, 0.3);
}

.tag-text {
  position: relative;
  z-index: 1;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .tag-category-bar {
    top: 72px;
    padding: 12px 16px 6px;
  }

  .tag-list {
    gap: 6px;
  }

  .tag-item {
    padding: 6px 12px;
    font-size: 13px;
    border-radius: 14px;
  }
}

@media (max-width: 480px) {
  .tag-category-bar {
    top: 68px;
    padding: 10px 12px 6px;
  }

  .tag-list {
    gap: 4px;
  }

  .tag-item {
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 12px;
  }
}
</style>
