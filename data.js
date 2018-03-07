$(document).ready(function(){
    initiateApp();
  });
  //url=  http://data.hskhsk.com/lists/HSK%20Official%202012%20L1.txt
function initiateApp(){
  handleData();
    
}
var word_list_object = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
}
async function handleData(){
  for(var i=1; i<7; i++){
    var url= `http://data.hskhsk.com/lists/HSK%20Official%202012%20L${i}.txt`;
    const response  =await $.ajax({
      url: url,
      dataType: "text",
      method: "get",
      success: function(data){
        data= data.split(/\r\n|\r|\n/g);
        console.log('this is i', i);
        for(var j=0; j<data.length; j++){
          word_list_object[i].push(data[j]);
          // temp_arr.push(data[i]);
        }
        console.log(word_list_object);
      }
    })
  }
}