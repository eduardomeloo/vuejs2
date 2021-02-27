import Vue from 'vue'

export default new Vue({
    methods: {
        selectedUser(user) {
            this.$emit('userSelected', user)
        },
        selectedUserEvent(user) {
            this.$on('userSelected', user)
        }
    }
})