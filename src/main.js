function generateTodoHtml(todoItems) {
  let items = [];
  items.push(`<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>`);
  for(let todoItem of todoItems){
    if(todoItem.completed === true){
      items.push(`    <li>
                <div><input type="checkbox" checked="checked"/><label>${todoItem.name}</label></div>
                <form><input type="text"/></form>
    </li>`);
    }else {
      items.push(`<li>
                <div><input type="checkbox"/><label>${todoItem.name}</label></div>
                <form><input type="text"/></form>
            </li>`);
    }
  }
  items.push(`        </ul>
    </section>
    <footer>
        <strong>2</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>`);
  require('fs').writeFileSync('1.txt', items.join('\n'));
  return items.join('\n');
}

module.exports = {
  generateTodoHtml: generateTodoHtml

}