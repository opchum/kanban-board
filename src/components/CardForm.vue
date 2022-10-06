<template>
    <!-- .prevent means preventDefault -->
    <div class="formBody">
        <b-form @submit.prevent="submitData" >
            <b-form-group id="input-group-1" class="formGroup">
                <b-form-input id="input-1" v-model="enteredContent" type="text" placeholder="Enter Task" required>
                </b-form-input>
            </b-form-group>
    
            <b-form-group>
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
                <b-button type="submit" variant="primary">Submit</b-button>
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
            enteredCategory:''
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
    background-color: transparent;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px;
    border: 2px solid black;
    min-width: 300px;
    max-width: 600px;
}

.formGroup{
    margin: 10px auto;
}

.buttonGroup{
    display:flex;
    justify-content: space-around;
}


</style>