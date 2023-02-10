let eventList;

async function register(id){
console.log(id);
const response = await fetch(`/api/addusertoevent?value=${id}`);
    const data = await response;
    console.log(data.message);
}


async function getList(){
    const response = await fetch('/api/getevents');
    const data = await response.json();
    //console.log(data.message[0]['name']);
    
    const events = data;
    console.log(data);
    eventList = events;
    events.forEach(i => {
        //console.log(i['image']['filename']);
        console.log(i['title']);
        var table= document.getElementById("cardsection");
        table.innerHTML += `<div id = \"${i[name]}\" class=\"card\">
        <img  src = "http://localhost:3000/uploads/${i['image']['filename']}"
        >
        <h3 >${i['title']}</h3>
        <p class=\"organizer\" >Organizer : ${i['organizer']}</p>
        <p class=\"time\" >Venue : ${i['location']}\n
         date : ${i['date']}\n
         time : ${i['time']}</p>
        <button id=\"${i['title']}\" class = \"buttonjoin\" align="center" type = \"button\" value = \"Join\">Register</button>
        </div>`;
        var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        console.log(this.id);
        register(this.id);
    });
}
        // table.innerHTML += "<tr><td> " + i['title'] + "</td><td>"
        //  +i['location'] + "</td><td>"
        //  +i['date'] + "</td><td>"
        //  +i['time'] + "</td><td><img width =250 src = \"http://localhost:3000/uploads/"
        //  +i['image']['filename'] + "\"></td></tr>";
         

    //      <tr>
    //      <td>Event 1</td>
    //      <td>Location 1</td>
    //      <td>2023-03-01</td>
    //      <td>19:00</td>
    //      <td><img src="image1.jpg" height="50"></td>
    //    </tr>
    });

    // <div class="event-card">
    //     <img src="event1.jpg" alt="Event 1">
    //     <h3>Event 1</h3>
    //     <p>Location: Location 1</p>
    //     <p>Date: 2023-03-01</p>
    //     <p>Time: 19:00</p>
    //   </div>
}
getList();
