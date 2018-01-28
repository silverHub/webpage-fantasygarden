// var onAnimationEndEvent =
//   'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function persistEmail() {
  var emailAddress = $('#email')[0].value;
  var emailList = firebase.database().ref('emails');
  var newEmailRef = emailList.push();
  return newEmailRef.set(emailAddress);
}

function handleEmailPersisted(msgContainer, emailForm) {
    msgContainer.height('auto').toggleClass('fadeIn');
    emailForm.toggleClass('delayed-half zoomIn zoomOut');
}

$(function() {
  var emailForm = $('#emailForm');
  var msgContainer = $('.messagebox');
  $('.hero').addClass('fadeInDown');

  emailForm.on('submit', function handleEmailSubmit(event) {
    event.preventDefault();
    persistEmail();
    handleEmailPersisted(msgContainer, emailForm);
  });
});
