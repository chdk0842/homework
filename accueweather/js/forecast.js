var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=7fa4c3c66851c38c5c689c75895a3f62"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

//현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city){
    var dataObj;
    var openWeatherAPI = url

    $.ajax({
        type: "GET", //서버에 get방식으로 요청
        url: openWeatherAPI += city,
        dataType : "json", //받아올 데이터 타입
        async : false, //비동기x -> 동기 (결과 데이터를 리턴시키기 위해)
        success : function(data){ //API call 성공할 때
            dataObj = data
        },
        error : function(requset, status, error){ //API call 실패할 때
            console.log(requset, status, error)
        },
    })
    return dataObj
}


//지역별 현재 온도 얻어오기
function getCurrentTemp(city){
    
    var temp = {}
    var openWeatherAPI = url

    $.ajax({
        type: "GET", //서버에 get방식으로 요청
        url: openWeatherAPI += city,
        dataType : "json", //받아올 데이터 타입
        async : false, //비동기x -> 동기 (결과 데이터를 리턴시키기 위해)
        success : function(data){ //API call 성공할 때
             temp.celsius = data.main.temp.toFixed(0) //온도 소수점 없애기
             temp.icon = data.weather[0].icon //아이콘
        },
        error : function(requset, status, error){ //API call 실패할 때
            console.log(requset, status, error)
        },
    }) 
    return temp
}


