<template>
    <div class="textBody">
        <b-card-text class="text">{{content}}</b-card-text>
        <b-icon class="deleteButton" @click="deleteTask" icon="trash-fill"></b-icon>
    </div>
</template>

<script>
export default {
    props:{
        id:{
            type:String,
            required:true,
        },
        content:{
            type: String,
            required: true,
        },
        category:{
            type:String,
            required:true,
        }
    },
    methods:{
        deleteTask(){
            this.$emit('delete-task',this.id,this.category)
        }
    },
    emits: ['delete-task'],
}
</script>

<style scoped>
.textBody{
        display: flex;
        justify-content: space-between;
        background-color: rgb(204, 204, 204);
        padding: 15px;
        border-radius: 5px;
        margin: 10px 0;
        align-items: center;
        color:rgb(31, 31, 33);
    }

    .textBody:hover{
        background-color: grey;
        color:white;
    }

    .text{
        margin: auto 0 ;
    }

    .deleteButton{
        cursor:pointer;
    }

    .deleteButton:hover {
        color:rgb(126, 0, 0);
    }
</style>