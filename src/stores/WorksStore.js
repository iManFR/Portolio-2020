class WorksStore {
    constructor() {
        this.state = {
            currentWorkId: 0
        }
    }

    setWorkId(workIdToSet) {
        this.currentWorkId = workIdToSet
    }

    increment() {
        this.state.currentWorkId++
    }

    decrement() {
        this.state.currentWorkId--
    }

    reset() {
        this.state.currentWorkId = 0
    }
}