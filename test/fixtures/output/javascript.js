// intentionally bad style and rules triggers
callBeforeDefine(1, 2); // inline comment to trigger line-comment-position and no-inline-comments

let x = 1; let y = 2;
const neverReassigned = 3;
const foo_bar = 4;
const object = {
	a: 1,
	b: 2,
	c: 3,
};
const array = [
	1,
	2,
	3,
];

if (x) { alert('hi'); } else { returnValue(); }

function callBeforeDefine(a, b, c, d, e, f, g) { return a + b; }

function returnValue() { if (x) { return 1; } }

class C { set value(v) { this._v = v; } }

const mix = (a) => { return a + 1; };
const badArrow = (a) => { return a; };
const nested = a ? (b ? c : d) : e;
const yoda = x === 1;
const eq = x == y;

const longLine = 'this is a very very very very very very very very very very very very long string';

const chain = Promise.resolve(1)
	.then(function (z) { return z; })
	.then(function (z) { return z; });

const spaces = 1 + 2;
const unary = typeof x;
const string_ = 'a\
b';
const temporary = `hello ${name}`;
tag `x`;

const regex = new RegExp('a');
const rgx = /abc/;
const url = 'javascript:alert(1)';
const t = object.prop;
const oc = { ...object };
const dd = object.a;
const s = `a${x}`;
const seq = (x = 1, y = 2);

function maxParameters(a, b, c, d, e, f, g) {}

function defaultParameterLast(a = 1, b) {}

function empty() {}

function noImplicit() { return Boolean(x); }

function parameterReassign(a) { a = 2; }

function uselessReturn() {}

function manyBranches(a, b, c, d, e, f, g) {
	if (a && b && c && d && e && f) { return g; }
}

for (const k in object) { console.log(k); }

for (let index = 0; index < 3; index++) {
	function inLoop() { return index; }
}

while (x < 10) { x += 0; }

while (false) { break; }

if (x) { bar(); } else { foo(); }

{ console.log(1); }

switch (x) {
	case 1: { console.log(1); break;
	}
	default: { console.log(2); break;
	}
	case 2: { console.log(3); break;
	}
}

const array2 = [1, 2];

const function_ = function () { return arguments[0]; };
function_.apply(null, array2);

function compare() { return x === x; }

function mixOps() { return 1 + 2 * 3; }

function callSpace() { return foo(1); }

function rest(...arguments_) { return arguments_; }

const object2 = {
	a: 1,
	b: 2,
	c: 3,
};

const tpl = 'hello ${name}';

const notConst = (a) => { const b = a; return b; };

function noAwait() { async function f() { return 1; } }

function noDestructuring() { const z = object.a; return z; }

function noDefaultCase(value) {
	switch (value) {
		case 1: { return 1;
		}
	}
}

function arrayCallback() {
	return [1, 2, 3].map(function (n) {
		if (n > 1) { return n; }
	});
}

function functionStyle() {}

function foo() { return foo.call(null, 1); }

function noSpread() { return Math.max.apply(null, array2); }

function preferReject() { return Promise.reject('err'); }

function template() { return 'a' + 'b'; }

function noUnicode() { return /a/.test('a'); }

function underscore() { return object._x; }

function uselessTernary() { return Boolean(x); }

function lonelyIf(a, b) { if (a && b) { return 1; } }

function noMixedNewlines(a,
	b) { return a + b; }

function comma() {
	const a = [
		1,
		2,
	];
	const b = {
		a: 1,
		b: 2,
	};
	return {
		a,
		b,
	};
}

function noSpacing() { return a + b; }

function noSpacesInParens() { return (1); }

function keyword() { if (true) {} }

function semiStyle() {
	const s = 1;
	return s;
}

function semis() { const s = 2; }

const property = object.prop;