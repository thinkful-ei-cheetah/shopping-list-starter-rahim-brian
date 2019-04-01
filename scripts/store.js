const store = (function() {
  const foo = "bar";
  const items = [
    { id: cuid(), name: "apples", checked: false },
    { id: cuid(), name: "oranges", checked: false },
    { id: cuid(), name: "milk", checked: true },
    { id: cuid(), name: "bread", checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = "";

  function findById(id) {
    return store.items.find(item => item.id === id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      throw TypeError("Name does not exist");
    }
  }

  function findAndToggleChecked(id) {
    let item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      let item = this.findById(id);
      item.name = newName;
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete(id) {
    store.items = this.items.filter(item => item.id !== id);
  }

  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(term) {
    this.searchTerm = term;
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
})();
