// intentionally bad style and rules triggers
callBeforeDefine(1,2) // inline comment to trigger line-comment-position and no-inline-comments

var x=1; var y=2
let neverReassigned = 3
const foo_bar = 4
const obj = {'a':1,b:2, c:3}
const arr = [ 1,2,
    3 ]

if(x)
{alert("hi")} else { returnValue() }

function callBeforeDefine(a,b,c,d,e,f,g){ return a+b }

function returnValue() { if (x) { return 1 } else { return } }

class C { set value(v){ this._v = v } }

const mix = (a) => a+1
const badArrow = a=>a
const nested = a ? b ? c : d : e
const yoda = 1 === x
const eq = x == y

const longLine = "this is a very very very very very very very very very very very very long string"

const chain = Promise.resolve(1)
    .then(function(z){ return z })
.then(function(z){ return z })

const spaces = 1  +  2
const unary = typeof  x
const str = 'a\
b'
const temp = `hello ${ name }`
tag`x`

const regex = new RegExp('a')
const rgx = /abc/
const url = 'javascript:alert(1)'
const t = obj['prop']
const oc = Object.assign({}, obj)
const dd = obj.a
const s = 'a' + x
const seq = (x=1, y=2)

function maxParams(a,b,c,d,e,f,g){}

function defaultParamLast(a=1,b){}

function empty(){}

function noImplicit(){ return !!x }

function paramReassign(a){ a = 2 }

function uselessReturn(){ return; }

function manyBranches(a,b,c,d,e,f,g){
    if(a){ if(b){ if(c){ if(d){ if(e){ if(f){ return g } } } } } }
}

for (const k in obj){ console.log(k) }

for (let i=0;i<3;i++){
    function inLoop(){ return i }
}

while (x < 10) { x += 0 }

while (false) { break }

if (!x) { foo() } else { bar() }

{ console.log(1) }

switch(x){
case 1 :console.log(1); break
default: console.log(2); break
case 2: console.log(3); break
}

const arr2 = [
1,2
]

const fn = function(){ return arguments[0] }
fn.apply(null, arr2)

function compare(){ return x === x }

function mixOps(){ return 1 + 2 * 3 }

function callSpace(){ return foo ( 1 ) }

function rest(... args){ return args }

const obj2 = {a:1,
b:2, c:3}

const tpl = "hello ${name}"

const notConst = (a)=>{ let b = a; return b }

function noAwait(){ async function f(){ return 1 } }

function noDestructuring(){ const z = obj.a; return z }

function noDefaultCase(value){
    switch (value){
        case 1: return 1
    }
}

function arrayCb(){
    return [1,2,3].map(function(n){
        if(n>1){ return n }
    })
}

function funcStyle(){}

function foo(){ return foo.call(null,1) }

function noSpread(){ return Math.max.apply(null, arr2) }

function preferReject(){ return Promise.reject('err') }

function template(){ return "a" + "b" }

function noUnicode(){ return /a/.test("a") }

function underscore(){ return obj._x }

function uselessTernary(){ return x ? true : false }

function lonelyIf(a,b){ if(a){ if(b){ return 1 } } }

function noMixedNewlines(a,
b){ return a+b }

function comma(){
    const a = [1,
    2]
    const b = {a:1,
    b:2}
    return {a:a,b:b}
}

function noSpacing(){ return a+b }

function noSpacesInParens(){ return ( 1 ) }

function keyword(){ if(true){return} }

function semiStyle(){ let s = 1
; return s }

function semis(){ let s = 2 }

const prop = obj .prop