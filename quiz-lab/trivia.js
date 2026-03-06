function startTrivia(){

    displayDate();
    greeting();
    getEmail();
    quoteOfDay();
    quiz();
    
    }
    
    function displayDate(){
    
    let now = new Date();
    
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    
    let hour = now.getHours();
    let minute = now.getMinutes();
    
    document.write("Today is " + month + "/" + day + "/" + year);
    document.write("<br>");
    document.write("Current time: " + hour + ":" + minute);
    document.write("<br><br>");
    
    }
    
    function greeting(){
    
    let name = prompt("Please enter your name");
    
    name = capitalize(name);
    
    let hour = new Date().getHours();
    
    let message = "";
    
    switch(true){
    
    case (hour < 12):
    message = "Good Morning!";
    break;
    
    case (hour < 18):
    message = "Good Afternoon!";
    break;
    
    default:
    message = "Good Evening!";
    
    }
    
    document.write(message + " " + name + "!");
    document.write("<br><br>");
    
    }
    
    function capitalize(text){
    
    return text.charAt(0).toUpperCase() + text.slice(1);
    
    }
    
    function getEmail(){
    
    let email;
    
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    do{
    
    email = prompt("Please enter your email");
    
    if(!regex.test(email)){
    alert("Invalid email. Try again.");
    }
    
    }while(!regex.test(email));
    
    let parts = email.split("@");
    
    let username = parts[0].toUpperCase();
    let domain = parts[1];
    
    document.write("USERNAME: " + username + "<br>");
    document.write("DOMAIN: " + domain + "<br><br>");
    
    }
    
    function quoteOfDay(){
    
    let quotes = [
    
    "What is grief, if love not persevering? - Vision",
    "Part of the journey is the end. - Tony Stark",
    "I'm with you 'til the end of the line. - Steve Rogers",
    "With great power, comes great responsibility. - Uncle Ben",
    "I assure you, brother, the sun will shine on us again. - Loki Laufeyson"
    
    ];
    
    let random = Math.floor(Math.random() * 5);
    
    document.write("Quote of the day: " + quotes[random]);
    document.write("<br><br>");
    
    }
    
    function quiz(){
    
    let score = 0;
    
    let q1 = prompt("What language runs in a web browser?");
    if(q1.toLowerCase() === "javascript"){
    score += 3;
    }
    
    let q2 = prompt("What does HTML stand for?");
    if(q2.toLowerCase() === "hypertext markup language"){
    score += 3;
    }
    
    let q3 = prompt("What does CSS stand for?");
    if(q3.toLowerCase() === "cascading style sheets"){
    score += 3;
    }
    
    document.write("Score: " + score);
    document.write("<br>");
    
    let percent = (score / 9) * 100;
    
    percent = percent.toFixed(2);
    
    document.write("Percentage: " + percent + "%");
    
    }
    
    startTrivia();