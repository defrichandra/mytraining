<template>
    <div>
        <!-- <Header /> -->
        <AddTask />
        <TaskManager />
    </div>
</template>

<script>
// import Header from '@/components/Header.vue';
import AddTask from '@/components/AddTask';
import TaskManager from '@/components/TaskManager';

export default {
    components: {
        //Header,
        AddTask,
        TaskManager
    },
};
</script>

<style>
</style>
