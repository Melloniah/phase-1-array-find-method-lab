const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record) {  
    function checkWin(game) {  
        return game.result === "W";
    }

    const bowlWin = record.find(checkWin);  

    if (bowlWin) {
        return bowlWin.year;  
    } else {
        return undefined;
    }
}
