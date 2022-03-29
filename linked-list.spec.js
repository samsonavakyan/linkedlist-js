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

  test('Find', () => {
    let list = init();

    expect(list.find('d').toString()).toBe('d');
    expect(list.find('x')).toBe(null);
  });

  test('Delete', () => {
    let list = init();

    expect(list.delete('b').toString()).toBe('b');
    expect(list.toString()).toBe('a,c,d');
    list.delete('a');
    expect(list.toString()).toBe('c,d');
    expect(list.head.value).toBe('c');
    list.delete('d');
    expect(list.toString()).toBe('c');
    expect(list.head.value).toBe('c');
    expect(list.tail.value).toBe('c');
  });

  test('Delete multiple', () => {
    let list = init();

    list.append('a');

    expect(list.delete('a').toString()).toBe('a');
    expect(list.toString()).toBe('b,c,d');
    expect(list.head.value).toBe('b');
    expect(list.tail.value).toBe('d');
  });
});
