 let arr = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

const result = arr.slice().sort((a,b)=> { 
    if(a.health > b.health) return -1; 
    if(a.health == b.health) return 0; 
    if(a.health < b.health) return 1;
  });  

  export default result;
  


