const heightCalculator = (tree) => {
  if (tree === null) return 0;
  return Math.max(
    1 + heightCalculator(tree.left),
    1 + heightCalculator(tree.right),
  );
};

module.exports = heightCalculator;
