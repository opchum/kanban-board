<template>
    <div class="col-md-3">
        <b-card 
        border-variant="primary" 
        :header='headerTitle'
        header-bg-variant="primary" 
        header-text-variant="white"
        align="center">
            <CardList
            v-for="task in tasks"
            :key="task.id"
            :id="task.id"
            :content = "task.content"
            :category = "task.category"
            @delete-task="deleteTask"
            />
        </b-card>
    </div>
</template>

<script>
import CardList from './CardList.vue';
export default {
    props: {
        headerTitle: {
            type: String
        }
    },
    components: { CardList },
}
</script>

<style scoped>

</style>