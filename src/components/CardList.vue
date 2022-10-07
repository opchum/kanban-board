<template>
    <div>
        <div class="textBody">
            <b-card-text class="text">{{content}}</b-card-text>
            <div class="iconGroup">
                <b-icon class="editIcon" @click="editMode" icon="pencil-fill"></b-icon>
                <b-icon class="deleteIcon" @click="deleteTask" icon="trash-fill"></b-icon>
            </div>    
        </div>
        <div v-show="!editStatus" class="editBody">
            <b-form-input id="editInput" v-model="enteredContent" type="text" placeholder="Enter Task" required>
            </b-form-input>
            <b-button type="submit"    class="editButton" variant="warning">Edit</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            editStatus:true
        }
    },
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
        },
        editMode(){
            this.editStatus=!this.editStatus
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

    .editBody{
        display: flex;
    }

    .text{
        margin: auto 0 ;
    }

    .iconGroup{
        display: flex;
        padding: auto 5px;
    }

    .deleteIcon, .editIcon{
        cursor:pointer;
        margin: 0 10px;
    }

    .editIcon:hover {
        color: green;
    }

    .deleteIcon:hover {
        color:red;
    }

    .editButton{
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    #editInput{
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    #editInput:focus{
        box-shadow:none;
    }
</style>