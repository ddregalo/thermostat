function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25
  this.powerSavingMode = true
  this.currEnergyUsage = "medium-usage"
};

Thermostat.prototype.increase = function() {
  if ((this.temperature + 1) > this.maxTemp) {
    this.temperature = this.maxTemp
    alert(`Max temp is ${this.maxTemp}`);
  } else {
  this.temperature ++;
  };
};

Thermostat.prototype.decrease = function() {
  if (this.temperature - 1 < this.minTemp) {
    this.temperature = this.minTemp
    alert("Min temp is 10");
  } else {
  this.temperature --;
  };
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
