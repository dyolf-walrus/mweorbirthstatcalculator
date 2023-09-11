let mweor1 = {
    level: null,
    heritage: null,
    points: null,
    valid: false
}

let mweor2 = {
    level: null,
    heritage: null,
    points: null,
    valid: false
}

let buttons = {
    calculate: document.getElementById("calculate"),
    mweor1clear: document.getElementById("mweor1clear"),
    mweor2clear: document.getElementById("mweor2clear")
}

let misc = {
    pointAverage: null,
    mwitStats: null
}

buttons.calculate.addEventListener('click', function () {
    updateInfo();
    checkLevels(mweor1);
    if (mweor1.valid) { 
        checkLevels(mweor2);
    }
    console.log(mweor1);
    if (mweor1.valid && mweor2.valid) {
        checkPoints(mweor1);
        checkPoints(mweor2);
    }
    levelToPoints(mweor1);
    levelToPoints(mweor2);
    if (mweor1.valid && mweor2.valid) {
        calcAverage();
        mwitStats();
        document.getElementById("results").textContent = `Your mwit will be born with ${misc.mwitStats} stats`;
    }
})

//update the mweor objects
function updateInfo() {
    mweor1.level = parseInt(document.getElementById("mweor1level").value);
    mweor2.level = parseInt(document.getElementById("mweor2level").value);
    mweor1.heritage = parseInt(document.getElementById("mweor1heritage").value);
    mweor2.heritage = parseInt(document.getElementById("mweor2heritage").value);
    mweor1.points = parseInt(document.getElementById("mweor1points").value);
    mweor2.points = parseInt(document.getElementById("mweor2points").value);
}

//clear button for mweor 1
function clearMweor1() {
    document.getElementById("mweor1level").value = 0;
    document.getElementById("mweor1heritage").value = 0;
    document.getElementById("mweor1points").value = 0;
}

buttons.mweor1clear.addEventListener('click', clearMweor1);

//clear button for mweor 2
function clearMweor2() {
    document.getElementById("mweor2level").value = 0;
    document.getElementById("mweor2heritage").value = 0;
    document.getElementById("mweor2points").value = 0;
}

buttons.mweor2clear.addEventListener('click', clearMweor2);

//make sure the given levels are valid for a mweor (0-20)
function checkLevels(mweor) {
    if (mweor.level < 0 || mweor.level > 20) {
        document.getElementById("results").textContent = "Please make sure your mweors' levels are a value from 0 to 20"
        mweor.valid = false;
        return;
    } else {
        document.getElementById("results").textContent = ""
        mweor.valid = true;
    }
}

//make sure the amount of points is valid given the mweor's level
function checkPoints(mweor) {
    if (mweor.points < 0) {
        document.getElementById("results").textContent = "Please make sure the mweors' points are positive numbers"
        mweor.valid = false;
        return;
    } else if (mweor.level == 0 && mweor.points > 499) {
        document.getElementById("results").textContent = "Please double check your mweors' points"
        mweor.valid = false;
        return;
    } else if (mweor.level == 19 && mweor.points > 2499999) {
        document.getElementById("results").textContent = "Please double check your mweors' points"
        mweor.valid = false;
        return;
    } else if (mweor.level == 18 && mweor.points > 999999) {
        document.getElementById("results").textContent = "Please double check your mweors' points"
        mweor.valid = false;
        return;
    } else if (mweor.level > 0 && mweor.level < 18 && mweor.points > mweor.level * mweor.level * 1000 - 1) {
        document.getElementById("results").textContent = "Please double check your mweors' points"
        mweor.valid = false;
    } else {
        mweor.valid = true;
    }
}

//turn mweor levels into points
function levelToPoints(mweor) {
    switch(mweor.level) {
        case 1:
            mweor.level = 500;
            break;
        case 2:
            mweor.level = 1500;
            break;
        case 3:
            mweor.level = 5500;
            break;
        case 4:
            mweor.level = 14500;
            break;
        case 5:
            mweor.level = 30500;
            break;
        case 6:
            mweor.level = 55500;
            break;
        case 7:
            mweor.level = 91500;
            break;
        case 8:
            mweor.level = 140500;
            break;
        case 9:
            mweor.level = 204500;
            break;
        case 10:
            mweor.level = 285500;
            break;
        case 11:
            mweor.level = 385500;
            break;
        case 12:
            mweor.level = 508500;
            break;
        case 13:
            mweor.level = 650500;
            break;
        case 14:
            mweor.level = 810500;
            break;
        case 15:
            mweor.level = 1015500;
            break;
        case 16:
            mweor.level = 1240500;
            break;
        case 17:
            mweor.level = 1498500;
            break;
        case 18:
            mweor.level = 1785500;
            break;
        case 19:
            mweor.level = 2785500;
            break;
        case 20:
            mweor.level = 5285500;
            break;
    }
}

//calculate the point average
function calcAverage() {
    misc.pointAverage = (mweor1.level + mweor1.heritage + mweor1.points + mweor2.level + mweor2.heritage + mweor2.points)/2;
}

//calculate the mwit stats
function mwitStats() {
    switch(true) {
        case (misc.pointAverage < 50000):
            misc.mwitStats = 2
            return;
        case (misc.pointAverage < 100000):
            misc.mwitStats = 3
            return;
        case (misc.pointAverage < 200000):
            misc.mwitStats = 4
            return;
        case (misc.pointAverage < 400000):
            misc.mwitStats = 5
            return;
        case (misc.pointAverage < 800000):
            misc.mwitStats = 6
            return;
        case (misc.pointAverage < 1600000):
            misc.mwitStats = 7
            return;
        case (misc.pointAverage < 3200000):
            misc.mwitStats = 8
            return;
        case (misc.pointAverage < 5000000):
            misc.mwitStats = 9
            return;
        case (misc.pointAverage < 10000000):
            misc.mwitStats = 10
            return;
        case (misc.pointAverage < 20000000):
            misc.mwitStats = 11
            return;
        case (misc.pointAverage < 30000000):
            misc.mwitStats = 12
            return;
        case (misc.pointAverage < 40000000):
            misc.mwitStats = 13
            return;
        case (misc.pointAverage < 50000000):
            misc.mwitStats = 14
            return;
        case (misc.pointAverage < 60000000):
            misc.mwitStats = 15
            return;
        case (misc.pointAverage < 70000000):
            misc.mwitStats = 16
            return;
        case (misc.pointAverage < 80000000):
            misc.mwitStats = 17
            return;
        case (misc.pointAverage < 90000000):
            misc.mwitStats = 18
            return;
        case (misc.pointAverage < 100000000):
            misc.mwitStats = 19
            return;
        case (misc.pointAverage < 110000000):
            misc.mwitStats = 20
            return;
        case (misc.pointAverage < 120000000):
            misc.mwitStats = 21
            return;
        case (misc.pointAverage < 130000000):
            misc.mwitStats = 22
            return;
        case (misc.pointAverage < 140000000):
            misc.mwitStats = 23
            return;
        case (misc.pointAverage < 150000000):
            misc.mwitStats = 24
            return;
        case (misc.pointAverage < 160000000):
            misc.mwitStats = 25
            return;
        case (misc.pointAverage < 170000000):
            misc.mwitStats = 26
            return;
        case (misc.pointAverage < 180000000):
            misc.mwitStats = 27
            return;
    }
}