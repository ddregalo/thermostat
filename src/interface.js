$(document).ready( function() {

  var thermostat = new Thermostat();

  $('#tempdisplay').text(thermostat.temperature);

  $('#psmOff').click(function() {
    thermostat.psmOff();
    $('#powerSavingModeIs').text("OFF");
  });

});
