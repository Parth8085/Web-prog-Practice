const buttons = document.querySelectorAll('.button'); // NodeList (zero or more)

buttons.forEach(button => {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log('clicked', e);
  });
});
