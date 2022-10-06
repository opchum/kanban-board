<template>
    <!-- .prevent means preventDefault -->
    <div class="formBody">
        <b-form @submit.prevent="submitData" >
            <b-form-group id="input-group-1" class="formGroup">
                <b-form-input id="input-1" v-model="enteredContent" type="text" placeholder="Enter Task" required>
                </b-form-input>
            </b-form-group>
    
            <b-form-group class="formGroup">
                <label class="m-2">Choose Category:</label>
                <b-form-radio v-model="enteredCategory"  name="category-radios" value="backlog" required class="m-1">Backlog
                </b-form-radio>
                <b-form-radio v-model="enteredCategory"  name="category-radios" value="inprogress" required class="m-1">In Progress
                </b-form-radio>
                <b-form-radio v-model="enteredCategory"  name="category-radios" value="testing" required class="m-1">Testing
                </b-form-radio>
                <b-form-radio v-model="enteredCategory"  name="category-radios" value="done" required class="m-1">Done
                </b-form-radio>
            </b-form-group>

            <div class="buttonGroup">
                <b-button type="submit" variant="primary">{{ !editStatus ? 'Submit' : 'Edit' }}</b-button>
                <b-button  @click="clearInput" variant="outline-danger">Clear</b-button>
            </div>   
        </b-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            enteredContent:'',
            enteredCategory:'',
            editStatus: false,
        }
    },
    methods:{
        clearInput(){
            this.enteredContent='',
            this.enteredCategory=''
        },
        submitData(){
            this.$emit('add-task',
            this.enteredContent,
            this.enteredCategory
            )
            //clear the input field once submit
            this.enteredContent = '',
            this.enteredCategory = ''
        }
    }
}
</script>

<style scoped>
.formBody{
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid black;
    min-width: 200px;
    max-width: 600px;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.formBody:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
}

.formGroup{
    margin: 10px auto;
    border-radius: 10px;
}

.buttonGroup{
    display:flex;
    justify-content: space-around;
}
</style>