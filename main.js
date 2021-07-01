// import {table} from './data'

// =============scrollToTop()===========
function scrollToTop(){
    window.scroll(0,0)
}

// ==================================slider===============
$(function(){
    var windowHeight = $(window).height();
    var upperbarHeight = $(".top-title").innerHeight();
    var navbarHeight = $(".nav-bar").innerHeight();
    $(".slider img").height(windowHeight-upperbarHeight-navbarHeight);
});

    
// calling weather data

const api_key = `7cf9d5d72c3f9e916b1516a56477a9bd`
let lat
let lon
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=>{
        lon = position.coords.latitude
        lat = position.coords.longitude
        console.log("lat: ", lat, "lon: ", lon);
    });
} 
let country = document.querySelector(".country")
let city = document.querySelector(".city")
let desc = document.querySelector(".desc")
let icon = document.querySelector(".icon")
let weather_elements_data = document.querySelectorAll(".weather-element-data")

const fitchWeather = ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ar&appid=${api_key}`)
    .then(res=>{
        let data = res.json()
        console.log(data);
        return data
    })
    .then(data=>{
        country.innerHTML = data.sys.country
        desc.innerHTML = data.weather[0].description
        city.innerHTML = data.name
        icon.innerHTML = `<img src ="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
        weather_elements_data[0].innerHTML = data.main.temp
        weather_elements_data[1].innerHTML = data.main.feels_like
        weather_elements_data[2].innerHTML = data.main.humidity
        weather_elements_data[3].innerHTML = data.wind.speed
        weather_elements_data[4].innerHTML = data.wind.deg
    }).catch(err=> console.log(err))
}

window.addEventListener('load', fitchWeather)




// ===============table=========
let regionName = document.querySelectorAll('.region');
let regionLabel =  document.querySelectorAll('#table li');
let displayedRigionName = document.querySelector(".displayed-rigion h1");
let displayAll = document.querySelector("#table option");
let select = document.querySelector("#table select");
let displayedNum = 1

let all_days = document.querySelector(".all_days");
let completeDay = document.querySelector("#table .complete_day");
// all_days.appendChild(completeDay)

let title = document.querySelectorAll(".table .title h4")
let tmax = document.querySelectorAll(".table .tmax")
let tmin = document.querySelectorAll(".table .tmin")
let hmax = document.querySelectorAll(".table .hmax")
let hmin = document.querySelectorAll(".table .hmin")
let ph = document.querySelectorAll(".table .ph")
let rain = document.querySelectorAll(".table .rain")
let wd = document.querySelectorAll(".table .wd")
let ws = document.querySelectorAll(".table .ws")
let desciption = document.querySelectorAll(".table .desc")






// ======about-us========
let information = document.querySelector("#about-us .information")
let informationTwo = document.querySelector("#about-us .informationTwo")

const about_us = `          الھیئة العامة للأرصاد الجویة المصرية وھي إحدى الھیئات التابعة لوزارة الطیران المدني والمنوط بھا عمل التنبؤات الجویة والبحریة و اصدار النشرات الجویةوبث وتوزیع وتبادل معلومات الأرصاد الجویة وكذا تأھیل العاملین المعتمدین في مجال الأرصاد الجویة. بدأ نشاط الأرصاد الجوية في مصر عام 1829 واستمر تطوير النشاط والخدمات المؤادة لكافة قطاعات الدولة تدريجياً حتى شمل : الطيران المدني - الملاحة البحرية - النقل البري- الزراعة والري - البيئة - السياحة - المجتمعات العمرانية - الكهرباء والطاقة - وسائل الإعلام - القوات المسلحة        
`
information.innerHTML = about_us
informationTwo.innerHTML = about_us

document.getElementById('read-more').addEventListener('click', ()=>{
    informationTwo.classList.toggle("active")
    if(informationTwo.classList.contains("active")){
        document.getElementById('read-more').innerText = "اعرض أقل"
    }else{
        document.getElementById('read-more').innerText = "اعرض المزيد"
    }
})

