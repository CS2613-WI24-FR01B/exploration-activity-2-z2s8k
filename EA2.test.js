
const { countVowels, uniquelistVowels } = require('./EA2');
//jest tests the second function of the program
test('Function counts all the vowels in the sentence: This is a jest test program', () => {
  expect(countVowels("This is a jest test program")).toBe(7);
});
//jest tests the first function of the program
test('Function lists all the unique vowels in a given sentence', () =>{
    expect(uniquelistVowels("This is a jest test program")).toStrictEqual(["i","a","e","o"]);
});

//example array
const javaScriptGameLibraries = [
    'phaser.js',
    'PixiJS',
    'Babylon.js',
    'Kiwi.js',
    'Enchant.js'
];
//This test is just to show the .toContain() function which can be used on array data structures.
test('This utility can also check an array for a value', () =>{
    expect(javaScriptGameLibraries).toContain('phaser.js');
    expect(new Set(javaScriptGameLibraries)).toContain('phaser.js');
});
//This test is simply just to show jest.js check a value for if the result is null. The toBeNull() feature of this library 
//can be very useful for confusing index bounds errors in certain structures and hashing search algorithms. 
test('This utility can also check if a value is null', () =>{
    const nullValue = null;
    expect(nullValue).toBeNull();
});

