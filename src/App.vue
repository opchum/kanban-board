<template>
  <div id="app">
    <HeaderSection msg="Kanban" />
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
            <draggable class="list-group backlog" @change="categoryChange" @end="startendPoint" :lists="backlogTasks" group="tasks">
              <CardList
              v-for="task in backlogTasks"
              :key="task.id"
              :id="task.id"
              :content = "task.content"
              :category = "task.category"
              @delete-task="deleteTask"
              @edit-task="editTask"
              />
            </draggable>
        </b-card>
      </div>
      <div class="cardParent col-md-3">
        <b-card
        class="cardBody inprogress"
        border-variant="secondary" 
        header='In Progress'
        header-bg-variant="secondary" 
        header-text-variant="white"
        align="center">
            <!-- List -->
            <draggable class="list-group inprogress" @change="categoryChange" @end="startendPoint" :lists="inprogressTasks" group="tasks">
              <CardList
              v-for="task in inprogressTasks"
              :key="task.id"
              :id="task.id"
              :content = "task.content"
              :category = "task.category"
              @delete-task="deleteTask"
              @edit-task="editTask"
              />
            </draggable>
        </b-card>
      </div>
      <div class="cardParent col-md-3">
        <b-card
        class="cardBody testing"
        border-variant="dark" 
        header='Testing'
        header-bg-variant="dark" 
        header-text-variant="white"
        align="center">
            <!-- List -->
            <draggable class="list-group testing" @change="categoryChange" @end="startendPoint" :lists="testingTasks" group="tasks">
            <CardList
            v-for="task in testingTasks"
            :key="task.id"
            :id="task.id"
            :content = "task.content"
            :category = "task.category"
            @delete-task="deleteTask"
            @edit-task="editTask"
            />
            </draggable>
        </b-card>
      </div>
      <div class="cardParent col-md-3">
        <b-card 
        class="cardBody done"
        border-variant="success" 
        header='Done'
        header-bg-variant="success" 
        header-text-variant="white"
        align="center">
            <!-- List -->
            <draggable class="list-group done" @change="categoryChange" @end="startendPoint" :lists="doneTasks" group="tasks">
            <CardList
            v-for="task in doneTasks"
            :key="task.id"
            :id="task.id"
            :content = "task.content"
            :category = "task.category"
            @delete-task="deleteTask"
            @edit-task="editTask"
            />
            </draggable>
        </b-card>
      </div>
    </div>
    <CardForm @add-task="addTask"></CardForm>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
// import CardBase from './components/CardBase.vue'
import draggable from "vuedraggable"
import { db } from './db'
import { liveQuery } from 'dexie'
import { useObservable } from "@vueuse/rxjs";
import CardForm from './components/CardForm.vue'
import CardList from './components/CardList.vue'


export default {
  name: 'App',
  components: {
    HeaderSection,
    // CardBase,
    draggable,
    CardForm,
    CardList,
  },
  setup(){
    return{
      db,
      backlogTasks: useObservable(
        liveQuery(() => db.backlogTasks.toArray())
      ),
      inprogressTasks: useObservable(
        liveQuery(() => db.inprogressTasks.toArray())
      ),
      testingTasks: useObservable(
        liveQuery(() => db.testingTasks.toArray())
      ),
      doneTasks: useObservable(
        liveQuery(() => db.doneTasks.toArray())
      ),
    }
  },
  data() {
    return {
      enteredContent: '',
      enteredCategory: '',
      // backlogTasks: [],
      // inprogressTasks: [],
      // testingTasks: [],
      // doneTasks: [],
    }
  },
  methods: {
    async addTask(content, category) {
      // this[category + "Tasks"].push({
      //   id: new Date().toString(),
      //   content: content,
      //   category: category,
      // })
      await db[category+"Tasks"].add({
        content: content,
        category: category,
      })
    },

    async deleteTask(taskId, taskCategory){
      // this[taskCategory + 'Tasks'] = this[taskCategory + 'Tasks'].filter(task => task.id !== taskId);
      await db[taskCategory + 'Tasks'].delete(taskId)
    },

    async editTask(taskId,taskCategory,taskEntered){
      // const elementIndex = this[taskCategory + 'Tasks'].findIndex((task => task.id == taskId));
      // this[taskCategory + 'Tasks'][elementIndex].content = taskEntered;
      await db[taskCategory + 'Tasks'].update(taskId, {
        "content": taskEntered
      });
    },
    categoryChange(){
      //detect data for the lists that i wanted to move
      console.log("derp")
    },
    startendPoint(taskId){
      //find the start point and end point
      console.log(taskId.clone.className)
      console.log(taskId.to.className)
    },
    categoryIfElse(){
      //if else statement for class changes from point A to point B
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
  width:100%;
  height: 100vh;
  background-color: rgb(230, 230, 230);
  overflow: hidden;
}

.row{
  padding: 20px;
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
