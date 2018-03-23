$(document).ready( function() {

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
});
