import { ContainerFile } from "./ContainerFiles.js";
import { ContainerMemory } from "./ContainerMemory.js";

let container

if(process.argv[2] === "file") {
    container = new ContainerFile("./db.json")
} else {
    container = new ContainerMemory()
}

export async function save(obj) {
    return container.save(obj)
}

export async function list() {
    return container.list()
}