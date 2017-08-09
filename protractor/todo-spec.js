describe('angularjs homepage todo list', function(){
  it('should add a todo', function(){
    browser.get('https://angularjs.org');
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
  })

  it('should have a certain text', function(){
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.get(2).getText()).toEqual('write first potractor test');
  })
})
