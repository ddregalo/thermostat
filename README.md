# Thermostat Program // Business Logic

Source: Makers Academy London (private course repo)

In this challenge, you will build the logic needed to model a simple thermostat.

### Challenge setup

Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

### Application User Notes

* Thermostat starts at 20 degrees (temp always in celsius).
* Increase the temperature with the '+' button
* Decrease the temperature with the '-' button
* The reset button sets the temperature to 20 degrees.
* Power saving mode on sets the max temperature to 25 degrees.
* Power saving mode off sets the max temperature to 32 degrees.
* You can search for the current weather in any city (worldwide) using the search field at the button of the page.

### API

* Weather data using api - https://openweathermap.org/
