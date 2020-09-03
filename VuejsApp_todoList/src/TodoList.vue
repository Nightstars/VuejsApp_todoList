<template>
    <div id="todolist">
        <TodoList></TodoList>
    </div>
</template>

<script>
    import TodoList from './components/TodoList.vue'
    export default {
        name: 'todolist',
        components: {
            TodoList
        }
    }
</script>

<style scoped>
</style>