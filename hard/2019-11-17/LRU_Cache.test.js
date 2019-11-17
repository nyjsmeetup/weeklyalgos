const { LRUCache } = require('./LRU_Cache');
describe('LRU Cache', () => {
  test('it has a getItem and a setItem method', () => {
    const lru1 = new LRUCache(3);
    expect(typeof lru1.getItem).toBe('function');
    expect(typeof lru1.setItem).toBe('function');
  });
  test('it can add and retrieve items from the cache', () => {
    const lru2 = new LRUCache(5);
    const item = { name: 'test', payload: [1, 2, 3] };
    lru2.setItem(item.name, item);
    const retrievedItem = lru2.getItem(item.name);
    expect(retrievedItem).toEqual(item);
  });
  test('it deletes the LRU item from the cache when the cache is full', () => {
    const people = [
      { name: 'janet', age: 25 },
      { name: 'mike', age: 29 },
      { name: 'dave', age: 33 },
      { name: 'emily', age: 22 },
    ];

    const peopleLRUC = new LRUCache(3);
    people.forEach(person => {
      peopleLRUC.setItem(person.name, person);
    });
    expect(peopleLRUC.getItem('janet')).toBeFalsy();
  });
  test('it moves accessed items to the most recent position in the cache', () => {
    const recipes = [
      { name: 'tomato soup', ingredients: ['tomatoes', 'milk', 'salt'] },
      { name: 'grilled cheese sandwich', ingredients: ['cheese', 'bread'] },
      { name: 'brownies', ingredients: ['cocoa', 'eggs', 'sugar', 'butter'] },
    ];
    const salad = {
      name: 'caeser salad',
      ingredients: ['lettuce', 'croutons', 'sauce'],
    };

    const recipesCache = new LRUCache(3);
    recipes.forEach(recipe => {
      recipesCache.setItem(recipe.name, recipe);
    });

    // should move tomato soup to most recent position
    recipesCache.getItem(recipes[0].name);
    recipesCache.setItem(salad.name, salad);
    const cachedTomatoSoup = recipesCache.getItem(recipes[0].name);
    // tomato soup should stil be in the cache
    expect(cachedTomatoSoup).toEqual(recipes[0]);
  });
});
