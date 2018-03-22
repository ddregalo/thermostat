function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25
  this.powerSavingMode = true
};

Thermostat.prototype.increase = function(degrees) {
  this.temperature += degrees;
};

Thermostat.prototype.decrease = function(degrees) {
  this.temperature -= degrees;
};
