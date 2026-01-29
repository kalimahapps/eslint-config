// filepath: example-bad.ts
// Triple-slash reference (should use import)
/// <reference path="foo.d.ts" />

// @ts-ignore
import fs = require('fs');
import { type EventEmitter } from "events"; // inconsistent-type-imports
import * as path from "path";
import { Array as ArrayType } from "global"; // wrapper object type

namespace MyNamespace { // no-namespace
  export const x = 1;
}

let arr = new Array<number>(); // no-array-constructor
delete arr[0]; // no-array-delete

enum E {
  A = 1,
  B = 1, // no-duplicate-enum-values
}

type U = string | number | string; // no-duplicate-type-constituents

type Empty = {}; // no-empty-object-type

let anyVar: any = 5; // no-explicit-any
let anyVar2: any = () => {}; // no-unsafe-assignment

let foo = anyVar2(); // no-unsafe-call
foo.bar; // no-unsafe-member-access

let unused: number = 123; // no-unused-vars

function test(a: any) { // no-explicit-any
  // @ts-ignore
  let b = a + 1; // ban-ts-comment (no description)
  return b as any; // no-unsafe-return
}

let promise = Promise.resolve(5);
promise.then(); // await-thenable, no-floating-promises

for (const i in arr) { // no-for-in-array
  console.log(i);
}

eval('console.log("bad")'); // no-implied-eval

function Ctor() {} // no-misused-new
const c = new Ctor();

let p: Promise<void>;
async function fooAsync() {} // require-await

let plus = 1 + (anyVar as any); // restrict-plus-operands

let tpl = `Value: ${anyVar}`; // restrict-template-expressions

let obj = {};
(obj as any)!; // no-extra-non-null-assertion

let opt: { foo?: { bar: string } };
opt?.foo!.bar; // no-non-null-asserted-optional-chain

type Redundant = string | never; // no-redundant-type-constituents

const req = require('fs'); // no-require-imports

const self = this; // no-this-alias

function assert(x: number) {
  (x as number); // no-unnecessary-type-assertion
}

function generic<T extends {} = {}>() {} // no-unnecessary-type-constraint

function unsafeArg(x: any) {
  test(x); // no-unsafe-argument
}

function unsafeEnum(e: E, n: number) {
  return e === n; // no-unsafe-enum-comparison
}

let f: Function; // no-unsafe-function-type

function throwNonError() {
  throw "error"; // only-throw-error
}

const asConst = <const>{ a: 1 }; // prefer-as-const

module MyModule {} // prefer-namespace-keyword

Promise.reject("fail"); // prefer-promise-reject-errors

let expr; expr; // no-unused-expressions

let wrapper = new String("bad"); // no-wrapper-object-types

let unbound = obj.hasOwnProperty;
unbound(); // unbound-method

export { }