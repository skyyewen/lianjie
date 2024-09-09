<template>
  <div class="cascader-select">
    <div class="select-wrapper" @click="toggleDropdown">
      <span v-if="selectedPath.length">{{ selectedPath.join(' / ') }}</span>
      <span v-else>请选择</span>
      <i class="arrow-down"></i>
    </div>
    <div v-if="isOpen" class="dropdown">
      <div class="column">
        <div
          v-for="item in options"
          :key="item.value"
          class="option"
          :class="{ active: isSelected(item, 0) }"
          @click="selectOption(item, 0)"
        >
          {{ item.label }}
          <i v-if="item.children" class="arrow-right"></i>
        </div>
      </div>
      <div v-if="subOptions.length" class="column">
        <div
          v-for="item in subOptions"
          :key="item.value"
          class="option"
          :class="{ active: isSelected(item, 1) }"
          @click="selectOption(item, 1)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      options: [
        {
          value: 'shanxi',
          label: '山西省',
          children: [
            { value: 'taiyuan', label: '太原市' },
            { value: 'datong', label: '大同市' },
            // ... 其他城市
          ]
        },
        {
          value: 'neimenggu',
          label: '内蒙古自治区',
          children: [
            { value: 'huhehaote', label: '呼和浩特市' },
            { value: 'baotou', label: '包头市' },
            // ... 其他城市
          ]
        },
        // ... 其他省份
      ],
      selectedOptions: [],
      selectedPath: []
    }
  },
  computed: {
    subOptions() {
      return this.selectedOptions[0]?.children || []
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectOption(option, level) {
      this.selectedOptions = this.selectedOptions.slice(0, level)
      this.selectedOptions.push(option)
      this.selectedPath = this.selectedOptions.map(opt => opt.label)
      
      if (!option.children) {
        this.isOpen = false
      }
    },
    isSelected(option, level) {
      return this.selectedOptions[level]?.value === option.value
    }
  }
}
</script>

<style scoped>
.cascader-select {
  position: relative;
  width: 300px;
}
.select-wrapper {
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
}
.arrow-down {
  float: right;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  border: 1px solid #ccc;
  background: white;
}
.column {
  width: 150px;
  border-right: 1px solid #eee;
}
.option {
  padding: 5px 10px;
  cursor: pointer;
}
.option:hover {
  background-color: #f0f0f0;
}
.option.active {
  background-color: #e6f7ff;
}
.arrow-right {
  float: right;
}
</style>