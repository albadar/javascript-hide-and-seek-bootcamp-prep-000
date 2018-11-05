function getFirstSelector(f)  {
  return document.querySelector(f);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}

function increaseRankBy(n) {
  const rankedlist = document.querySelectorAll('.ranked-list');
  for (let i = 0, l = rankedlists.length; i < l; i++) {
    let children = rankedlists[i].children;

    for (let j = 0, k = rankedlists.length; j < k; j++) {
      let children[j].innerHTML = parseInt.(children[j].innerHTML) + n;
    }
  }
}