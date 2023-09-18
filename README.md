# Binary Search Tree (BST) Implementation

This is a JavaScript implementation of a Binary Search Tree (BST). A Binary Search Tree is a data structure that allows for efficient insertion, deletion, and retrieval of elements, while maintaining a sorted order of elements. This implementation provides various methods to work with a BST, including insertion, deletion, traversal, and more.

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Methods](#methods)
  - [prettyPrint](#prettyprint)
  - [insert](#insert)
  - [deleteNode](#deletenode)
  - [find](#find)
  - [levelOrder](#levelorder)
  - [preorder](#preorder)
  - [inorder](#inorder)
  - [postorder](#postorder)
  - [height](#height)
  - [depth](#depth)
  - [isBalanced](#isbalanced)
  - [rebalance](#rebalance)

## Overview

This BST implementation consists of two main components: the `Node` object, which represents a node in the tree, and the `Tree` object, which represents the BST itself. The `Tree` object has various methods for manipulating and querying the tree.

## Usage

You can use this BST implementation as follows:

```javascript
// Create a new Binary Search Tree
const testArray = [10, 5, 15, 3, 7, 12, 18];
const testBST = Tree(testArray);

// Print the BST in a readable format
testBST.prettyPrint();

// Check if the tree is balanced
testBST.isBalanced();

// Perform tree traversal and print elements
printElements();

// Insert random numbers into the tree
insertRandomNumbersToTree(5, testBST);
testBST.prettyPrint();
testBST.isBalanced();
printElements();

// Rebalance the tree
testBST.rebalance();
testBST.prettyPrint();
testBST.isBalanced();
printElements();
```

## Methods

### prettyPrint

The `prettyPrint` method prints the tree in a human-readable format. It displays the tree's structure with indentation to represent levels.

```javascript
testBST.prettyPrint();
```

### insert

The `insert` method allows you to insert a new value into the BST while maintaining the BST property (left child is less than the parent, right child is greater than the parent).

```javascript
testBST.insert(25);
```

### deleteNode

The `deleteNode` method allows you to remove a specific value from the tree while preserving the BST property.

```javascript
testBST.deleteNode(10);
```

### find

The `find` method searches for a specific value in the tree and returns the node containing that value, or `null` if the value is not found.

```javascript
const node = testBST.find(15);
```

### levelOrder

The `levelOrder` method performs a level-order traversal of the tree and returns the elements in level-order.

```javascript
const elementsInLevelOrder = testBST.levelOrder();
```

### preorder

The `preorder` method performs a preorder traversal of the tree and returns the elements in preorder.

```javascript
const elementsInPreorder = testBST.preorder();
```

### inorder

The `inorder` method performs an inorder traversal of the tree and returns the elements in inorder.

```javascript
const elementsInInorder = testBST.inorder();
```

### postorder

The `postorder` method performs a postorder traversal of the tree and returns the elements in postorder.

```javascript
const elementsInPostorder = testBST.postorder();
```

### height

The `height` method calculates and returns the height of a specific node in the tree.

```javascript
const nodeHeight = testBST.height(15);
```

### depth

The `depth` method calculates and returns the depth of a specific node in the tree.

```javascript
const nodeDepth = testBST.depth(15);
```

### isBalanced

The `isBalanced` method checks whether the tree is balanced (the heights of the left and right subtrees of every node differ by at most 1).

```javascript
testBST.isBalanced();
```

### rebalance

The `rebalance` method rebuilds the tree to ensure it is balanced. This is useful if the tree becomes unbalanced after a series of insertions and deletions.

```javascript
testBST.rebalance();
```

Feel free to use and extend this BST implementation as needed for your JavaScript projects.
