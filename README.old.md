# dde-dashboard

The Data Demographic Exchange is an application developed by baobab health to support information continuity for patients. It is characterised by a database of unique patient ids in the main server sitting at KCH in Lilongwe.

This main server communicates to proxy servers at health facilities with BaobabHealth EMR'S by allocationg to them ids. So that a patient is assigned this id during registration upon a visit to the health facility. The DDE also works by acting as a sharing module for patients demographics.

The proxy servers at the facility are able to communicate with the main server at KCH, such that if a patient visits a facility and their details match to those that already in the proxy server. The proxy server queries the main DDE server to seek authentication and if succesful the proxy server pulls the demographics from the main server.

This dashboard aims to show the different statics of facilities using the DDE application, the dashboard will show the different facilities in Malawi that use the DDE application. The number of total ids assigned to a facility and the ids assigned to a facility. And also the rate of ids assigned in a day, week and a month.

The entire dashboard has been developed using react js, with react-google maps library for rendering the map showing facilities with DDE application. Victory charts another react library has been used to render the line graphs and charts needed.
