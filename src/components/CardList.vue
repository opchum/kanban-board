<template>
    <div class="textBody">
        <b-card-text class="text">{{content}}</b-card-text>
        <div class="buttonGroup">
            <b-icon class="editButton" icon="pencil-fill"></b-icon>
            <b-icon class="deleteButton" @click="deleteTask" icon="trash-fill"></b-icon>
        </div>    
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
        background-color: grey;
        color: white;
        padding: 15px;
        border-radius: 5px;
        margin: 10px 0;
        align-items: center;
    }
        
    .textBody:hover{
        background-color: rgb(204, 204, 204);
        color: rgb(31, 31, 33);
    }

    .text{
        margin: auto 0 ;
    }

    .buttonGroup{
        display: flex;
        padding: auto 5px;
    }

    .deleteButton, .editButton{
        cursor:pointer;
        margin: 0 10px;
    }

    .editButton:hover {
        color: green;
    }

    .deleteButton:hover {
        color:red;
    }
</style>