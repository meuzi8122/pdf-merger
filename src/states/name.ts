import { createSignal } from "solid-js";

const [name, setName] = createSignal<string>("");

function updateName(name: string) {
    setName(() => name);
}

export {
    name,
    updateName
};
