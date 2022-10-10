<template>
  <div id="app">
    <HelloWorld msg="AUGHHHHHHHHHHHHHHHH" />
    <div class="row">
      <div class="cardParent col-md-3">
        <b-card
        class="cardBody"
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
            @edit-task="editTask"
            />
        </b-card>
      </div>
      <div class="cardParent col-md-3">
        <b-card
        class="cardBody"
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
            @edit-task="editTask"
            />
        </b-card>
      </div>
      <div class="cardParent col-md-3">
        <b-card
        class="cardBody"
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
            @edit-task="editTask"
            />
        </b-card>
      </div>
      <div class="cardParent col-md-3">
        <b-card 
        class="cardBody"
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
            @edit-task="editTask"
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
    addTask(content, category) {
      //push the input into the task array based on their category
      this[category+"Tasks"].push({
        id: new Date().toString(),
        content: content,
        category: category,
      })
    },

    deleteTask(taskId, taskCategory){
      this[taskCategory + 'Tasks'] = this[taskCategory + 'Tasks'].filter(task => task.id !== taskId);
    },

    // editTask(taskId, taskCategory, taskEntered) {
    //   this[taskCategory + 'Tasks'] = this[taskCategory + 'Tasks'].map(task =>{
    //     if (task.id == taskId){
    //       return {...task, content: taskEntered};
    //     }
    //   })
    // }

    editTask(taskId,taskCategory,taskEntered){
      const elementIndex = this[taskCategory + 'Tasks'].findIndex((task => task.id == taskId));
      this[taskCategory + 'Tasks'][elementIndex].content = taskEntered;
    },
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

.buttonGroup {
  display: flex;
  justify-content: space-around;
}

.cardParent{
  padding: 10px;
}

.cardBody{
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.cardBody:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
}
</style>
