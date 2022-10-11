import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(4).stores({
    backlogTasks: '++id, content, category',
    inprogressTasks: '++id, content, category',
    testingTasks: '++id, content, category',
    doneTasks: '++id, content, category'
});