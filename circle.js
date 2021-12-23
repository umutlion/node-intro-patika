function circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}
var c = new circle(2);
console.log(`Yarıçapı ${c.radius} olan dairenin alanı ${c.area().toFixed(2)}`);
