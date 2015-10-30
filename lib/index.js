// Is 'test' between 'start' and 'end' ?
var between = function(start, end, test) {
  return test > start && test < end;
};

var transform = function(rect) {
  return {
    top: rect.y,
    bottom: rect.y - rect.height,
    left: rect.x,
    right: rect.x + rect.width,
  };
};

var inside = function(a, b) {
  return between(a.left, a.right, b.left) || between(a.left, a.right, b.right) ||
         between(a.bottom, a.top, b.top) || between(a.bottom, a.top, b.bottom);
};

module.exports = function(a, b) {
  a = transform(a);
  b = transform(b);
  return inside(a, b) || inside(b, a);
};
