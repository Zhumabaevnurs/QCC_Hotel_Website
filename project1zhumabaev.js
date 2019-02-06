// for loop
var hotels =['Plaza', 'Regis New York', 'Baccarat Hotel', 'Four Seasons'];
var Plaza=0; // starting booked number for hotel 1
var RegisNewYork= 0;
var BaccaratHotel= 0;
var FourSeasons=0;
var userRandom ='';
var arrayLength =hotels.length;
var numberUsers= 10;
console.log(arrayLength);
var i; // counter in your for loop
for(i=1; i<=numberUsers;i++){
  userRandom=Math.ceil(Math.random()* hotels.length);// this line randomly generate number between 1-4
  console.log(userRandom);
  //if else
  if (userRandom==1){
    Plaza++;
  }
  else if (userRandom==2) {
    RegisNewYork++;
  }
  else if (userRandom==3) {
    BaccaratHotel++;
  }
  else if (userRandom==4) {
    FourSeasons++;
    console.log(FourSeasons);
  }else {
    console.log('');
  }
}

// random number
/*var hotelSelected = hotels[Math.floor(Math.random()*hotel.length)];
console.log(hotels);*/

//function
function hotel(name, room, booked){
  this.name = name;
  this.rooms = room;
  this.booked = booked;
  this.checkAvailability = function(){
    return this.rooms - this.booked;
  };
}
var plaza = new hotel('Plaza', 120, Plaza);
var regisNewYork = new hotel('Regis New York',100, RegisNewYork);
var baccaratHotel = new hotel('Baccarat Hotel', 110, BaccaratHotel);
var fourSeasons = new hotel('Four Seasons', 95, FourSeasons);

console.log(FourSeasons);
document.getElementById('hotel1').innerHTML= '<div id="textWrap">'+plaza.name + '<br/> Capacity: '+plaza.rooms +'<br/> Booked: ' +plaza.booked +'<br/>' + plaza.checkAvailability() +' rooms still available'+ 'Hotel Rating:&#x272E &#x272E &#x272E &#x272E &#x272E' +'<p id="popUp1"><a href="#reserve">Sign Up</a></p></div>';
document.getElementById('hotel2').innerHTML='<div id="textWrap">'+regisNewYork.name + '<br/> Capacity: '+regisNewYork.rooms +'<br/> Booked: ' +regisNewYork.booked +'<br/>' + regisNewYork.checkAvailability() +' rooms still available'+'Hotel Rating:&#x272E &#x272E &#x272E &#x272E &#x272E' +'<p id="popUp2"><a href="#reserve">Sign Up</a></p></div>';
document.getElementById('hotel3').innerHTML='<div id="textWrap">'+baccaratHotel.name + '<br/> Capacity: '+baccaratHotel.rooms +'<br/> Booked: ' +baccaratHotel.booked +'<br/>' + baccaratHotel.checkAvailability() +' rooms still available'+'Hotel Rating:&#x272E &#x272E &#x272E &#x272E &#x272E'+'<p id="popUp3"><a href="#reserve">Sign Up</a></p></div>';
document.getElementById('hotel4').innerHTML='<div id="textWrap">'+fourSeasons.name + '<br/> Capacity: '+fourSeasons.rooms +'<br/> Booked: ' +fourSeasons.booked +'<br/>' + fourSeasons.checkAvailability() +' rooms still available'+'Hotel Rating:&#x272E &#x272E &#x272E &#x272E &#x272E '+'<p id="popUp4"><a href="#reserve">Sign Up</a></p></div>';

//create the html window for the messsage
var msg = '<div id="event1"><div class="header"><a id="close" href="#"> &#10060 </a></div>';
msg += '<div id="msgNote"><h3>Summer Sale Only For You!!!</h3>';
msg += '<image id="img" src="images/event.jpg">';
msg += '<hr/>Use this code to get discount (BFOE097)!!!</div></div>';
console.log(msg);
// create new division for the for the background color
var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
console.log(elNote);
// need to attach elNote to the body of your HTML document
document.body.appendChild(elNote);
//
//create a function to close the note messsage
function dismissNote(){
  document.body.removeChild(elNote);
}
var elClose=document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);
//Scroll EVENT
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("event2").style.display = "block";
    } else {
        document.getElementById("event2").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
///////////////
//Event3
var rsv= '<div id="event3"><div class="header"><a id="close2" href="#"> &#10060 </a></div>'
rsv += '<form id="rvsForm>"';
rsv += '<br/><br/>';
rsv +='First Name: <input type:"text" name="firstname" size="20" maxlength placeholder="Enter first name"/>'
rsv += '<br/><br/>';
rsv +='Last Name: <input type:"text" name="lastname" size="20" maxlength placeholder="Enter last name"/>'
rsv += '<br/><br/>';
rsv +='E-mail: <input type:"text" name="email" size="20" maxlength placeholder="Enter E-mail"/>'
rsv += '<br/><br/>';
rsv +='Phone Number: <input type:"text" name="phonenumber" size="20" maxlength placeholder="Phone Number"/>'
rsv += '<br/><br/>';
rsv += '<p>Rooms:</p><select>';
rsv += '<option value="room1">1</option>';
rsv += '<br/><br/>';
rsv += '<option value="room2">2</option>';
rsv += '<br/><br/>';
rsv += '<option value="room3">3</option>';
rsv += '<br/><br/>';
rsv += '<option value="room4">4</option>';
rsv += '<br/><br/>';
rsv += '<option value="room5">5</option>';
rsv += '<br/><br/>';
rsv += '<p>Rooms:</p><select>';
rsv += '<br/><br/><br/><br/>';
rsv += '<lable> Arrive Date: </lable>';
rsv += '<br/><br/>';
rsv += '<input type="date" name="arrive"/>';
rsv += '<br/><br/>';
rsv += '<lable> Departure Date: </lable>';
rsv += '<br/><br/>';
rsv += '<input type="date" name="depart"/>';
rsv +='<p>Please let us know if you have any special requirements</p></div>';
//rvs +='<input type="text" name="comment" cols="30" rows="8" placeholder="Enter Your Comments"></div>'
//rvs +='<textarea name="textarea" cols="30" rows="8" placeholder="Enter your comments"></textarea></form>';



// create new division for the for the background color
var elReservation = document.createElement('div');
elReservation.setAttribute('id', 'reserve');
elReservation.innerHTML = rsv;
// need to attach elNote to the body of your HTML document
document.body.appendChild(elReservation);
//
//get popUp location
function reservePopUp(){
var book = document.getElementById('reserve').style.display='block';
return book;
}
// create function to close to reserve window
function closeReserve(){
  document.getElementById('reserve').style.display='none';
}
var hotelOne=document.getElementById('popUp1');
var hotelTwo=document.getElementById('popUp2');
var hotelThree=document.getElementById('popUp3');
var hotelFour=document.getElementById('popUp4');
hotelOne.addEventListener('click',reservePopUp, false);
hotelTwo.addEventListener('click',reservePopUp, false);
hotelThree.addEventListener('click',reservePopUp, false);
hotelFour.addEventListener('click',reservePopUp, false);
var elClose2=document.getElementById('close2');
elClose2.addEventListener('click', closeReserve, false);
