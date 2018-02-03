
function persistEmail() {
  var emailAddress = $('#email')[0].value;
  var emailList = firebase.database().ref('emails');
  var newEmailRef = emailList.push();
  return newEmailRef.set(emailAddress);
}

function handleEmailPersisted(msgContainer, emailForm) {
    msgContainer.height('auto').toggleClass('fadeIn');
    emailForm.hide();
}

$(window).on("load",function loadContent() {
    $('.animation-container').addClass('bg-loaded');
});

$(function() {
  var emailForm = $('#emailForm');
  var msgContainer = $('.messagebox');

  emailForm.on('submit', function handleEmailSubmit(event) {
    event.preventDefault();
    persistEmail();
    handleEmailPersisted(msgContainer, emailForm);
  });
});
