# CineMont
An innovative cinema website, where you can see available movies and buy tickets as if you were physically there!

One of the main features of this website is the movie selection page, where I simulate a hall where we can see all posters and "walk" through the hall by clicking an arrow icon or using the mouse wheel.

![image](https://user-images.githubusercontent.com/77022076/117722875-7b7e0800-b196-11eb-9e22-f08fa449edbb.png)

To archieve this effect I used the following code for each wall in the hall, where we define a perspective value and origin in the parent <div> and do a rotation transform in the child <div> preserving the 3d shape. 

![image](https://user-images.githubusercontent.com/77022076/117723875-d3693e80-b197-11eb-90e0-706eeb19ba57.png)

Also I had to use this code for each image to fix a bugg that made my images blurry, especially on chrome.

![image](https://user-images.githubusercontent.com/77022076/117724175-41156a80-b198-11eb-9a43-c8acc92a9ebe.png)


Another feature of my website is the seat selection page, where we can see a 3d representation of the theater and we can change the viewer perspective by hovering over the seat rows. Also we can se the trailer video for the selected movie on the screen.

![image](https://user-images.githubusercontent.com/77022076/117724661-eb8d8d80-b198-11eb-87b2-0754ba15169f.png)

![image](https://user-images.githubusercontent.com/77022076/117724916-46bf8000-b199-11eb-9648-ede4550f3a0a.png)

To archive this, we use the same concept of perspective. In this case we have a main container and make all our rows point to the top center af the container, rotate x axis, and then each seat rotates again the x axis but in the other direction, to see all seats "vertical".

![image](https://user-images.githubusercontent.com/77022076/117726200-17aa0e00-b19b-11eb-898c-8de80cbec9c8.png)

For this project I used the Movie Data Base API https://developers.themoviedb.org/3/getting-started, in the data.js file we can find the code for the data fetch, and all information with the trailer, and occupied seats for each movie are stored in the localstorage.

To archive this I created two classes, Movie and Seats. When we open the seat selection page, we create a new Movie class object and then all seats are added dinamically and stored in the movie class. For each seat a new Seat class object was created. Then when we are ready to checkout, we convert the movie object to JSON string and and save it in local storage. Then if we return to the seat selection page for that movie the code gets the JSON string from the local storage, converts it to object, loops through the seats, check which ones are occupied, and toggles the seat status for each occupied seat.

![image](https://user-images.githubusercontent.com/77022076/117728702-9d7b8880-b19e-11eb-8295-34f0c169b2f2.png)


![image](https://user-images.githubusercontent.com/77022076/117728607-8341aa80-b19e-11eb-888a-1c3f1494a1b0.png)
![image](https://user-images.githubusercontent.com/77022076/117728735-ac623b00-b19e-11eb-9aa8-86cc8c91df6a.png)

Visit 