// =========table==============
const table = {
    header: [
        "اليوم",
        "درجة الحرارة",
        "الرطوبة النسبية",
        "الظواهر",
        "فرصة الامطار",
        "اتجاه الرياح",
        "سرعة الرياح",
    ],
    days: [
        "السبت 25 يناير 2020",
        "الاحد 26 يناير 2020",
        "الاثنين 27 يناير 2020",
        "الثلاثاء 28 يناير 2020",
        "الاربعاء 29 يناير 2020",
        "الخميس 30 يناير 2020",
    ],
    regions: {
        regionOne: [
            [
                39,
                24,
                75,
                40,
                "نشاط رياح احيانا",
                30,
                "شمالية غربية",
                15,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                38,
                26,
                70,
                40,
                "غائم جزئي",
                40,
                "شمالية غربية",
                12 ,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                28,
                70,
                50,
                "نشاط رياح احيانا",
                20,
                "شمالية غربية",
                16,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                37,
                24,
                75,
                45,
                "مشمس",
                30,
                "شمالية غربية",
                11,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                39,
                25,
                80,
                50,
                "غائم جزئي",
                0,
                "شمالية غربية",
                11,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                38,
                26,
                80,
                45,
                "مشمس",
                0,
                "شمالية غربية",
                13,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ]
        ],
        regionTwo: [
            [
                39,
                24,
                75,
                40,
                "نشاط رياح احيانا",
                30,
                "شمالية غربية",
                18,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                38,
                26,
                80,
                40,
                "غائم جزئي",
                40,
                "شمالية شرقية",
                14,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                25,
                70,
                50,
                "نشاط رياح احيانا",
                20,
                "شمالية غربية",
                18,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
                
            ],
            [
                38,
                24,
                75,
                45,
                "مشمس",
                30,
                "شمالية غربية",
                15,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                39,
                25,
                90,
                50,
                "غائم جزئي",
                0,
                "شمالية غربية",
                13,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                26,
                80,
                45,
                "مشمس",
                0,
                "شمالية غربية",
                10,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ]
        ],
        regionThree: [
            [
                33,
                24,
                95,
                50,
                "نشاط رياح ",
                40,
                "شمالية غربية",
                20,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                32,
                26,
                90,
                40,
                "غائم جزئي",
                40,
                "شمالية شرقية",
                25,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                33,
                25,
                70,
                50,
                "نشاط رياح احيانا",
                20,
                "شمالية غربية",
                30,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                32,
                24,
                75,
                45,
                "مشمس",
                30,
                "شمالية غربية",
                15,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                30,
                25,
                90,
                50,
                "غائم جزئي",
                0,
                "شمالية غربية",
                13,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                30,
                26,
                80,
                45,
                "مشمس",
                0,
                "شمالية غربية",
                10,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ]
        ],
        regionfour: [
            [
                34,
                24,
                95,
                50,
                "نشاط رياح ",
                40,
                "شمالية غربية",
                20,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                32,
                26,
                90,
                40,
                "غائم جزئي",
                40,
                "شمالية شرقية",
                25,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                33,
                25,
                70,
                50,
                "نشاط رياح احيانا",
                20,
                "شمالية غربية",
                30,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                38,
                24,
                75,
                45,
                "مشمس",
                30,
                "شمالية غربية",
                15,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                39,
                25,
                90,
                50,
                "غائم جزئي",
                0,
                "شمالية غربية",
                13,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                26,
                80,
                45,
                "مشمس",
                0,
                "شمالية غربية",
                10,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ]
        ],
        regionfive: [
            [
                42,
                24,
                95,
                50,
                "نشاط رياح ",
                40,
                "شمالية غربية",
                20,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                26,
                90,
                40,
                "غائم جزئي",
                40,
                "شمالية شرقية",
                25,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                41,
                25,
                70,
                50,
                "نشاط رياح احيانا",
                20,
                "شمالية غربية",
                30,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                24,
                75,
                45,
                "مشمس",
                30,
                "شمالية غربية",
                15,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                39,
                25,
                90,
                50,
                "غائم جزئي",
                0,
                "شمالية غربية",
                13,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                26,
                80,
                45,
                "مشمس",
                0,
                "شمالية غربية",
                10,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ]
        ],
        regionsix: [
            [
                41,
                24,
                95,
                50,
                "نشاط رياح ",
                40,
                "شمالية غربية",
                20,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                42,
                26,
                90,
                40,
                "غائم جزئي",
                40,
                "شمالية شرقية",
                25,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                39,
                25,
                70,
                50,
                "نشاط رياح احيانا",
                20,
                "شمالية غربية",
                30,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                24,
                75,
                45,
                "مشمس",
                30,
                "شمالية غربية",
                15,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                41,
                25,
                90,
                50,
                "غائم جزئي",
                0,
                "شمالية غربية",
                13,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                26,
                80,
                45,
                "مشمس",
                0,
                "شمالية غربية",
                10,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ]
        ],
        regionseven: [
            [
                43,
                28,
                25,
                15,
                "مشمس",
                00,
                "شمالية غربية",
                5,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                42,
                26,
                90,
                40,
                "غائم جزئي",
                40,
                "شمالية شرقية",
                25,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                25,
                70,
                50,
                "نشاط رياح احيانا",
                20,
                "شمالية غربية",
                30,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                43,
                24,
                75,
                45,
                "مشمس",
                30,
                "شمالية غربية",
                15,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                44,
                25,
                90,
                50,
                "غائم جزئي",
                0,
                "شمالية غربية",
                13,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ],
            [
                40,
                26,
                80,
                45,
                "مشمس",
                0,
                "شمالية غربية",
                10,
                "طقس شديد الحرارة نهارا معتدل ليلا والرياح نشطة"
            ]
        ],
    },
    regionsNames: [
        "القاهرة الكبـــــــــرى",
        "الوجه البحــــــــــري",
        "السواحل الشمالية الغربية",
        "السواحل الشمالية الشرقية",
        "جنوب سيناء وسلاسل جبال البحر الأحمر",
        "شمال الصعيد",
        "جنوب الصعيد",
    ],
    description: [
        "طقس شديد الحرارة على القاهرة الكبرى والوجه البحري وجنوب سيناءوجنوب البلاد، مائل للحرارة على السواحل الشمالية نهارا ، معتدل ليلا على كافة الأنحاء",
        "طقس شديد الحرارة على القاهرة الكبرى والوجه البحري وجنوب سيناء وجنوب البلاد، مائل للحرارة على السواحل الشمالية نهارا ، لطيف على شمال البلاد معتدل ليلا على باقي الأنحاء",
        "طقس حار على القاهرة الكبرى والوجه البحري وجنوب سيناء وجنوب البلاد، مائل للحرارة على السواحل الشمالية نهارا ، لطيف على شمال البلاد معتدل ليلا على باقي الأنحاء",
        "طقس شديد الحرارة على القاهرة الكبرى والوجه البحري وجنوب سيناء وجنوب البلاد، مائل للحرارة على السواحل الشمالية نهارا ،  معتدل ليلا على باقي الأنحاء",
        "طقس معتدل على القاهرة الكبرى والوجه البحري وجنوب سيناء وجنوب البلاد، مائل للحرارة على السواحل الشمالية نهارا ، لطيف على شمال البلاد معتدل ليلا على باقي الأنحاء",
        "طقس شديد الحرارة على القاهرة الكبرى والوجه البحري وجنوب سيناء وجنوب البلاد، مائل للحرارة على السواحل الشمالية نهارا ، لطيف على شمال البلاد معتدل ليلا على باقي الأنحاء"
    ]
}
table.days.map((item, index)=>{
    title[index].innerHTML = item
    
})
// table.description.map((item, index)=>{
//     desciption[index].innerHTML = item
    
