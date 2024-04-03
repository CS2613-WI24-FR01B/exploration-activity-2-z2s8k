# ReadMe File for Sample Program EA2 CS2613

## Which package/library does the sample program demonstrate?

The package/library chosen for this sample program is for a component used in JavaScript
called jest. 

## How does someone run your program?

jest has several different methods of configuration which include both a typeScript and JavaScript processes. Due to the context of the CS2613 course and familiarity with node.js, we're going to use node.js and the command prompt as a means of running this sample program. 

1. Install javaScript on your device.
2. Save all contents in the given zip file "EA2.js" a preferred directory.

3. Navigate to that directory in your preferred command line program and type the following:

```
	npm install --save-dev jest
```	 
and

```
	npm install prompt-sync
```	 

4. double check the files 'package.json' file to ensure that the following lines of code are present:

```
  "scripts": {
    "test": "jest"
  }
```	 

5. type the following into your command window 

```
	npm test
```
This program requires a single sentence from the user as input, which will show the jest utility working on the EA2.js program's 2 functions, as well as checks 2 other pieces of arbitrary data. You should see the jest output of 4 green checkmarks passing the given program after you input your sentence. 

## What purpose does your program serve?

The program is very simple and its purpose is to indicate several different useful functions of the jest library framework. Please open the EA2.js program now, and trace through the code to better understand what the output of our test program represents. 

The line of code at the end of the EA2.js program:

```
	module.exports ={ countVowels, uniquelistVowels };
```
exports these two functions which are then made available in our EA2.test.js file. 

We then import our functions, similarly to the way that a program inherits the contents of an external library or module in any other program in the EA2.test.js file with the following line:

```
	const { countVowels, uniquelistVowels } = require('./EA2');
```
it is important to note that the requirement given to this import is the file that contains the given exports. This is what gives our chosen library the ability to assess our sample program for logic, errors and completeness. 

## What is some sample input?

The sample input given to the EA2.test.js program is any sentence with a character length of one or greater. Any blank input will result in the program not functioning as intended

