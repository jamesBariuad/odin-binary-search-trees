const Node = (data, left = null, right = null) => {
  return { data, left, right };
};

const Tree = (array) => {
  let root = buildTree(array);

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  const insert = (value) => {
    let nodeToInsert = Node(value);
    if (root == null) {
      return (root = nodeToInsert);
    }
    let prev = null;
    let temp = root;
    while (temp != null) {
      if (temp.data == value) {
        return;
      }

      if (temp.data > value) {
        prev = temp;
        temp = temp.left;
      } else if (temp.data < value) {
        prev = temp;
        temp = temp.right;
      }
    }
    if (prev.data > value) {
      prev.left = nodeToInsert;
    } else {
      prev.right = nodeToInsert;
    }
  };

  const deleteNode = (root, dataToDelete) => {
    if (root == null) return root;

    if (root.data > dataToDelete) {
      root.left = deleteNode(root.left, dataToDelete);
      return root;
    } else if (root.data < dataToDelete) {
      root.right = deleteNode(root.right, dataToDelete);
      return root;
    }

    if (root.left == null) {
      let temp = root.right;
      delete root;
      return temp;
    } else if (root.right == null) {
      let temp = root.left;
      delete root;
      return temp;
    } else {
      let succeedingParent = root;

      let successor = root.right;
      while (successor.left != null) {
        succeedingParent = successor;
        successor = successor.left;
      }

      if (succeedingParent !== root) {
        succeedingParent.left = successor.right;
      } else {
        succeedingParent.right = successor.right;
      }

      root.data = successor.data;

      delete successor;
      return root;
    }
  };

  const find = (root, data) => {
    if (root == null || root.data == data) {
      return root;
    }

    if (root.data < data) {
      return find(root.right, data);
    }

    return find(root.left, data);
  };

  const levelOrder = () => {
    if (root == null) return;

    let queue = [];
    queue.push(root);
    let current;
    let outputText = "Level Order:";
    while (!queue.length == 0) {
      current = queue[0];
      // console.log(current.data);
      outputText += ` ${current.data}`;
      if (current.left != null) {
        queue.push(current.left);
      }
      if (current.right != null) {
        queue.push(current.right);
      }
      queue.shift();
    }
    return outputText;
  };

  const preorder = (root) => {
    let text = "Preorder:";
    const preorderAlgorithm = (root) => {
      if (root == null) return;

      text += ` ${root.data}`;
      preorderAlgorithm(root.right);
      preorderAlgorithm(root.left);
      return text;
    };

    return preorderAlgorithm(root);
  };

  const inorder = (root) => {
    let text = "Inorder:";
    const inorderAlgorithm = (root) => {
      if (root == null) return;
      inorderAlgorithm(root.left);
      text += ` ${root.data}`;
      inorderAlgorithm(root.right);
      return text;
    };
    return inorderAlgorithm(root);
  };

  const postorder = (root) => {
    let text = "Postorder:";
    const postorderAlgorithm = (root) => {
      if (root == null) return;
      postorderAlgorithm(root.left);
      postorderAlgorithm(root.right);
      text += ` ${root.data}`;
      return text;
    };
    return postorderAlgorithm(root);
  };

  const height = (nodeData) => {
    const node = find(root, nodeData);

    const findHeight = (node) => {
      if (node == null) return -1;

      const leftHeight = findHeight(node.left);
      const rightHeight = findHeight(node.right);

      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
    };

    const printResult = () => {
      if (node == null) return `Given node(${nodeData}) doesnt exist`;

      return `node(${nodeData}) height is ${findHeight(node)}`;
    };

    return printResult();
  };

  const depth = (nodeData, currentNode = root) => {
    if (currentNode == null) return;
    if (nodeData == currentNode.data) return 0;
    if (nodeData < currentNode.data)
      return depth(nodeData, currentNode.left) + 1;
    if (nodeData > currentNode.data)
      return depth(nodeData, currentNode.right) + 1;
  };

  const isBalanced = () => {
    const height = (root) => {
      if (root == null) return 0;
      return Math.max(height(root.left), height(root.right)) + 1;
    };

    const checkBalance = (root) => {
      if (root == null) return true;

      let lh = height(root.left);
      let rh = height(root.right);

      if (
        Math.abs(lh - rh) <= 1 &&
        checkBalance(root.left) == true &&
        checkBalance(root.right) == true
      )
        return "balanced: true";

      return "balanced: false";
    };

    return console.log(checkBalance(root));
  };

  const rebalance = () => {
    let array = [];
    const inorderAlgorithm = (root) => {
      if (root == null) return;
      inorderAlgorithm(root.left);
      array.push(root.data);
      inorderAlgorithm(root.right);
      return array;
    };
    const inorderArray = inorderAlgorithm(root);
    root = buildTree(inorderArray);
  };

  return {
    root,
    prettyPrint,
    insert,
    deleteNode,
    find,
    levelOrder,
    inorder,
    postorder,
    preorder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
};

const buildTree = (array) => {
  const noDuplicatesArray = [...new Set(array)];
  const sortedArray = noDuplicatesArray.sort((a, b) => a - b);

  const sortedArrayToBST = (array, start, end) => {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    const node = Node(array[mid]);

    node.left = sortedArrayToBST(array, start, mid - 1);
    node.right = sortedArrayToBST(array, mid + 1, end);
    return node;
  };
  let rootNode = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);

  //
  //   prettyPrint(rootNode);
  return rootNode;
};

const randomArrayGenerator = (n = 10) => {
  let array = [];
  for (i = 0; i <= n; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  return array;
};

const printElements = () => {
  console.log(testBST.levelOrder());
  console.log(testBST.preorder(testBST.root));
  console.log(testBST.inorder(testBST.root));
  console.log(testBST.postorder(testBST.root));
};

const insertRandomNumbersToTree = (n = 10,tree) => {
  for (let index = 0; index < n; index++) {
    tree.insert(Math.floor(Math.random() * 1000));
  }
};

const testArray = randomArrayGenerator();
const testBST = Tree(testArray);

testBST.prettyPrint();
testBST.isBalanced();
printElements();
// console.log(testBST)
insertRandomNumbersToTree(5,testBST);
testBST.prettyPrint();
testBST.isBalanced();
printElements();

testBST.rebalance();
testBST.prettyPrint();
testBST.isBalanced();
printElements();
