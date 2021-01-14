import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


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

const ahmedsGithub=axios.get("https://api.github.com/users/AhmedSeragCodes")
.then(function(res){
  const ahmedData=res.data;
  githubCardMaker(ahmedData);
})
.catch(function(err){
  console.log(err);
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

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


function githubCardMaker(data){

  //Body Cards Div
  const cards=document.querySelector(".cards");

  //Div Card
  const card=document.createElement("div");
  card.classList.add("card");
  cards.append(card);

  //Avatar Image 
  const avatarImage=document.createElement("img");
  avatarImage.src=data.avatar_url;
  card.append(avatarImage);

  //Card Info Div
  const cardInfoDiv=document.createElement("div");
  cardInfoDiv.classList.add("card-info");
  card.append(cardInfoDiv);

  //Name Heading
  const nameHeading=document.createElement("h3");
  nameHeading.textContent=data.name;
  nameHeading.classList.add("name");
  cardInfoDiv.append(nameHeading);

  //Username Paragraph
  const usernameP=document.createElement("p");
  usernameP.textContent=data.login;
  usernameP.classList.add("username");
  cardInfoDiv.append(usernameP);

  //Location P
  const locationP=document.createElement("p");
  locationP.textContent=data.location;
  cardInfoDiv.append(locationP);

  //Profile URL P
  const profileP=document.createElement("p");
  profileP.textContent=data.url;
  cardInfoDiv.append(profileP);

  //Followers P
  const followersP=document.createElement("p");
  followersP.textContent="Followers: "+ data.followers;
  cardInfoDiv.append(followersP);

   //Following P
   const followingP=document.createElement("p");
   followingP.textContent="Following: "+ data.following;
   cardInfoDiv.append(followingP);

   //Bio P
   const bioP=document.createElement("p");
   bioP.textContent=data.bio;
   cardInfoDiv.append(bioP);

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
