
function choices(items) {

    let index = Math.floor(Math.random() * items.length);
    let item = items[index];
    return item;

}
function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}
export { choices, remove }