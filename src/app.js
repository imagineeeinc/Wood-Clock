function moveHands() {
    with(new Date()) {
        h = 30 * (getHours() % 12 + getMinutes() / 60);
        m = 6 * getMinutes();
        s = 6 * getSeconds();
        d = getDate();
        mo = getMonth() + 1;
        y = getFullYear()
        document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";
        document.getElementById("d_date").innerHTML = d;
        document.getElementById("m_date").innerHTML = mo;
        document.getElementById("y_date").innerHTML = y;
        hdig = getHours();
        document.getElementById("h_dig").innerHTML = hdig;
        mdig = getMinutes();
        document.getElementById("m_dig").innerHTML = mdig;

        setTimeout(moveHands, 1000);
    }
}

window.onload = moveHands;