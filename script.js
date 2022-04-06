var input = "";
var input_2 = "";
var input_3 = 0;
var result = 0;
var double_check = false;
var plus = 0;
var minus = 0;
var times = 0;
var divide = 0;
var reverse_1 = 0;
var counter = 1;
var reset = 0;


function add_point() {
    double_check = true;
    input += '.';
    document.getElementById("output").textContent = input;
}

function add_1() {
    input += 1;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    }
}

function add_2() {
    input += 2;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    }
}

function add_3() {
    input += 3;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    }
}

function add_4() {
    input += 4;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    }
}

function add_5() {
    input += 5;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    }
}

function add_6() {
    input += 6;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    }
}

function add_7() {
    input += 7;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    } 
}

function add_8() {
    input += 8;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    } 
}

function add_9() {
    input += 9;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    } 
}

function add_0() {
    input += 0;
    document.getElementById("output").textContent = input;
    if (counter == 1) {
        input_2 = input;
    } else if (counter >= 2) {
        input_3 = input;
    } 
}


function delete_1() {
    input = input.slice(0, -1)
    document.getElementById("output").textContent = input;
}

function delete_2() {
    input = "";
    document.getElementById("output").textContent = input;
    counter = 1;
    input = 0;
    input_2 = 0;
    input_3 = 0;
}

function reverse(){
    reverse_1 = 1;
}

function plus_op() {
    plus = 1;
    console.log("Counter: " + counter)

    if (counter >= 2) {
        if (double_check == false) {
            result = parseInt(input_2) + parseInt(input_3);
        }
        if (double_check == true) {
            result = parseFloat(input_2) + parseFloat(input_3);
        }
        
        console.log("Value " + result)
        document.getElementById("output").textContent = result;
        console.log("Worked")

        input_2 = result;
    }

    input = "";

    counter++;
}

function minus_op() {
    minus = 1;
    if (counter >= 2) {
        if (double_check == false) {
            result = parseInt(input_2) - parseInt(input_3);
        }
        if (double_check == true) {
            result = parseFloat(input_2) - parseFloat(input_3);
        }

        console.log("Value " + result)
        document.getElementById("output").textContent = result;
        console.log("Worked")

        input_2 = result;
    }
    input = "";

    counter++;
}

function times_op() {
    times = 1;
    if (counter >= 2) {
        
        input_2 = result;
    }
    document.getElementById("output").textContent = input;
    input = "";

    counter++;
}

function divide_op() {
    divide = 1;
    if (counter >= 2) {
        input_2 = result;
    }
    document.getElementById("output").textContent = input;
    input = "";

    counter++;

}

function enter() {
    if (plus == 1) {
        console.log(input_2)
        console.log(input_3)
        if (double_check == false) {
            result = parseInt(input_2) + parseInt(input_3);
        }
        if (double_check == true) {
            result = parseFloat(input_2) + parseFloat(input_3);
        }
      plus = 0;
    }

    if (minus == 1) {
        console.log(input_2)
        console.log(input_3)
        if (double_check == false) {
            result = parseInt(input_2) - parseInt(input_3);
        }
        if (double_check == true) {
            result = parseFloat(input_2) - parseFloat(input_3);
        }
      minus = 0;
    }

    if (times == 1) {
        console.log(input_2)
        console.log(input_3)
        if (double_check == false) {
            result = parseInt(input_2) * parseInt(input_3);
        }
        if (double_check == true) {
            result = parseFloat(input_2) * parseFloat(input_3);
        }
      times = 0;
    }

    if (divide == 1) {
        console.log(input_2)
        console.log(input_3)
        if (double_check == false) {
            result = parseInt(input_2) / parseInt(input_3);
        }
        if (double_check == true) {
            result = parseFloat(input_2) / parseFloat(input_3);
        }
     divide = 0;
    }

    if(reverse_1 == 1){
        result = result * -1;
        reverse_1 = 0;
    }



    document.getElementById("output").textContent = "";
    document.getElementById("output").textContent = result;
    input = "";
}