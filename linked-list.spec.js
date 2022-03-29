const { LinkedList } = require('./linkedlist');

function init() {
  const list = new LinkedList();

  list.append('a').append('b').append('c').append('d');

  return list;
}

describe('Linked list', () => {
  test('Append', () => {
    let list = init();

    expect(list.append('x').toString()).toBe('a,b,c,d,x');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('x');
  });
});
