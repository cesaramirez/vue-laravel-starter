import Vue from 'vue'

// Load global components dynamically
const requireContext = require.context('./global', false, /.*\.(js|vue)$/)
requireContext.keys().forEach(file => {
  const Component = requireContext(file)

  if (Component.name) {
    Vue.component(Component.name, Component)
  }
})
