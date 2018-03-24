$(document).ready( function() {
  var findCity = "London";
  var thermostat = new Thermostat();
  showTemp();

  $('#psmOff').click(function() {
    thermostat.psmOff();
    $('#powerSavingModeIs').text("off");
  });

  $('#psmOn').click(function(){
    thermostat.psmOn();
    $('#powerSavingModeIs').text("on");
  });

  $('#increase').on("click", function() {
    thermostat.increase();
    showTemp();
  });

  $('#decrease').on("click", function() {
    thermostat.decrease();
    showTemp();
  });

  $('#reset').on("click", function() {
    thermostat.reset();
    showTemp();
  });

  $('#findcity').submit(function(event) {
    event.preventDefault();
    var findCity = $('#city').val();
    loadCityTemp(findCity);
    $('#displaycity').text(`The Weather in ${findCity} is  `);
  });

  function showTemp() {
    $('#tempdisplay').text(`${thermostat.temperature}` + "℃");
    $('#tempdisplay').attr("class", thermostat.energyUsage());
  };

  function loadCityTemp(city) {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric&APPID=c34768cec566dee714d9eb7c3c2bed97', function(city) {
      $('#weather').html(city.main['temp'] + "℃");
    });
  };
});

//
//
// $('#myForm').submit(function() {
//     // get all the inputs into an array.
//     var $inputs = $('#myForm :input');
//
//     // not sure if you wanted this, but I thought I'd add it.
//     // get an associative array of just the values.
//     var values = {};
//     $inputs.each(function() {
//         values[this.name] = $(this).val();
//     });
//
// });
