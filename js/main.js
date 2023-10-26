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
            this.todos.unshift({ text: this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1), done: false });
            this.newTodo = ''
        },

        removeTodo(index) {
            // console.log('cancella');
            this.todos.splice(index, 1);
        },

        toggleTask(index) {
            if(this.todos[index].done === true) {
                this.todos[index].done = false
            } else {
                this.todos[index].done = true
            }
        }
    },
    mounted() {
        console.log('OK');
    }
}).mount('#app')