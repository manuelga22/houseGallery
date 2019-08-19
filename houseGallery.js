$('.viewPicture').hide();
let images = ["./images/entrance2.JPG","./images/Entrance.JPG",
"./images/Livingroom.JPG","./images/kitchen1.JPG","./images/kitchen2.JPG","./images/kitchen3.JPG",
"./images/kitchen4.JPG","./images/rooftop.JPG","./images/terrace.JPG","./images/yard1.JPG","./images/yard2.JPG",
"./images/ec2b489a-7d49-4d49-bfe7-469f3328b74e.JPG","./images/bathroom1.JPG","./images/Bedroom1.JPG","./images/bedroom2.JPG",
"./images/DinningRoom.JPG","./images/bedroom5.JPG","./images/mainLivingRoom.jpg"
,"./images/anotherLivingRoom.JPG"];
console.log(images.length);

$('.view-btn').click((e)=>{
  console.log('clicked', images[e.target.value]);
  getImageToDisplay(e.target.value);
})

function getImageToDisplay(index){
$(".viewPicture").append(`<img id="imageToDisplay" src=${images[index]}></img>`)
$(".viewPicture").append(`<button class="btn back-btn btn-primary" id="backBtn">BACK</button>`)
$('.viewPicture').show();
$(".view-btn").hide()
addFunctionalityToBackBtn();
}

function addFunctionalityToBackBtn(){
$('#backBtn').click(()=>{
  console.log('hey');
  $("#imageToDisplay").remove();
  $("#backBtn").remove();
  $('.viewPicture').hide();
  $(".view-btn").show();
})
}


