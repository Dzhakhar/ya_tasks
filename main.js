Array.prototype.genius = function (split) {
  this.map = [];
  this.result;

  this.dataIntoMap = function (map, reverse){
    if(!reverse){
      for(var i = 0; i < this.length; i++){
        map[this[i].to] = this[i];
        map.length++;
      }
      return map;
    } else {
      for(var i = 0; i < this.length; i++){
        map[this[i].from] = this[i];
        map.length++;
      }
      return map;
    }
  }

  this.resultConcat = function (p1, p2){
    if(p2.transport === 'air'){
      var air = "flight " + p2.details.flight + " from " + p2.from + " airport " + "to" + " " + p2.to;
    }
    else {
      var air = ""
    }

    if(p2.transport === 'train'){
      var train = "train " + p2.details.flight + " from " + p2.from + " to " + p2.to
    }
    else {
      var train = "";
    }

    if(p2.details.comment){
      var comment = p2.details.comment;
    }
    else {
      var comment = "";
    }

    var res = "Take " + train + air + ". Seat " + p2.details.seat + ". " + comment + ". ";
    (this.result) ? this.result += res : this.result = res;
  }

  this.mapSort = function(m){
    var start;

    for(var i in m){
      if(m[m[i].from] === undefined){
        start = m[i];
        break;
      }
    }

    this.resultConcat(start, start);

    var mapReverse = [];
    var reversedMap = this.dataIntoMap(mapReverse, true);

    for(var i in reversedMap){
      // if(reversedMap[i].from !== start.from){
        if(reversedMap[reversedMap[i].to]){
          try {
            this.resultConcat(start, reversedMap[start.to]);
            start = reversedMap[start.to];
          } catch (e) {
            console.log(e);
          }
        }
      // }
    }
  }

  this.go = function(){
    this.dataIntoMap(this.map);
    this.mapSort(this.map);
    
    var result = this.result;
    this.result = [];
    this.map = [];

    return result;
  }

  return this.go();
};
