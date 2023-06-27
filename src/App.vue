<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- @addTodo是自定义事件，绑定在MyHeader组件实例上 -->
            <MyHeader @addTodo="addTodo" />
            <MyList :todos="todos" />
            <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @deleteAllDone="deleteAllDone" />
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
        //添加一个todo
        addTodo(todoObj) {
            this.todos.unshift(todoObj)
        },
        //勾选或取消勾选一个todo
        checkTodo(id) {
            this.todos = this.todos.map(item => {
                if (id === item.id) {
                    item.done = !item.done
                }
                return item
            })
        },
        //删除todo
        deleteTodo(id) {
            this.todos = this.todos.filter(item => id !== item.id)
        },
        //全选或全不选
        checkAllTodo(done) {
            this.todos = this.todos.map(item => ({ ...item, done }))
        },
        //清除已完成任务
        deleteAllDone() {
            this.todos = this.todos.filter(item => !item.done)
        },
        updateTodo(id, title) {
            this.todos = this.todos.map(item => ({ ...item, title: id === item.id ? title : item.title }))
        }
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }
    },
    mounted() {
        this.$bus.$on('checkTodo', this.checkTodo)
        this.$bus.$on('deleteTodo', this.deleteTodo)
        this.$bus.$on('updateTodo', this.updateTodo)
    },
    beforeDestroy() {
        this.$bus.$off('checkTodo')
        this.$bus.$off('deleteTodo')
        this.$bus.$off('updateTodo')
    }
}
</script>

<style lang="less">
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;

    .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
}
</style>
