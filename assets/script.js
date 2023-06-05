var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() 
{
 for (var x = 0; x < topics.length; x++) 
 {
   console.log(topics[x]);
 }
}

function selectTopics() 
{
 if (randomTopic === "HTML") 
 {
   console.log("Let's study HTML!");
 } else if (randomTopic === "CSS") 
 {
   console.log("Let's study CSS!");
 } else if (randomTopic === "Git") 
 {
   console.log("Let's study Git!");
 } else if (randomTopic === "JavaScript") 
 {
   console.log("Let's study JavaScript!");
 } else 
 {
   console.log("Please try again!");
 }
}
console.log("Here are the topics we learned through Prework:");
listTopics()
console.log("Which topic should we study first?");
selectTopics()














var coinFaces = ["Heads","Tails"];
var randomCoin = coinFaces[Math.floor(Math.random() * coinFaces.length)];
function selectCoinFaces()
{
  if (randomCoin === "Heads")
  {
    console.log("Landed on Heads.")
  }
  else if (randomCoin === "Tails")
  {
    console.log("Landed on Tails.")
  }
}
console.log("Let's also do a coin flip by refreshing the page ッ")
selectCoinFaces()