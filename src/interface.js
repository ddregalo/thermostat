$(document).ready( function() {

  var city = 'London'
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

  function showTemp() {
    $('#tempdisplay').text(`${thermostat.temperature}` + "℃");
    $('#tempdisplay').attr("class", thermostat.energyUsage());
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric&APPID=c34768cec566dee714d9eb7c3c2bed97', function(city) {
    $('#weather').html(city.main['temp'])
  });
});
