let input = document.getElementById('input');
let R = document.getElementById('Result');
let Cbtn = document.getElementById('ALLclear');
let cbtn = document.getElementById('clear');
let DivideBtn = document.getElementById("divideBtn");
let MultiplyBtn = document.getElementById("multiplyBtn");
let MinusBtn = document.getElementById("minusBtn");
let PlusBtn = document.getElementById("plusBtn");
let Btn00 = document.getElementById("btn00");
let DecimalBtn = document.getElementById("decimal");
let EqualBtn = document.getElementById("equalBtn");
let Btns = document.querySelectorAll(".number");

let NewInput = "";
let Operator = "";
input.placeholder = "";

Btns.forEach((button) => {
    button.addEventListener('click', () => {
        let a = button.innerText;
        appendno(a);
    });
});

Btn00.addEventListener('click', () => {
    let a = Btn00.innerText;
    appendno(a);
});
EqualBtn.addEventListener('click', () => {
    let a = EqualBtn.innerText;
    Equal();
});
DecimalBtn.addEventListener('click', () => {
    let a = DecimalBtn.innerText;
    appendno(a);
});

PlusBtn.addEventListener('click', () => {
    appendOp('+');
});
MinusBtn.addEventListener('click', () => {
    appendOp('-');
});
MultiplyBtn.addEventListener('click', () => {
    appendOp('*');
});
DivideBtn.addEventListener('click', () => {
    appendOp('/');
});

Cbtn.addEventListener('click', () => {
    input.placeholder = "";
    document.getElementById('Result').innerText = "0";

})
cbtn.addEventListener('click', () => {
    input.placeholder = input.placeholder.slice(0, -1);

    //agar last mei operator h too ye use hata dega--------->
    if (input.placeholder.slice(-1) === ("+")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("-")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("*")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("/")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    let a = eval(input.placeholder);
    R.innerText = "=" + `${a}`;

});



//Append number--------->
function appendno(x) {
    if (x === '.' && input.placeholder.includes('.')) { return }
    input.placeholder += x;
    Result();
}
//Append Operator--------->
function appendOp(X) {
    if (input.placeholder == '') { return; }

    //Short double operator adjacently---------------------->
    //agar last mei operator h too ye use hata dega--------->
    if (input.placeholder.slice(-1) === ("+")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("-")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("*")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("/")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }

    //append placeholder--->
    input.placeholder += X;

    // console.log("placeholder " + input.placeholder);
    console.log("new input " + (NewInput));
}


// Result
function Result() {
    NewInput = eval(input.placeholder);
    // Output = NewInput;------------------------->
    console.log("placeholder " + input.placeholder);
    // console.log("new input " + (NewInput));----------------------->
    document.getElementById('Result').innerText = "=" + `${NewInput}`;
}
//
function Equal() {
    //Short double operator adjacently

    input.placeholder = NewInput;
}


//Keyboard listner---------->
document.onkeyup = (e) => {
    if (e.key == '0') { appendno(0); }
    if (e.key == '1') { appendno(1); }
    if (e.key == '2') { appendno(2); }
    if (e.key == '3') { appendno(3); }
    if (e.key == '4') { appendno(4); }
    if (e.key == '5') { appendno(5); }
    if (e.key == '6') { appendno(6); }
    if (e.key == '7') { appendno(7); }
    if (e.key == '8') { appendno(8); }
    if (e.key == '9') { appendno(9); }
    if (e.key == '+') { appendOp('+'); }
    if (e.key == '-') { appendOp('-'); }
    if (e.key == '*') { appendOp('*'); }
    if (e.key == '/') { appendOp('/'); }
    if (e.key === "Backspace") {

        input.placeholder = input.placeholder.slice(0, -1);
        //agar last mei operator h too ye use hata dega--------->
        CheckLast();
        let a = eval(input.placeholder);
        R.innerText = "=" + `${a}`;
    }
    if (e.key == '') { appendno(); }
    if (e.key == "Enter") { Equal(); }

}

//agar last mei operator h too ye use hata dega uska function--------->//agar last mei operator h too ye use hata dega--------->
function CheckLast(){
    if (input.placeholder.slice(-1) === ("+")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("-")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("*")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
    if (input.placeholder.slice(-1) === ("/")) {
        input.placeholder = input.placeholder.slice(0, -1);
    }
}
