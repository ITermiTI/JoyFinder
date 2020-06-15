# JoyFinder
Web and Mobile App for creating and searching for small events in your area.

### Authors
[Paweł Owczarek](https://github.com/ITermiTI)
[Wojciech Nokielski](https://github.com/wnokielski)
[Filip Kozak](https://github.com/Swobodnenerki)

### Tech stack
1. Backend - Java + Spring + Hibernate + PostgreSQL
2. Web Frontend - JavaScript + React + Google Maps API + Google GeoCode API
3. Mobile - JavaScript + React Native + Google Maps API + Google GeoCode API

### Hosting
API and web app was hosted using Heroku to make API calls easier and to show our work. The web side of the application is available [HERE!](https://joy-finder-frontend.herokuapp.com/)


## The app
A user after successful login/registration is able to search for events in many different ways. He can search events in certain cities or by certain types or look in a Google Map to search events he or she is interested in and then taking part in them. Another option is to host own events specifing the name, type, date and location of the event. User has an option to put his event in Google Maps, so that other users can easily locate it and take part! In our app its easily to track events hosted by user and events he is participating and manage them with ease.



## Insides -> User Manual -> Application UI

Most of the views (90%) were designed in Figma before app development and its css code generator was used. Thanks to that the build of the UI was very simplified.

### Web part


![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/WebGues.PNG)
*Guest page of web application*

After following the link the user has two options of singing in and signing up. If you don't have an account you have to create one providing the info in the text fields.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/WebLogin.PNG)
*Login page*

The login page where you need to provide your login and password to use our app.


![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/WeYourEvents.PNG)
*The events you are hosting*

The main windows is surrounded by navigation bar.
To the left there are three options (from top to bottom):
1. The events you are hosting.
2. The events you are participating.
3. Host new event.

The top navigation bar has other options (from left to right):
1. Searching input used to search by chosen type.
2. Chosen type of searching, changed by the arrow to the right (in entered city, in entered type, all of the events).
3. Icon of a map to search events on the Google Map.
4. Personal details info and button to edit your details.

The image above shows your events. We can choose at what time period we want to show the events (three options: past, this week, in the future).

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/WebSearchBy.PNG)
*Searched in events in city "Wrocław"*

As the user choses his search type he enters the key text (e.g. the city he is looking in). The events are searched after clicking the search icon. 

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/WebSearchMap.PNG)
*Search events on the map*

The user can specify the city in which he wants to locate the events. Displayed events are only ones that haven't ended yet! After clicking the marker the event details are shown.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/WebCreate.PNG)
*Hosting your own event!*

The user can host his own event and specify the fields shown in the picture. The option to look for the event on the map is unlocked after clicking the search button (then appears the map to the right with the location). 

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/WebDetailsCreator.PNG)
*Host's event's details*

The event's details are shown in the picture above. As a host you can either cancel the event or edit its details with the very similar way as adding the event.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/WebDetailsTakePart.PNG)
*Searched event details*

As the user is not the host of the event he can only take part in the event or leave the event if he already takes part in it.

#### Other features

The user can also edit his account details including the password and list all the events he is participating. To his disposal he has also many other search type to look for a specific event he is interested in!




### Mobile part

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileGuest.PNG)

*Mobile app guest page*

The mobile app guest page is almost the same as the in the web app with the user having two options of signing in and singing up.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileLogin.PNG)

*Login page*

The login page is also almost the same where user has to provide his login and password.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileNavigation.PNG)

*Navigation between screens*

As the user successfully logs in, he can navigate between screens using drawer displayed by clicking the icon in the top appbar of the app. He has similar options to choose as in the web application:
1. Your events - the events the user is hosting.
2. Participation - the events that user takes part in.
3. Find by city - searching for events in specific city.
4. Find by type - searching for events by specific type.
5. Find in city maps - searching for events on the Google Map.
6. Find them all - searching for all the events.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileYourEvents.PNG)

*Your events list*

The events are displayed in simple list with some details shown. The user can specify of which time period he wants to display the events (same as in the web app, the options are: past, this week, in the future).

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileSearchType.PNG)

*Search events by type*

The search by type and search by city tabs are similar with and extra text input where you provide the text to look for. Current search text is displayed in the appbar.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileSearchMaps.PNG)

*Map with searched events*

The user can search the events on the map providing the city he is looking for. After clicking the marker some event details are displayed.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileAddEvent.PNG)

*Hosting an event*

The user can host his own event specifing its details.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileAddEventSearch.PNG)

*Hosted event location*

If the user chooses to enable searching the event on the Google Map he has to click the search button after which, the map appears showing the event's location.

![alt text](https://github.com/ITermiTI/JoyFinder/blob/master/Images/MobileAccount.PNG)

*Account details*

The user can also change his account details after clicking the image in the drawer menu.
