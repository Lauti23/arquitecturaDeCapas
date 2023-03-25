import fs from "fs";

export class ContainerFile {
    constructor(pathToFile) {
        this.pathToFile = pathToFile
    }

    async save(obj) {
        try {
            const data = await this.list()
            data.push(obj)
            await fs.promises.writeFile(this.pathToFile, JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }

    async list() {
        try {
            if(fs.existsSync(this.pathToFile)) {
                const data = await fs.promises.readFile(this.pathToFile, "utf-8")
                return JSON.parse(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
}