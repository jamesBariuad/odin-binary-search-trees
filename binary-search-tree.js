const Node = (data, left = null, right = null) => {
  return { data, left, right };
};

const Tree = (array) => {
  const root = buildTree(array);

  const prettyPrint = (node, prefix = "", isLeft = true) => {
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
      return root= nodeToInsert;
    }
    let prev = null;
    let temp = root;
    while (temp != null) {
      if(temp.data == value){
        return
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
       (prev.left = nodeToInsert);
    } else {
       (prev.right = nodeToInsert);
    }
  };

  return { root, prettyPrint, insert };
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

const testBST = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
testBST.prettyPrint(testBST.root);
testBST.insert(0.1);
(testBST.prettyPrint(testBST.root));
// const test = Tree('a')
// console.log(testBST.insert('a'))
