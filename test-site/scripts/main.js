let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/黑色四叶草1.png') {
        myImage.setAttribute('src', 'images/黑色四叶草2.png');
    } else {
        myImage.setAttribute('src', 'images/hello.jpg');
    }    
};

let myButton = document.querySelector('button');
myHeading = document.querySelector('h1');

let myName;
function setUserName() {
    myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    return;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
};

