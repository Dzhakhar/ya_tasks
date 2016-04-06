var map = [];
var result;

function dataIntoMap(arr, map, reverse){
  if(!reverse){
    for(var i = 0; i < arr.length; i++){
      map[arr[i].to] = arr[i];
      map.length++;
    }
    return map;
  } else {
    for(var i = 0; i < arr.length; i++){
      map[arr[i].from] = arr[i];
      map.length++;
    }
    return map;
  }
}

function resultConcat(p1, p2, split){
  if(p2.transport === 'air'){
    var air = "flight " + p2.details.flight + " from " + p2.from + " airport " + "to" + " " + p2.to;
  }
  else {
    var air = "***"
  }

  if(p2.transport === 'train'){
    var train = "train " + p2.details.flight + " from " + p2.from + " to " + p2.to
  }
  else {
    var train = "***";
  }

  if(p2.details.comment){
    var comment = p2.details.comment;
  }
  else {
    var comment = "***";
  }

  if(split){
    var res = "Take " + train + air + ". Seat " + p2.details.seat + ". " + comment + ". ///";
    (result) ? result += res.replace("***", "").split("///") : result = res.replace("***", "").split("///");
  } else {
    var res = "Take " + train + air + ". Seat " + p2.details.seat + ". " + comment + ". ";
    (result) ? result += res.replace("***", "") : result = res.replace("***", "");
  }
}

function mapSort(m, arr, split){
  var start;
  for(var i in m){
    if(m[m[i].from] === undefined){
      start = m[i];
      break;
    }
  }
  var mapReverse = [];
  var reversedMap = dataIntoMap(arr, mapReverse, true);
  console.log("from: " + start.from + ", to: " + start.to);
  console.log("^^ start ^^");

  for(var i in reversedMap){
    if(reversedMap[i].from !== start.from){
      if(reversedMap[reversedMap[i].to]){
        try {
          if(split){
            resultConcat(start, reversedMap[start.to], true);
          } else {
            resultConcat(start, reversedMap[start.to]);
          }
          start = reversedMap[start.to];
        } catch (e) {
          console.log(e);
        }
      } else {
        var finish = reversedMap[i];
      }
    }
  }
  console.log("from: " + finish.from + ", to: " + finish.to);
}
