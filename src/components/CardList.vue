<template>
    <div :class="category">
        <div class="textBody">
            <b-card-text class="text">{{content}}</b-card-text>
            <div class="iconGroup">
                <b-icon class="editIcon" @click="editMode" title="Edit Task" icon="pencil-fill"></b-icon>
                <b-icon class="deleteIcon" @click="deleteTask" title="Delete Task" icon="trash-fill"></b-icon>
            </div>    
        </div>
        <div v-show="!editStatus" class="editBody">
            <b-form-input id="editInput" v-model="enteredEdit" type="text" placeholder="Enter Task" required></b-form-input>
            <b-button class="editButton" @click="editTask" title="Confirm Edit" variant="warning"><b-icon icon="check" style="width: 24px; height: 24px;"></b-icon></b-button>
            <b-button class="cancelButton" @click="editMode" title="Cancel Edit" variant="danger"><b-icon icon="x" style="width: 24px; height: 24px;"></b-icon></b-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            editStatus:true,
            enteredEdit:'',
        }
    },
    props:{
        id:{
            type:Number,
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
        editTask(){
            this.$emit('edit-task',this.id,this.category,this.enteredEdit)
            this.editStatus = !this.editStatus
            this.enteredEdit=''
        },
        editMode(){
            this.editStatus=!this.editStatus
        }
    },
    emits: ['delete-task','edit-task'],
}
</script>

<style scoped>
.textBody{
        display: flex;
        justify-content: space-between;
        background-color: grey;
        color: white;
        border-radius: 5px;
        margin: 5px 0;
        align-items: center;
        padding: 10px
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
        word-break: break-word;
        text-align: left;
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
        border-radius:0px;
        min-width: 50px;
        font-size: 12px;
    }

    .cancelButton {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        min-width: 50px;
        font-size: 12px;
    }

    #editInput{
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    #editInput:focus{
        box-shadow:none;
    }
</style>