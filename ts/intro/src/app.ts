// console.log('selam');

// const a = (a, b) => a + b;

//* ---- 1. BASIC TYPES -----

const greeting: string = 'Hello, TypeScript!';
console.log(greeting);

let age: number = 25
const isStudent: boolean = true;

//! age = '25'

//* ---- 2. TYPE INFERENCE -----
let city = 'Berlin'
let score = 100

// ! city = 50

console.log(city, score);

//* ---- 3. ARRAY -----
const fruits: Array<string> = ['apple', 'banana']

//! fruits.toUpperCase()
fruits[1]?.toUpperCase()
//! fruits.push(20)
fruits.push('20')

const numbers: number[] = [1, 2, 3, 4]
//! numbers.push('asd')
numbers.push(123)

// * ---- 4. Tuples ----
// Fixed-length arrays where each position has a specific type.
const student: [number, string, boolean] = [1, 'lee', true]

// const classRoster: Array<{ name: string }> = []
const classRoster: { name: string, score: number }[] = [{ name: 'lee', score: 90 }, { name: 'bunyamin', score: 100 }]
const obj = { namee: 'ali', score: 80 }
//! classRoster.push(obj)

// [[1, 'lalalal']]
const exp: [number, string][] = []
//! exp.push(['lalalal', 1])
exp.push([1, 'alalala'])

// * ---- 5. Enums ----
// Enum give friendly names to sets of values

const enum Roles {
    ADMIN = 'admin',
    AGENT = 'agent',
    CUSTOMER = 'customer'
}

const userInfo = {
    name: 'lee',
    role: Roles.ADMIN
}

console.log(userInfo);

// * ---- 6. Union Types ----
// A variable can hold more than one type using the pipe (|) operator

let id: number | string = 101
id = '101'
//! id = true

let name: null | string = null
name = 'lee'

let phone: number | string = 2604325678
phone = '+2604325678'


// * ---- 7. Type Aliases ----
// Create reusable custom type names for complex or reapated types.

type Bunyamin = number | string

let idd: Bunyamin = 101

let phonee: Bunyamin = '+2604325678'

// true, 1, 'lee'

type Start = boolean | string | number

let email: Start = true
email = 'email@gmail.com'
email = 123

// * ---- 8. String Literal Types ----
// Restrict a variable to sepecific string values only.

// let color = 'yellow'
// let color = 'navy blue'

type Color = 'yellow' | 'navy blue'

// let color: Color = 'red'
let color: Color = 'yellow'
color = 'navy blue'
// color = 'red'