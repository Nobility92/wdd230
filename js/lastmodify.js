const d = new Date();
        let datetime = d.getFullYear()+'/'+d.getMonth()+'/'+d.getDate()+ '  ' + d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
        document.getElementById("update").innerHTML = datetime;