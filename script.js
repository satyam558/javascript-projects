function grade(){
    let marks = parseInt(document.getElementById('marks').value);


    if(isNaN(marks) || marks<0) {
        document.getElementById('output').innerHTML=`invalid data`;
    }
    else if(marks>=90){
        document.getElementById('output').innerHTML=`grade A`;
    }
    else if(marks>=80){
        document.getElementById('output').innerHTML=`grade B`;
    }
    else if(marks>=50){
        document.getElementById('output').innerHTML=`grade C`;
    }
    else{
        document.getElementById('output').innerHTML=`sorry you are fail`;
    }
  }