// })


displayedRigionName.innerHTML = table.regionsNames[0] 
var region = table.regions.regionOne

function regionMap(){
    region.map((item, index)=>{
        tmax[index].innerHTML = item[0]
        tmin[index].innerHTML = item[1]
        hmax[index].innerHTML = item[2]
        hmin[index].innerHTML = item[3]
        ph[index].innerHTML = item[4]
        rain[index].innerHTML = item[5]
        wd[index].innerHTML = item[6]
        ws[index].innerHTML = item[7]
        desciption[index].innerHTML = item[8]
    })
}
regionMap()


function myfunc(){
    switch (select.value) {
        case "1":
            region = table.regions.regionOne
            displayedRigionName.innerHTML = table.regionsNames[0] 
            break;
        case "2":
            region = table.regions.regionTwo
            displayedRigionName.innerHTML = table.regionsNames[1] 

            break;             
        case "3":
            region = table.regions.regionThree
            displayedRigionName.innerHTML = table.regionsNames[2] 
            break;                
        case "4":
            region = table.regions.regionfour
            displayedRigionName.innerHTML = table.regionsNames[3] 

            break;              
        case "5":
            region = table.regions.regionfive
            displayedRigionName.innerHTML = table.regionsNames[4] 
            break;                            
        case "6":
            region = table.regions.regionsix
            displayedRigionName.innerHTML = table.regionsNames[5] 
            break;                            
        case "7":
            region = table.regions.regionseven
            displayedRigionName.innerHTML = table.regionsNames[6] 
            break;                            
        default:
            region = table.regions.regionOne
            displayedRigionName.innerHTML = table.regionsNames[0] 
    }
    console.log(select.value);
    console.log(region);
    regionMap()
}

select.addEventListener('change', myfunc)


