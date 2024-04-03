# Package/Library Overview

## Which Package/Library did you select?
The package/library I chose is called jest and is a part of the JavaScript programming language.

## What Jest?
Jest is a JavaScript testing utility which can help facilitate unit tests on JavaScript based programs.

### What purpose does Jest serve?

Jest is a JavaScript testing framework that's designed to simplify the unit testing process by creating a multi-purpose utility that accomodates projects designed using typeScript, Babel, Node, React, Angular and many more modules associated with JavaScript.   [REF](https://jestjs.io/).

### How do you use Jest?

#### How do you install Jest?

There are several ways of installing and configuring Jest to meet the needs of those who choose it for testing. The way that I chose to install Jest is through the Node.js method as follows: 

```
	npm install --save-dev jest
```	
However, for those more familiar with yarn or pnpm, there are alternative means of installing the framework to your desired directory. 

for yarn:

```
	yarn add --dev jest
```	
for pnpm:

```
	pnpm add --save-dev jest
```	
Jest can also facilitate other configurations given by the Documentation included in the Jest website which provides in-depth tutorials on how to adjust the parameters of the jest install to facilitate projects that use babel and other external utilities.

#### How do you design using Jest?

Once Jest is installed, and configured to the users specifications and needs, you can design a seperate test file similarly to the EA2.test.js program included in my program. In the EA2.test.js program, I chose to test 2 different example functions I designed for the desired output and I decided to create two seperate tests to provide additional examples of utilities offered by the Jest framework: The test that a desired value exists in an array and the test that a variable contains a null value. In my example the relationship between the two files are as follows:

EA2.js exports their functions:

```
	module.exports ={ countVowels, uniquelistVowels };
```	
EA2.test.js imports the functions from EA2.js:

```
	const { countVowels, uniquelistVowels } = require('./EA2');
```	
A very simple version of a similar program can be found on the Jest documentation 'getting started' guide. [REF](https://jestjs.io/docs/getting-started).

Configurations of any jest program can be determined by both how jest is imported by either following the default functionality of Jest in a simple install, or by generating more refined specifics through a secondary JavaScript file or by specifying dependencies in the command prompt. 

the 'test' that's used specified by the script given to the package.json file is a simple means of initiating the Jest framework process by allowing    

```
	npm test
```	

To be the initating input.

When designing a test file for Jest, test cases must be preficed by:

```
	test(); 
```
Test() auxilary functions contain the process of checking for intended functionality and will return a true or false value displayed in the command prompt indicated by either a red exception(fail) or green check(pass). These two outcomes and the many different methods specific to Jest allow the user easy-to-use versitility in how they want to customize their test processes.  [REF](https://jestjs.io/docs/using-matchers). 



## What are the functionalities of Jest?

There are many functionalities of Jest, primarily the framework is used for unit testing in a very general sense. What makes this unit testing option unique is both it's diverse cross-library utility which allows it to be used on JavaScript programs that utilize other package tools. It also allows sub-modules to be imported specifically for needed functionality such as 'Jest-diff' and 'Jest-changed-files' which take the usefulness of those aspects of Jest and refines them. [REF](https://jestjs.io/docs/jest-platform). 

## When was Jest created?

I have no idea when exactly Jestjs.io was created, the earliest mention of the framework I could find is 2016 on their website. I know that Jest was created by facebook.[REF](https://jestjs.io/blog/2016/12/15/2016-in-jest). 

## Why did you select Jest?

I'm going to be completely transparent about this, Jest was not at all my first choice. I first made an attempt to use several other libraries as I really wanted to create another game like I did for my first exploration activity using Pygame. However, most of the set-up requirements for creating a game required the library have html formating, textScript, json or other additional means of integration, as well as an external web server on which to create and design. 
The programs I wrote specifically using the library phaser.js would not produce any output and after many hours of frustration I decided to start from scratch and choose the first working framework I could find. In this case, I went with the library reccomended on the CS2613 syllabus: Jest. 

## How did learning the Jest influence your learning of the language?

Very little. I learned far more from my consistent failures with other JavaScript libraries prior to choosing Jest, which was in very simple to use and understand after learning about unit testing in Introduction to Software Engineering. Because of this background, I understood the intended function of the Jest framework and was able to toss together a sample program EA2.js and create a test file by following the "Getting started" tutorial on the Jest websites documentation.

Looking back, I wish that I'd switched my Library/Framework choice away from game development far sooner as I'd probably have been able to provide a much more involved example utility program. I'd be interested in seeing how tools imported from jest can be used to effect specific outputs and how testing in the way provided by Jestjs can help effect conditions given in algorithms that I'm currently learning in other courses. 

### How was your overall experience with the package/library?

It worked as intended and was extremely easy to use. I'm considering using Jest to try and figure out why my phaser.js game isn't working. 

### Would you continue using this package/library?

Absolutely. Unit testing is a huge component in development and once I enter the work-force having a background in as many unit testing tools as I can would only be beneficial.  