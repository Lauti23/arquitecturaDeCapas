export class ContainerMemory {
    constructor() {
        this.memory = []
    }

    async save(obj) {
        this.memory.push(obj)
    }

    async list() {
        return this.memory
    }
}