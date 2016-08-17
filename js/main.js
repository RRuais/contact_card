  $(document).ready(function () {
      function add_description() {
          $("h3").click(function () {
              $(".contact_card p").toggle();
          });
      }
      $("form").submit(function () {
          var first = $('#first_name').val();
          var last = $('#last_name').val();
          var descr = $('#description').val();
          $("#right_body").append("<div class='contact_card'>" + "<h1>" + first + " " + last + "</h1>" + "<h3>Click Here For Description!</h3>" + "<p>" + descr + "</p>" + "</div>");
          $(".contact_card p").hide();
          
          //clears inputs
          $("#first_name").val("");
          $("#last_name").val("");
          $("#description").val("");
          
          add_description();
          return false;
      });
  });