import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const entryPoint=document.querySelector(".cards");


axios
.get("https://api.github.com/users/AhmedSeragCodes")
.then (function(res){
  const data= res.data;
  entryPoint.appendChild(cardMaker(data));
})
.catch (function(err){
  console.log(err);
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const followersArray = ["juancaruizc", "Stone98", "cmirza", "Diegormnv", "AgentSamSA"];

followersArray.forEach(function(login){
axios.get(`https://api.github.com/users/${login}`)
.then (function(res){
    const dataTwo=res.data;
    const followerCard=cardMaker(dataTwo);
    entryPoint.append(followerCard);
  })
})
.catch(function(err){
  console.log(err);
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(data){

//creating individual card div
const cardDiv=document.createElement("div");
cardDiv.classList.add("card");

//creating avatar image
const avatarImg=document.createElement("img");
avatarImg.src=data.avatar_url;
cardDiv.append(avatarImg);

//creating card info div
const cardInfoDiv=document.createElement("div");
cardInfoDiv.classList.add("card-info");
cardDiv.append(cardInfoDiv);

//creating h3 users name 
const nameHeading=document.createElement("h3");
nameHeading.textContent=data["users name"];
nameHeading.classList.add("name");
cardInfoDiv.append(nameHeading);

//creating username
const usernameP=document.createElement("p");
usernameP.textContent=data["name"]
usernameP.classList.add("username");
cardInfoDiv.append(usernameP);

//creating location p
const locationP=document.createElement("p");
locationP.textContent="Location:"+data.location;
cardInfoDiv.append(locationP);

//creating profile p
const profileP=document.createElement("p");
profileP.textContent="Profile:";
cardInfoDiv.append(profileP);

//creating profile p link
const profPLink=document.createElement("a");
profPLink.href=data.html_url;
profPLink.textContent=data.html_url;
profileP.append(profPLink);

//creating followers p
const followersP=document.createElement("p");
followersP.textContent="Followers:"+data.followers;
cardInfoDiv.append(followersP);

//creating following p
const followingP=document.createElement("p");
followingP.textContent="Following:"+data.following;
cardInfoDiv.append(followingP);

//creating bio p
const bioP=document.createElement("p");
bioP.textContent="Bio:"+data.bio;
cardInfoDiv.append(bioP);

return cardDiv;
};

console.log(cardMaker());