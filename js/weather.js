function onGeoOk(position){
    //위도
    const lat =position.coords.latitude;     
    //경도
    const lng =position.coords.longitude;

    console.log("You live in ", lat, lng);
};
function onGeoError(){
    alert("Can't find you. No weather for you."); 
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);