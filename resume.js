function myfuntion() {
  var navbar, bar11, bar2;
  navbar=document.getElementById('navbar-ul');
  navbar.style.display='block';
  bar11=document.getElementById('bar11');
  bar11.style.display='none';
  bar2=document.getElementById('bar2');
  bar2.style.display='block';
 
}



function myfuntion1() {
  var navbar2 ,bar2,bar11;
  navbar2=document.getElementById('navbar-ul');
  navbar2.style.display='none';
  bar2=document.getElementById('bar2');
  bar2.style.display='none';
  bar11=document.getElementById('bar11');
  bar11.style.display='block';

}



// ---------contact-page-----------------
function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "mdmozammil112002@gamil.com",
    Password : "",
    To : 'www.mdmozammil@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New Contact Form Enquiry",
    Body : "Name:" + document.getElementById("name").value
            + "<br> Email:" + document.getElementById('email').value
            + "<br> phone:" + document.getElementById('phone').value
            + "<br> Message:" + document.getElementById('message').value
}).then(
  message => alert("sent message succesfully")
);
}
