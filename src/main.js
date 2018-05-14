import Rx from 'rxjs/Rx';
import * as R from 'ramda';
console.log(R)

const inputOne = document.querySelector('#input-one')
const inputTwo = document.querySelector('#input-two')


const searchBox = document.querySelector('#search'); //-> <input> 
const results = document.querySelector('#results'); //-> <ul> 
const count = document.querySelector('#count'); //-> <label>
const URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=';

















// Rx.Observable.fromEvent(inputOne, 'keyup')
//   .mergeMap(_ => Rx.Observable.fromEvent(inputTwo, 'keyup'))
//   .subscribe(console.log);




// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/range';
// import 'rxjs/add/observable/concat';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/map';
// const source1$ = Observable.range(1, 3).delay(3000);
// const source2$ = Observable.of('a', 'b', 'c');
// const result = Observable.concat(source1$, source2$);
// result.subscribe(console.log);
// console.log('after')

