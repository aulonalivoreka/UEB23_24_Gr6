$(document).ready(function(){
    $("#1").click(function(){
      $("#test").toggle(1000);
    });
  });


  $(document).ready(function() {

    $("#pr1").hide();
    });
    
    $('#2').click(function(){
      $('#pr2').hide();
      {
        alert("this is page 1");
      }
      $('#pr1').show(1000);
      
      });
    $('#3').click(function(){
      $('#pr1').hide();
      {
        alert("this is page 2");
      }
        $('#pr2').show(1000);
      });

$(document).ready(function(){
    var isTextVisible = false;

    $('#4').click(function(){
      if (isTextVisible) {
        $('#fade').fadeTo('slow', 1); 
      } else {
        $('#fade').fadeTo('slow', 0.1); 
      }
      isTextVisible = !isTextVisible; 
    });
  });
  $(document).ready(function(){
    $("#5").click(function(){
      $("#textfade").fadeToggle(1000);
    });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

$(document).ready(function(){
    $("#inner").hover(function(){
      var div = $("#right");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });


  var emptyRow = "<tr><td colspan='5' class='text-center'> No Records Available</td></tr>";

  $(document).ready(function () {
      debugger;
      $("#tblData tbody").append(emptyRow); 

      $("#btnAdd").click(function () { 
          var name = $("#txtName").val().trim();
          var city = $("#txtCity").val().trim();
          var mobile = $("#txtMobile").val().trim();

          if (name != "" && city != "" && mobile != "") { 
              debugger;
              if ($("#tblData tbody").children().children().length == 1) {
                  $("#tblData tbody").html("");
              }
              var srNo = $("#tblData tbody").children().length + 1;
              
              var dynamicTr = "<tr><td>"+srNo+"</td><td>" + name + "</td><td>" + city + "</td><td>" + mobile + "</td><td> <button class='btn btn-danger btn-sm' > delete </button> </td></tr>";
              debugger; 
              $("#tblData tbody").append(dynamicTr); 
              $("#txtName").val("");
              $("#txtCity").val("");
              $("#txtMobile").val("");
              $(".btn-sm").click(function () { 
                  debugger;
                  $(this).parent().parent().remove();
                  if ($("#tblData tbody").children().children().length == 0) {
                      $("#tblData tbody").append(emptyRow);
                  }
              });
          } else {
              alert("Please provide values");
          }
      });

  });
