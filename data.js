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
const word_list_object = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
}
async function handleData(){
  for(let i=1; i<7; i++){
    let url= `http://data.hskhsk.com/lists/HSK%20Official%202012%20L${i}.txt`;
    const response  =await $.ajax({
      url: url,
      dataType: "text",
      method: "get",
      success: function(data){
        data= data.split(/\r\n|\r|\n/g);
        for(let j=0; j<data.length; j++){
          word_list_object[i].push(data[j]);
        }
      }
    })
  }
}
function makeButtons(){
  let ul= $('<ul>').addClass('button-list');
  for (let i=1; i<7; i++){
    let button =$('<button>').addClass('level').text('HSK'+i).attr('index', i).on('click', (e)=>chooseLevel(e));
    ul.append(button);
  }
  $('.footer-div').append(ul);


}
function chooseLevel(e){
  $('.character').empty();
  let index= e.target.attributes.index.nodeValue;
  let randomNumber= Math.floor(Math.random()*word_list_object[index].length+1);
  $('.character').append(word_list_object[index][randomNumber]);
  $('footer').text('HSK' +index);
  pronounceCharacter();

}
function pronounceCharacter(){
  let character= $('.character').text();
  let msg = new SpeechSynthesisUtterance(character);
  msg.lang= 'zh-cmn';
  window.speechSynthesis.speak(msg);
}