<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input v-show="todo.isEdit" :value="todo.title" @blur="handleChange(todo, $event)" ref="input" />
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-danger"
            style="margin-right: 10px; background-color: blue; border: 1px solid blue;"
            @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        handleCheck(id) {
            this.$bus.$emit('checkTodo', id)
        },
        handleDelete(id) {
            this.$bus.$emit('deleteTodo', id)
        },
        handleEdit(todo) {
            if (!(todo.hasOwnProperty.call('isEdit'))) {
                this.$set(todo, 'isEdit', true)
            } else {
                todo.isEdit = true
            }
            this.$nextTick(function () {
                this.$refs.input.focus()
            })
        },
        handleChange(todo, e) {
            const textValue = e.target.value
            todo.isEdit = false
            if (textValue === '') {
                return
            }
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
        }
    }
}
</script>

<style lang="less" scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>