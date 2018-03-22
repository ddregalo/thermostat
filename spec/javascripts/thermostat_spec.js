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
    it('should increase the temperature by 1 degree', function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it('should alert if thermostat temp is at max temp and set to max temp', function() {
      spyOn(window, "alert");
      for (i=0; i<=6; i++) {
        thermostat.increase();
      };
      expect(window.alert).toHaveBeenCalledWith("Max temp is 25");
    });
  });

  describe('decrease', function() {
    it('should decrease the temperature by 1 degree', function() {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it('should alert if thermostat temp is at min temp and set to min temp', function() {
      spyOn(window, 'alert');
      for (i=0; i<=11; i++) {
        thermostat.decrease();
      };
      expect(window.alert).toHaveBeenCalledWith("Min temp is 10");
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
    it('should return medium energy usage based on temp', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it('should return low energy usage based on temp', function() {
      for (i=0; i<=5; i++) {
        thermostat.decrease();
      };
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('should return high energy usage based on temp', function() {
      thermostat.psmOff();
      for (i=0; i<=7; i++) {
        thermostat.increase();
      };
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
