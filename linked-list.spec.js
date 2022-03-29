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

  test('Prepend', () => {
    let list = init();

    expect(list.prepend('x').toString()).toBe('x,a,b,c,d');
    expect(list.head.value).toBe('x');
    expect(list.tail.value).toBe('d');
  });

  test('Prepend in empty list', () => {
    let list = new LinkedList();

    expect(list.prepend('x').toString()).toBe('x');
    expect(list.head.value).toBe('x');
    expect(list.tail.value).toBe('x');
  });
});
