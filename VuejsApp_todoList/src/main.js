import Vue from 'vue';
import App from './App.vue';
import TodoList from './TodoList.vue'

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
new Vue({
    render:h=>h(TodoList)
}).$mount("#todoList")