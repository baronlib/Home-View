# HomeView2

A simple Angular app to overlay various information over an existing web page. For my particular use case, the existing web page is the BlueIris (https://blueirissoftware.com) UI3 interface for showing security camera feeds on a monitor hooked up to a Raspberry Pi, and the information is the instanteous output from my home solar panels, as well as current UV index for my location.

The app is designed to take any source of data for display, via a generic parameter source model, and supports up to four different values - one for each corner of the screen. I plan to add parameter sources to show the min/max forecast temperature in the bottom left/right corners.

![Example usage with BlueIris UI3 Viewing Station](example.png)
