console.log('Vue To Do List');

const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]            
        }
    },
    methods: {
        addTodo() {
            this.todos.unshift({text: this.newTodo, done: false});
            this.newTodo = ''
        },

        removeTodo(index) {
            console.log('cancella');
            this.todos.splice(index, 1);
        },
    },
    mounted() {
        console.log('OK');
    }
}).mount('#app')