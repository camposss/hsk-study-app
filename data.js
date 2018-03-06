$(document).ready(function(){
    initiateApp();
    console.log('we are connected');
  });
  
  function initiateApp(){
    var url= "http://data.hskhsk.com/lists/HSK%20Official%202012%20L2.txt";
    $.ajax({
      url: url,
      dataType: "text",
      method: "get",
      success: function(data){
        data= data.split(/\r\n|\r|\n/g);
        handleData(data);
      }
    })
      
  }
  function handleData(data){
    var hsk2list= [];
    for(var i=0; i<data.length; i++){
      console.log(data[i]);
      hsk2list.push(data[i]);
      var li= $('<li>').text(data[i]);
      $('.word-list').append(li);
      
    }
    console.log(hsk2list);

  }