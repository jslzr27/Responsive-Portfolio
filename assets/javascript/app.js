document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn',);
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top',
        hoverEnabled: true,
        toolbarEnabled: false
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });


  var linkedIn = document.querySelectorAll('#linkedin');
  var github = document.querySelectorAll('#github');

  $(linkedIn).on("click", function() {
      window.open("https://www.linkedin.com/in/jesus-salazar-484837173/");
  });

  $(github).on("click", function() {
    window.open("https://github.com/jslzr27");
  });