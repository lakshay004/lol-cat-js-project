

setInterval(showTime, 1000);

function showTime() {
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec; 

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    document.getElementById("clock").innerHTML = currentTime;
}

showTime(); 

function updateImageOntime() {
    const wakeuptime = document.getElementById('wakeuptime').value;
    const dinnertime = document.getElementById('dinnertime').value;
    const naptime = document.getElementById('naptime').value;

    const myimg = document.getElementById('myimg');

    console.log('Wakeup Time:', wakeuptime);
    console.log('Dinner Time:', dinnertime);
    console.log('Nap Time:', naptime);

    if (wakeuptime === '9am-10am') {
        myimg.src = "./catwakeupimage.jpeg";
        overlay.innerText="wakeuptime";
      
    } else if (dinnertime === '10pm-11pm') {
        myimg.src = "./catdinner.jpeg";
     overlay.innerText="dinnertime";
       
    } else if (naptime === '12am-1am') {
        myimg.src = "./catsleepimagejpeg.jpeg";
         overlay.innerText="naptime";
      
    } else {
        myimg.src = "./photo.jpeg";
        
    }
    
}



document.getElementById('wakeuptime').addEventListener('change', updateImageOntime);
document.getElementById('dinnertime').addEventListener('change', updateImageOntime);
document.getElementById('naptime').addEventListener('change', updateImageOntime);        
document.getElementById("myImg").src ="./photo.jpeg";


function changepartytime() {
    var button = document.getElementById("myButton1");
    var image = document.getElementById("myimg");
    var overlayText = document.getElementById("centered");

   
    if (button.value === "Party Time") {
       
        button.value = "Party Over";
        image.src = "./partytime2.jpeg"; 
        overlayText.innerText = "Party Over!";
    } else  {
       
        button.value = "Party Time";
        image.src = "./photo.jpeg";  
        overlayText.innerText = "Let's Party";
    }
}
