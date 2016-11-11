function mapSort(map,func){
  if(func !== undefined){
      let result = [];
      for(let val of map) {
          result.push(val);
      }

      result.sort(func);
      return new Map(result)

  } else {
      let result = [];
      for (let key of map)
          result.push(key);

          result.sort(function (a, b) {
              if (a[0] < b[0]) {
                  return -1;
              } else if (a[0] > b[0]) {
                  return 1;
              } else {
                  return 0;
              }
      });
      return new Map(result);
  }
}

// let map = new Map();
// map.set(3,{age:13,hoby:"Skiing"});
// map.set(1,{name:"Pesho",age:29,color:"blue"});
// map.set(7,{name:"Gosho",age:3});
//  console.log(mapSort(map, (a, b)=>a[1].age - b[1].age));
module.exports = mapSort;