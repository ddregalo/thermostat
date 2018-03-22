function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increase = function(degrees) {
  this.temperature += degrees;
};

Thermostat.prototype.decrease = function(degrees) {
  this.temperature -= degrees;
};
