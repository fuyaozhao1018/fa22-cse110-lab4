function clock() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(clock, 1000);
