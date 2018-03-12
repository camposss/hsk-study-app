$(document).ready(function(){
    initiateApp();
  });
  //url=  http://data.hskhsk.com/lists/HSK%20Official%202012%20L1.txt
function initiateApp(){
  handleData();
  // $('.level').click(chooseLevel);
  makeButtons();
  $('.list-container').fadeIn('slow');
  $('.about-container').fadeIn('slow');
  $('.character').on('click',()=>pronounceCharacter());
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
        for(var j=0; j<data.length; j++){
          word_list_object[i].push(data[j]);
        }
        // console.log(word_list_object);
      }
    })
  }
}
function makeButtons(){
  console.log('we are making butons');
  var ul= $('<ul>').addClass('button-list');
  for (var i=1; i<7; i++){
    var button =$('<button>').addClass('level').text('HSK'+i).attr('index', i).on('click', (e)=>chooseLevel(e));
    ul.append(button);
    // console.log(ul);
  }
  $('.footer-div').append(ul);


}
function chooseLevel(e){
  $('.character').empty();
  // var index= $('.level').attr('index');
  var index= e.target.attributes.index.nodeValue;
  var randomNumber= Math.floor(Math.random()*word_list_object[index].length+1);
  $('.character').append(word_list_object[index][randomNumber]);
  // var hskCategory= $("<p>").addClass('hsk-category').text('HSK'+ index);
  $('footer').text('HSK' +index);
  pronounceCharacter();

}
function pronounceCharacter(){
  var character= $('.character').text();
  console.log(character);
  var msg = new SpeechSynthesisUtterance(character);
  msg.lang= 'zh-cmn';
  window.speechSynthesis.speak(msg);
  console.log(msg);
}