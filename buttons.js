document.addEventListener('DOMContentLoaded', function(){

    window.TrackJS && TrackJS.install({ 
        token: "7de574647bdc4ed4b242f57714fd9e0a"
        // for more configuration options, see https://docs.trackjs.com
      });     

    class invalidToken extends Error {
        constructor(message) {
          super(message);
          this.name = "ValidationError";
        }
      }

      // Usage
    function readUser() {
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
  
        if (typeof firstNum !== 'number') {
            throw new invalidToken("NaN: first input field");
        }
        if (typeof secondNum !== 'number') {
            throw new invalidToken("NaN: second input field");
        }
    }


    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      try{
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      readUser();
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`); 
      }
      catch(err){
        if (err instanceof invalidToken) {
            alert("Invalid input: " + err.message); // Invalid input: NaN
          } else if (err instanceof SyntaxError) { 
            alert("Syntax Error: " + err.message);
      }
      else{
        alert(err);
      }
    }
      finally{
        alert('No invalid tokens in the input pls! thx');
      }
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish
 
    // 0 - Console Log
    errorBtns[0].addEventListener('click', function(){
                
        console.log('Console Log Demo');
    });

    // 1 - Console Error
    errorBtns[1].addEventListener('click', function(){
        console.error('Console Error Demo');
    });

    // 2 - Console Count
    errorBtns[2].addEventListener('click', function(){
        console.count('Count Button');
    });

    // 3 - Console Warn
    errorBtns[3].addEventListener('click', function(){
        console.warn('Console Warn Button')
    });

    // 4 - Console Assert
    errorBtns[4].addEventListener('click', function(){
        const x = 5;
        const y = 2;
        const reason = 'x is expected to be less than y';
        console.assert(x < y, {x, y, reason});
    });

    // 5 - Console Clear
    errorBtns[5].addEventListener('click', function(){
        console.clear();
    });

    // 6 - Console Dir
    errorBtns[6].addEventListener('click', function(){
        console.dir(errorBtns);
    });

    // 7 - Console dirxml
    errorBtns[7].addEventListener('click', function(){
        console.dirxml(document.body);
    });

    // 8 - Console Group Start
    errorBtns[8].addEventListener('click', function(){
        console.group('console.group button');
    });

    // 9 - Console Group End
    errorBtns[9].addEventListener('click', function(){
        console.groupEnd();

    });

    // 10 - Console Table
    errorBtns[10].addEventListener('click', function(){
        var bicycle = [
            {
                type: 'Mountain',
                frame: 'Metal',
                tyres: 'Tubeless'
            
            },
            {
                type: 'Road',
                frame: 'Carbon Fiber'
            },
            {
              type: 'BMX',
              frame: 'Metal'
            }
          ];
          console.table(bicycle);

    });

    // 11 - Start Timer
    errorBtns[11].addEventListener('click', function(){
        console.time('Timer Button');
    });

    // 12 - End Timer
    errorBtns[12].addEventListener('click', function(){
        console.timeEnd('Timer Button');
    });

    // 13 - Console Trace
    errorBtns[13].addEventListener('click', function(){
        const first = () => { second(); };
        const second = () => { third(); };
        const third = () => { fourth(); };
        const fourth = () => { console.trace(); };
        first();
        console.trace();
    });

    // 14 - Trigger a Global Error
    errorBtns[14].addEventListener('click', function(){
        window.onerror = function(event){
            console.log('An error ocurred!!!');
            alert('This is a global error!');
        }
        abooM('bad code!');
        
    });


});
    
