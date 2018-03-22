describe('Thermostat', function() {

  var thermostat;

  beforeEach (function() {
    thermostat = new Thermostat();
  });

  it('starts off at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('sets min temp to 10 degrees', function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  it('sets max temp to 25 degrees as default', function() {
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('sets power saving mode to true as default', function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('expects current energy usage to be medium', function() {
    expect(thermostat.currEnergyUsage).toEqual("medium-usage");
  });

  describe('increase', function() {
    it('should increase the temperature by desired amount', function() {
      thermostat.increase(5);
      expect(thermostat.temperature).toEqual(25);
    });

    it('should alert if thermostat temp is at max temp and set to max temp', function() {
      thermostat.increase(50);
      spyOn(window, 'alert');
      expect(window.alert).toHaveBeenCalledWith("Max temp is 25");
    });
  });

  describe('decrease', function() {
    it('should decrease the temperature by desired amount', function() {
      thermostat.decrease(5);
      expect(thermostat.temperature).toEqual(15);
    });

    it('should alert if thermostat temp is at min temp and set to min temp', function() {
      thermostat.decrease(20);
      spyOn(window, 'alert');
      expect(window.alert).toHaveBeenCalledWith("Max temp is ??");
    });
  });

  describe('psmOn', function() {
    it('should set max temp to 25 degrees', function() {
      thermostat.psmOn();
      expect(thermostat.maxTemp).toEqual(25);
    });

    it('should set powerSavingMode to true', function() {
      thermostat.psmOn();
      expect(thermostat.powerSavingMode).toEqual(true);
    });
  });

  describe('psmOff', function() {
    it('should set max temp to 32 degrees', function() {
      thermostat.psmOff();
      expect(thermostat.maxTemp).toEqual(32);
    });

    it('should set powerSavingMode to true', function() {
      thermostat.psmOff();
      expect(thermostat.powerSavingMode).toEqual(false);
    });
  });

  describe('reset', function() {
    it('should reset the temp to 20 degrees', function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energyUsage', function() {
    it('should return the current energy usage based on temp', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
  });
});
