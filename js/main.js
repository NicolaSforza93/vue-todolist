console.log('Vue To Do List');

const { createApp } = Vue

createApp({
    data() {
        return {
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
        removeTodo(index) {
            console.log('cancella');
            this.todos.splice(index, 1)
        }
    },
    mounted() {
        console.log('OK');
    }
}).mount('#app')