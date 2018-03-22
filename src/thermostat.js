function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increase = function(degrees){
  this.temperature += degrees;
};
