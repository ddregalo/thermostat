function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25
  this.powerSavingMode = true
  this.currEnergyUsage = "medium-usage"
};

Thermostat.prototype.increase = function(degrees) {
  if (this.temperature + degrees > this.maxTemp) {
    this.temperature = this.maxTemp
    alert("Max temp is 25");
  };
  this.temperature += degrees;
};

Thermostat.prototype.decrease = function(degrees) {
  this.temperature -= degrees;
};

Thermostat.prototype.psmOn = function() {
  this.maxTemp = 25
  this.powerSavingMode = true
};

Thermostat.prototype.psmOff = function() {
  this.maxTemp = 32
  this.powerSavingMode = false
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
};

Thermostat.prototype.energyUsage = function() {
  var usageLevel = ["low-usage", "medium-usage", "high-usage"]
  if (this.temperature < 18) {
    return this.currEnergyUsage = usageLevel[0];
  } else if (this.temperature >= 25) {
    return this.currEnergyUsage = usageLevel[2];
  } else {
    return this.currEnergyUsage = usageLevel[1];
  };
};
