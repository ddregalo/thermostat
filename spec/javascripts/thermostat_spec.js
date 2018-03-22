describe('Thermostat', function() {

  var thermostat;

  beforeEach (function() {
    thermostat = new Thermostat();
  });

  it('starts off at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('increase', function() {
    it('should increase the temperature by desired amount', function() {
      thermostat.increase(5);
      expect(thermostat.temperature).toEqual(25);
    });

    it('should alert if thermostat temp is at max temp', function() {
      thermostat.increase(50);
      spyOn(window, 'alert');
      expect(window.alert).toHaveBeenCalledWith("Max temp is ??");
    });
  });

  describe('decrease', function() {
    it('should decrease the temperature by desired amount', function() {
      thermostat.decrease(5);
      expect(thermostat.temperature).toEqual(15);
    });

    it('should alert if thermostat temp is at min temp', function() {
      thermostat.decrease(20);
      spyOn(window, 'alert');
      expect(window.alert).toHaveBeenCalledWith("Max temp is ??");
    });
  });
});
