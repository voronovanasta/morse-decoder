const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
let exprArr=expr.split('')

let newArr=[]
let resultArr = []
let count = exprArr.length/2;
let i = 0
while(count!=0){
    newArr.push(exprArr.splice(i,2))
    count--
}

let stringArr=(newArr.map((item)=>item.join('')))
let morseArr=[]

for(let i=0;i<stringArr.length; i++){
   
    if(stringArr[i] =='10'){
        morseArr.push('.')
    }
    if(stringArr[i] =='11'){
        morseArr.push('-')

    }
    if(stringArr[i] =='**'){
       
        morseArr.push('**')

    }
    if(stringArr[i] =='00'){
        morseArr.push(' ')
    }

}


let count2 = morseArr.length/5;
let j = 0
while(count2!=0){
    resultArr.push(morseArr.splice(j,5))
    count2--
}

return (resultArr.map((item)=>item.join(''))).map(item=>item.trim()).map(item=>item in MORSE_TABLE ? MORSE_TABLE[item] : ' ').join('')




}

module.exports = {
    decode
}