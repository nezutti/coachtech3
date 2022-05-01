const globalConst = 'globalConst';
let globalLet = 'globalLet';

function dummyFunc(callback) {
   const localConst = 'localConst';
  let localLet = 'localLet';
  callback(localConst, LocalLet);

}

console.log(globalConst);
console.log(globalLet);

// 値の更新
globalLet = 'updateGlobalLet';
console.log(globalLet);

function callLog(a, b) {
  console.log(a);
  console.log(b);
}

dummyFunc(callLog)