/**
 * 
 * @name Play With Charge
 * @author Mohammad Rakibul Haider
 * @version 1.0
 * @since version 1.0
 */


/**
 * 
 * @param {string} name
 * @returns {none}
 */
function changeSrcOne(name) {
    charge_one = name;
    if (name === "positive")
        charge_one_obj.src = "images/positive_charge.png";
    else
        charge_one_obj.src = "images/negative_charge.png";
}

/**
 * 
 * @param {string} name
 * @returns {none}
 */
function changeSrcTwo(name) {
    charge_two = name;
    if (name === "positive")
        charge_two_obj.src = "images/positive_charge.png";
    else
        charge_two_obj.src = "images/negative_charge.png";
}

/**
 * 
 * @returns {none}
 */
function reset() {
    charge_one_obj = document.getElementById('charge_one');
    charge_two_obj = document.getElementById('charge_two');
    counter = 0;
    CNT = 10;
    ANIMATION_TIME = 600;
    charge_one = null;
    charge_two = null;

    charge_one_obj.src = "images/charge_one_demo.png";
    charge_one_obj.style.position = 'absolute';
    charge_one_obj.style.left = '0px';

    charge_two_obj.src = "images/charge_two_demo.png";
    charge_two_obj.style.position = 'absolute';
    charge_two_obj.style.left = '300px';
}

/**
 * 
 * @returns {Boolean}
 */
function run() {
    if (charge_one == null) {
        alert("Please Select Charge One");
        return false;
    }

    if (charge_two == null) {
        alert("Please Select Charge Two");
        return false;
    }

    if ((charge_one === "positive" && charge_two === "positive") || (charge_one === "negative" && charge_two === "negative")) {
        sameCharge();
    } else if ((charge_one === "positive" && charge_two === "negative") || (charge_one === "negative" && charge_two === "positive")) {
        differentCharge();
    } 
}

/**
 * 
 * @returns {none}
 */
function sameCharge() {

    charge_one_obj.style.left = parseInt(charge_one_obj.style.left) + 10 + 'px';
    charge_two_obj.style.left = parseInt(charge_two_obj.style.left) - 10 + 'px';

    counter++;
    if (counter >= CNT) {
        finishOne();
        return;
    }
    animate = setTimeout(sameCharge, ANIMATION_TIME);
}

/**
 * 
 * @returns {none}
 */
function differentCharge() {
    charge_one_obj.style.left = parseInt(charge_one_obj.style.left) + 10 + 'px';
    charge_two_obj.style.left = parseInt(charge_two_obj.style.left) - 10 + 'px';

    counter++;
    if (counter >= CNT) {
        finishTwo();
        return;
    }
    animate_two = setTimeout(differentCharge, ANIMATION_TIME);
}

/**
 * 
 * @returns {none}
 */
function finishOne() {
    clearTimeout(animate);

    charge_one_obj.style.left = '0px';
    charge_two_obj.style.left = '300px';
}

/**
 * 
 * @returns {none}
 */
function finishTwo() {
    clearTimeout(animate);

    charge_one_obj.style.left = '100px';
    charge_two_obj.style.left = '200px';
}


