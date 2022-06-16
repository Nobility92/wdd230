function windChill(t, s){
    return;
}

let t = parseFloat(document.getElementById("t").innerHTML);
    let s = parseFloat(document.getElementById("s").innerHTML);
    let windchill;

    if (t < 50 && s > 3){
        windchill = windChill(t, s);
        windchill = Math.round(35.74 + 0.6215 * t - 35.75 * s**0.16 + 0.4275 * t * s**0.16);
    }else{
        windchill = "N/A";
    }
    document.getElementById("w").innerHTML = windchill;