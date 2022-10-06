<template>
  <div id="app">
    <HelloWorld msg="AUGHHHHHHHHHHHHHHHH" />
    <div class="row">
      <div class="col-md-3">
        <b-card 
        border-variant="primary" 
        header='Backlog'
        header-bg-variant="primary" 
        header-text-variant="white"
        align="center">
            <!-- List -->
            <CardList
            v-for="task in backlogTasks"
            :key="task.id"
            :id="task.id"
            :content = "task.content"
            :category = "task.category"
            @delete-task="deleteTask"
            />
        </b-card>
      </div>
      <div class="col-md-3">
        <b-card 
        border-variant="secondary" 
        header='In Progress'
        header-bg-variant="secondary" 
        header-text-variant="white"
        align="center">
            <!-- List -->
            <CardList
            v-for="task in inprogressTasks"
            :key="task.id"
            :id="task.id"
            :content = "task.content"
            :category = "task.category"
            @delete-task="deleteTask"
            />
        </b-card>
      </div>
      <div class="col-md-3">
        <b-card 
        border-variant="dark" 
        header='Testing'
        header-bg-variant="dark" 
        header-text-variant="white"
        align="center">
            <!-- List -->
            <CardList
            v-for="task in testingTasks"
            :key="task.id"
            :id="task.id"
            :content = "task.content"
            :category = "task.category"
            @delete-task="deleteTask"
            />
        </b-card>
      </div>
      <div class="col-md-3">
        <b-card 
        border-variant="success" 
        header='Done'
        header-bg-variant="success" 
        header-text-variant="white"
        align="center">
            <!-- List -->
            <CardList
            v-for="task in doneTasks"
            :key="task.id"
            :id="task.id"
            :content = "task.content"
            :category = "task.category"
            @delete-task="deleteTask"
            />
        </b-card>
      </div>
    </div>
    <CardForm @add-task="addTask"></CardForm>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import CardBase from './components/CardBase.vue'
import CardForm from './components/CardForm.vue'
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // CardBase,
    CardForm,
    CardList
  },
  data() {
    return {
      enteredContent: '',
      enteredCategory: '',
      backlogTasks: [
        
      ],
      inprogressTasks: [
        
      ],
      testingTasks: [

      ],
      doneTasks: [

      ]
    }
  },
  methods: {
    addTask(content,category){
      //push the input into the task array based on their category by using if else
      if (category=="backlog"){
        this.backlogTasks.push({
          id: new Date().toString(),
          content: content,
          category: category,
        })
      } else if (category == "inprogress"){
        this.inprogressTasks.push({
          id: new Date().toString(),
          content: content,
          category: category,
        })
      } else if (category == "testing") {
        this.testingTasks.push({
          id: new Date().toString(),
          content: content,
          category: category,
        })
      } 
      else if (category == "done") {
        this.doneTasks.push({
          id: new Date().toString(),
          content: content,
          category: category,
        })
      }
    },
    deleteTask(taskId) {
      //delete a specific task then will check the id at each section, if no detect id , then just filter back original
      this.backlogTasks = this.backlogTasks.filter(task => task.id !== taskId);
      this.inprogressTasks = this.inprogressTasks.filter(task => task.id !== taskId);
      this.testingTasks = this.testingTasks.filter(task => task.id !== taskId);
      this.doneTasks = this.doneTasks.filter(task => task.id !== taskId);
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: sans-serif;
  padding: 50px 30px;
  width:100%;
  height: 100vh;
  background-color: rgb(227, 227, 227);
}
.formBody {
  background-color: white;
  border-radius: 10px;
  margin: 20px auto;
  padding: 10px;
  border: 2px solid black;
  min-width: 300px;
  max-width: 600px;
}

.formGroup {
  margin: 10px auto;
}

.buttonGroup {
  display: flex;
  justify-content: space-around;
}
</style>
