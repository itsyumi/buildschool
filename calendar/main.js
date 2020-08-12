var now = new Date();
var Year = now.getFullYear();
var Month = now.getMonth();
var Day = now.getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


Init();

function Init() {
    let firstDay = new Date(Year, Month, 1);
    let firstDay_week = firstDay.getDay();
    let daysOfMonth = new Date(Year, Month + 1, 0).getDate();


    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';


    function $AddTD(td) {
        td.setAttribute('data-toggle', 'modal');
        td.setAttribute('data-target', '#addContent');
        td.id = `${Year}${Month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;
        td.addEventListener('click', function (e) { AddContent(td.id) });
    }

    let tr1 = document.createElement('tr');
    let day = 1;
    for (let i = 0; i < 7; i++) {
        let td = document.createElement('td');
        if (i >= firstDay_week) {
            td.innerText = day;
            $AddTD(td);
            day++;
        }
        tr1.appendChild(td);
    }
    tbody.appendChild(tr1);


    for (let i = 0; i < Math.ceil((daysOfMonth + firstDay_week) / 7) - 1; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            let td = document.createElement('td');
            if (day <= daysOfMonth) { td.innerText = day; }
            $AddTD(td);
            tr.appendChild(td);
            day++;
        }
        tbody.appendChild(tr);
    }


    document.querySelectorAll('h4').forEach(function (item) { item.innerText = monthNames[Month]; })
    // document.querySelectorAll('h4').forEach(function (item) { item.innerText = monthNames[Month].substr(0, 3); })
    document.querySelector('h1').innerText = Day;
    document.querySelector('.col-4').querySelector('div').querySelector('span').innerText = Year;


}


function LastMonth() {
    now.setMonth(Month - 1);
    Year = now.getFullYear();
    Month = now.getMonth();
    Init();
}

function NextMonth() {
    now.setMonth(Month + 1);
    Year = now.getFullYear();
    Month = now.getMonth();
    Init();
}


// // Modal的值預設為今天
// var modalDate = document.querySelector('#date');


// function AddContents() {AddContent(null);}
function AddContent(TDday) {
    // console.log(TDday);
    // if (TDday == null) {
    //     modalDate.value = `${Year}-${(Month + 1).toString().padStart(2, '0')}-${Day.toString().padStart(2, '0')}`;
    // } else {
    //     modalDate.value = `${TDday.substr(0, 4)}-${(TDday.substr(4, 2) - 1)}-${TDday.substr(6, 2)}`;
    // }
    // let currentYear = modalDate.value.substr(0, 4);
    // let currentMonth = modalDate.value.substr(5, 2);
    // let currentDay = modalDate.value.substr(8, 2);
    document.querySelector('h1').innerText = parseInt(TDday.substr(6, 2));
}



