class Ship {
  constructor(startX, startY, length, orientation = "horizontal"){
    this.startX = startX;
    this.startY = startY;
    this.length = length;
    this.__hits = [];
    this.__hits.length = length;
    this.__hits = this.hits.fill(false);
  }

  

}

module.exports = Ship;