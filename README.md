## ⚙️ React Core Concepts (i)

> Explore React fundamentals, JSX, Components, Props, Props Destructuring, and Conditional Rendering through practical examples and beginner-friendly notes.


### 📁 Project Structure

```text
react-core-concepts-part-i/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   ├── Todo.jsx
│   ├── Actors.jsx
│   ├── Singers.jsx
│   ├── Developers.jsx (Exercise)
│   ├── Doctors.jsx (Exercise)
│   ├── Summary.jsx
│   ├── Library.jsx
│   ├── Book.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```


### 📌 Components Overview

| Component | Purpose |
|---|---|
| `App.jsx` | Main application component |
| `Todo.jsx` | Todo component practice |
| `Actors.jsx` | Rendering actor data |
| `Singers.jsx` | Working with singer data |
| `Developers.jsx` | Displaying developer information |
| `Doctors.jsx` | Rendering doctor details |
| `Summary.jsx` | JSX and component composition |
| `Library.jsx` | Library component practice |
| `Book.jsx` | Displaying book information |




#### 📌 Create a React Project

```bash
npm create vite@7.0.0 react-core-concepts-part-i -- --template react 
or,
npm create vite@latest react-core-concepts-part-i -- --template react 
```
#### 📌 To live a React Project
```
npm run dev
```


#### || Component Flow

`Parent Component` ➜ `Child Component`

React-এ Parent Component থেকে Child Component-এ Props-এর মাধ্যমে data পাঠানো হয়।


<details>
<summary>|| JSX Comment</summary>

```jsx
{/* This is a JSX comment. */}
```

</details>

---

### ❔ What is React?

**React** হলো JavaScript-এর একটি জনপ্রিয় library, যা ব্যবহার করে সহজে interactive ও dynamic user interface (UI) তৈরি করা যায়। React-এ UI-কে ছোট ছোট reusable **Components**-এ ভাগ করা হয়, ফলে একই code বারবার ব্যবহার করা এবং website তৈরি ও পরিচালনা করা সহজ হয়।



### ❔ What is JSX?

**JSX (JavaScript XML)** হলো JavaScript-এর একটি syntax extension, যা React-এ JavaScript code-এর মধ্যে HTML-এর মতো syntax ব্যবহার করে সহজে UI তৈরি করতে সাহায্য করে। এটি দেখতে HTML-এর মতো হলেও JSX-এর মাধ্যমে JavaScript expression-ও UI-এর মধ্যে ব্যবহার করা যায়।



### ❔ What are Props?

**Props (Properties)** হলো React-এর এমন একটি পদ্ধতি, যার মাধ্যমে Parent Component থেকে Child Component-এ data পাঠানো যায়। Props ব্যবহার করে একই Component-এ বিভিন্ন data প্রদর্শন করা সম্ভব। Child Component-এর মধ্যে Props read-only হিসেবে কাজ করে।

<details>
<summary>|| Example : Passing Props</summary>

```jsx
// Parent Component
function App() {
  return (
    <Developer name="Bayjid" tech="JavaScript"></Developer>
  );
}

// Child Component
function Developer(props) {
  return (
    <h2>{props.name} — {props.tech}</h2>
  );
}
```

**Output:**

`Bayjid — JavaScript`

</details> <br>




### 📌 Props Destructuring

```jsx
function Developer({ name, tech }) {
  return (
    <h2>{name} — {tech}</h2>
  );
}
```

Destructuring ব্যবহার করলে `props.name` ও `props.tech`-এর পরিবর্তে সরাসরি `name` ও `tech` লেখা যায়।



<br>






<details>
<summary>📌 3 Ways to Apply Styles in React</summary>

### Way - 01 - External Css
```
App.css >>
.student {
  margin: 16px;
  padding: 20px;
  border: 1px solid #22d3ee;
  border-radius: 12px;
  background-color: #0f172a;
  color: #e2e8f0;
}


>> Add className
<div className='student'>

```
### Way - 02 - Inline Styling Using an Object

```jsx
function Student() {
    const studentStyle = {
        color: "lightgreen",
    backgroundColor: "#0f172a",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid aqua"
  };

  return (
      <div style={studentStyle}>
      <h2>Bayjid Alom</h2>
      <p>I am a React learner.</p>
    </div>
  );
}

```

### Way - 03 - Inline Styling

```jsx
<div style={{
  border: "1px solid #38bdf8",
  borderRadius: "12px",
  margin: "10px",
  padding: "20px",
  backgroundColor: "#0f172a",
  color: "#f1f5f9",
  fontSize: "18px"
}}>
  <h2>Bayjid Alom</h2>
  <p>I am a React learner.</p>
</div>
```

</details>
<br>








<details>
<summary>📌 What is a Component?</summary>
<br>

> 🔠 **Naming Rule:** Component-এর নাম Capital Letter দিয়ে শুরু করতে হয়।

React-এ **Component** হলো UI-এর একটি reusable অংশ, যা সাধারণত JavaScript function দিয়ে তৈরি করা হয়। যেমন: Navbar, Product Card, Footer ইত্যাদি। Component ব্যবহার করলে একই code বারবার না লিখে সহজেই reuse করা যায়।

```
function Person() {
  const name = "Bayjid Alom Jihad";
  const age = 19;
  const profession = "Frontend Developer Learner";

  return (
    <div className="person-card">
      <h2>{name}</h2>
      <p>I am {age} years old.</p>
      <p>{profession}</p>
      <p>Passionate about learning React and building web projects.</p>
      <button>Hire Me</button>
    </div>
  );
}
```

#### ❔ Calling like this...

```
<Person></Person>
```

</details>

<br>






<details>
<summary>📌 Reusable Components with Props</summary>

React `props` allow us to pass data from a parent component to a child component.

**Example:**

```jsx
function Developer(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

// Usage
<Developer name="Bayjid" tech="JavaScript" />
<Developer name="Jihad" tech="Python" />
```

### Props in React

- `props` ব্যবহার করে এক Component থেকে অন্য Component-এ তথ্য পাঠানো হয়।
- `name` ও `tech` ব্যবহার করে ডেভেলপারের নাম ও প্রযুক্তির নাম দেখানো হয়েছে।
- একই Component ব্যবহার করে ভিন্ন ভিন্ন ডেভেলপারের তথ্য দেখানো হয়েছে।

</details> <br>





<details>
<summary>📌 React Fragment <>   </></summary>

A **Fragment** lets you group multiple JSX elements without adding an extra DOM element.

### Example
```jsx
function App() {
  return (
    <>
      <h1>Hello, Bayjid!</h1>
      <p>Learning React</p>
    </>
  );
}
```

### When to Use
- When returning multiple JSX elements from a component.
- When you don't need an extra wrapper element like `div`.

**Note:** `<>...</>` is the short syntax for a Fragment. It keeps the DOM cleaner by avoiding unnecessary wrapper elements.

</details>

<br>




<details>
<summary>📌 React Import & Export</summary>


**User.jsx**
```jsx
export const name = "Bayjid";

export default function User() {
  return <h2>Hello, {name}!</h2>;
}
```

**App.jsx**
```jsx
import User, { name } from "./User.jsx";

function App() {
  return (
    <div>
      <User />
      <p>Name: {name}</p>
    </div>
  );
}

export default App;
```

- `export default` — Import without `{}`.
- `named export` — Import with `{}`.
- `import` — Use exported components or values in another file.

</details>


<br>





### ❓ Conditional Rendering কী?


React-এ **Conditional Rendering** হলো নির্দিষ্ট শর্তের (condition) উপর ভিত্তি করে UI-তে কোনো content দেখানো বা লুকানো। এর জন্য `if-else`, Ternary Operator (`? :`) এবং Logical AND (`&&`) ব্যবহার করা হয়।

**উদাহরণ:** User login করলে Dashboard দেখাবে, অন্যথায় Login button দেখাবে।


<details>
<summary>📌 6 Ways to Implement Conditional Rendering</summary>

```jsx
<Todo task="Learn React" isDone={true} time={30}></Todo>
<Todo task="Revise JavaScript" isDone={true}></Todo>
<Todo task="Learn Angular" isDone={false}></Todo>
```

এখানে `task`, `isDone` এবং `time` হলো Props। `time` না পাঠালে default value হিসেবে `0` ব্যবহার করা যাবে।

---

### 01. Basic Rendering

<details>
<summary>📌 View Explanation & Code</summary>

**ব্যাখ্যা:** কোনো condition ছাড়াই Props-এর data UI-তে দেখানো হয়। এটি basic rendering, conditional rendering নয়।

```jsx
export default function Todo({ task, isDone }) {
  return (
    <li>Task: {task}</li>
  );
}
```

**Output:**
- Task: Learn React
- Task: Revise JavaScript
- Task: Learn Angular

</details>

### 02. if-else Condition

<details>
<summary>📌 View Explanation & Code</summary>

**ব্যাখ্যা:** `if-else` ব্যবহার করে condition অনুযায়ী আলাদা content দেখানো যায়।

```jsx
export default function Todo({ task, isDone, time = 0 }) {
  if (isDone === true) {
    return <li>Done: {task} — Duration: {time}m</li>;
  }

  return <li>To be done: {task} — Duration: {time}m</li>;
}
```

**Output:**
- Done: Learn React — Duration: 30m
- Done: Revise JavaScript — Duration: 0m
- To be done: Learn Angular — Duration: 0m

</details>

### 03. Ternary Operator (`? :`)

<details>
<summary>📌 View Explanation & Code</summary>

**ব্যাখ্যা:** Ternary Operator দিয়ে একটি condition-এর ভিত্তিতে দুইটি expression-এর মধ্যে একটি return করা হয়।

**Syntax:** `condition ? true : false`

```jsx
export default function Todo({ task, isDone, time = 0 }) {
  return (
    isDone
      ? <li>Done: {task} — Duration: {time}m</li>
      : <li>Pending: {task} — Duration: {time}m</li>
  );
}
```

**Output:**
- Done: Learn React — Duration: 30m
- Pending: Learn Angular — Duration: 0m

</details>

### 04. Logical AND (`&&`) Operator

<details>
<summary>📌 View Explanation & Code</summary>

**ব্যাখ্যা:** Condition `true` হলে ডান পাশের content render হয়। Condition `false` হলে content render হয় না।

```jsx
export default function Todo({ task, isDone, time = 0 }) {
  return (
    isDone && <li>Done: {task} — Duration: {time}m</li>
  );
}
```

**Output:**
- Done: Learn React — Duration: 30m
- Done: Revise JavaScript — Duration: 0m
- Learn Angular-এর জন্য কোনো output দেখাবে না।

</details>

### 05. Logical OR (`||`) Operator

<details>
<summary>📌 View Explanation & Code</summary>

**ব্যাখ্যা:** Condition `false` হলে `||`-এর ডান পাশের content render করা যায়। Condition `true` হলে ডান পাশের content render হয় না।

```jsx
export default function Todo({ task, isDone, time = 0 }) {
  return (
    isDone || <li>Pending: {task} — Duration: {time}m</li>
  );
}
```

**Output:**
- প্রথম দুটি task-এর জন্য কোনো output দেখাবে না।
- Pending: Learn Angular — Duration: 0m

**মনে রাখবে:** `||` ব্যবহার করলে condition `true` হলে বাম পাশের value-ই result হয়। এখানে `true` React-এ দৃশ্যমান content তৈরি করে না।

</details>

## 06. Using a Variable

<details>
<summary>📌 View Explanation & Code</summary>

**ব্যাখ্যা:** Condition অনুযায়ী একটি variable-এর মধ্যে JSX রাখা হয়। এরপর সেই variable-টি `return` করা হয়।

```jsx
export default function Todo({ task, isDone, time = 0 }) {
  const displayTime = time ? time : 5;
  let listItem;

  if (isDone === true) {
    listItem = <li>Done: {task} — Duration: {displayTime}m</li>;
  } else {
    listItem = <li>To be done: {task} — Duration: {displayTime}m</li>;
  }

  return listItem;
}
```

**Output:**
- Done: Learn React — Duration: 30m
- Done: Revise JavaScript — Duration: 5m
- To be done: Learn Angular — Duration: 5m

এখানে `time`-এর value `0` হলে `displayTime`-এর value `5` হবে, কারণ `0` একটি falsy value।

</details>

---

### 📝 Quick Summary

| Method | ব্যবহার |
|---|---|
| Basic Rendering | Condition ছাড়াই content দেখানো |
| `if-else` | একাধিক condition অনুযায়ী content দেখানো |
| Ternary (`? :`) | দুইটি expression-এর মধ্যে একটি বেছে নেওয়া |
| Logical AND (`&&`) | Condition `true` হলে content দেখানো |
| Logical OR (`||`) | Condition `false` হলে fallback content দেখানো |
| Variable | JSX-কে variable-এ রেখে পরে return করা |

**💡 Best Practice:** সাধারণ condition-এর জন্য `&&`, দুইটি বিকল্পের জন্য Ternary Operator এবং জটিল condition-এর জন্য `if-else` ব্যবহার করো।


</details>


<br>








### 📌 CamelCase in React

React JSX uses camelCase for most event handlers and many attributes.

| HTML | React (JSX) |
|---|---|
| `class` | `className` |
| `onclick` | `onClick` |
| `onchange` | `onChange` |
| `onsubmit` | `onSubmit` |
| `tabindex` | `tabIndex` |
| `readonly` | `readOnly` |

**Naming conventions:**
- **camelCase:** `handleClick`, `firstName`
- **PascalCase:** `MyComponent`, `UserProfile`
- **Lowercase:** `div`, `button`, `p`

**Note:** `className` replaces `class` in JSX, and event handlers use camelCase, such as `onClick`.



 <br>








<details>
<summary>📌 Getting Started with React + Vite</summary>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

</details><br>




<details>
<summary>📌 Explore more about ReactJS: Concepts, Benefits and Limitations</summary>

## ReactJS পরিচিতি এবং React, Vue ও Angular-এর তুলনা

> সতর্কতা: এই ডকুমেন্টের তথ্য আমার সাধারণ জ্ঞানের ওপর ভিত্তি করে লেখা। ভার্সন, ফিচার ও জনপ্রিয়তা দ্রুত বদলায়, তাই ব্যবহারের আগে অফিসিয়াল ডকুমেন্টেশনে যাচাই করে নিন।

### ReactJS কী?

React (ReactJS) হলো ইউজার ইন্টারফেস (UI) তৈরি করার একটি JavaScript লাইব্রেরি। এটি মূলত Facebook (বর্তমান Meta) তৈরি করেছিল এবং ২০১৩ সালের দিকে ওপেন সোর্স হিসেবে প্রকাশ করে। (সালটি আমি মোটামুটি নিশ্চিত, তবে অফিসিয়াল সূত্রে যাচাই করে নিতে পারেন।)

একটি বিষয় পরিষ্কার করা ভালো: React নিজে পূর্ণাঙ্গ ফ্রেমওয়ার্ক নয়, এটি মূলত "View" অংশ, অর্থাৎ ওয়েবপেজে যা দেখা যায় সেটি বানানোর জন্য। রাউটিং, স্টেট ম্যানেজমেন্ট ইত্যাদির জন্য সাধারণত আলাদা লাইব্রেরি ব্যবহার করা হয়।

### React-এর মূল ধারণাগুলো

1. **Component-based আর্কিটেকচার:** পুরো UI-কে ছোট ছোট স্বতন্ত্র অংশে (component) ভাগ করা হয়, যেমন Navbar, Button, ProductCard। একবার বানালে বারবার ব্যবহার করা যায়।

2. **JSX:** JavaScript-এর ভেতরেই HTML-এর মতো দেখতে কোড লেখা যায়। উদাহরণ: একটি Greeting component যা `<h1>হ্যালো, {name}!</h1>` রিটার্ন করে।

3. **Virtual DOM:** React সরাসরি ব্রাউজারের DOM বারবার পরিবর্তন না করে আগে একটি হালকা কপিতে (Virtual DOM) পরিবর্তন হিসাব করে, তারপর শুধু যেটুকু বদলেছে সেটুকুই আপডেট করে। এতে সাধারণত পারফরম্যান্স ভালো হয়। (তবে "Virtual DOM সবসময় দ্রুত", এটি একটু সরলীকৃত দাবি; বাস্তবে এর বড় সুবিধা হলো UI কোড ম্যানেজ করা সহজ হওয়া।)

4. **State ও Props:**
   - State: component-এর নিজস্ব পরিবর্তনশীল ডেটা
   - Props: এক component থেকে আরেক component-এ ডেটা পাঠানোর উপায়

5. **Hooks:** `useState`, `useEffect` ইত্যাদির মাধ্যমে function component-এ state ও লাইফসাইকেল ব্যবহার করা যায়।

### কেন ডেভেলপারদের কাছে জনপ্রিয়?

নিচের কারণগুলো সাধারণভাবে স্বীকৃত। তবে "কোনটি কতটা গুরুত্বপূর্ণ" তা ডেভেলপারভেদে আলাদা, এবং এটি আমার ব্যাখ্যা, কোনো নির্দিষ্ট জরিপের ফল নয়।

1. **Reusable component:** একই কোড বারবার লিখতে হয় না, প্রজেক্ট গোছানো থাকে।
2. **বিশাল কমিউনিটি ও ইকোসিস্টেম:** টিউটোরিয়াল, লাইব্রেরি ও সমস্যার সমাধান সহজে পাওয়া যায়।
3. **চাকরির বাজারে চাহিদা:** অনেক কোম্পানি React ব্যবহার করে, তাই সুযোগ বেশি। (দেশ ও সময়ভেদে চাহিদা ভিন্ন হতে পারে, স্থানীয় জব পোর্টালে যাচাই করুন।)
4. **তুলনামূলক সহজ শেখা:** JavaScript জানলে শুরু করা সহজ, যদিও গভীরে গেলে জটিলতা আছে।
5. **ফ্লেক্সিবিলিটি:** নিজের পছন্দমতো টুল বেছে নেওয়া যায়। Next.js-এর মতো ফ্রেমওয়ার্কের সঙ্গে সার্ভার-সাইড রেন্ডারিংও করা যায়।
6. **React Native:** একই ধারণা ব্যবহার করে মোবাইল অ্যাপও বানানো যায়।
7. **বড় কোম্পানির সমর্থন:** Meta এটি রক্ষণাবেক্ষণ করে এবং অনেক বড় প্রতিষ্ঠান ব্যবহার করে।

### কিছু সীমাবদ্ধতা

- নতুনদের জন্য শুরুতে অনেক ধারণা একসাথে শিখতে হয় (JSX, state, hooks, build tools)।
- কোন কোন লাইব্রেরি ব্যবহার করবেন তা নিজেকেই ঠিক করতে হয়।
- ইকোসিস্টেম দ্রুত বদলায়, তাই নতুন পদ্ধতি শেখার চাপ থাকে।

### React vs Vue vs Angular তুলনা

| বিষয় | React | Vue | Angular |
|---|---|---|---|
| ধরন | UI লাইব্রেরি | প্রগ্রেসিভ ফ্রেমওয়ার্ক | পূর্ণাঙ্গ ফ্রেমওয়ার্ক |
| তৈরি করেছে | Meta (Facebook) | Evan You (একজন প্রাক্তন Google ডেভেলপার, এবং পরে কমিউনিটি) | Google |
| প্রথম প্রকাশ (আনুমানিক) | ২০১৩ | ২০১৪ | AngularJS ২০১০, আধুনিক Angular ২০১৬ (সাল দুটি আমি মোটামুটি নিশ্চিত) |
| মূল ভাষা | JavaScript (JSX), TypeScript-ও সাপোর্ট করে | JavaScript, TypeScript-ও সাপোর্ট করে | TypeScript (প্রায় ডিফল্ট) |
| টেমপ্লেট | JSX | HTML-ভিত্তিক টেমপ্লেট (Single File Component) | HTML টেমপ্লেট + বিশেষ সিনট্যাক্স |
| শেখার সহজতা | মাঝারি | সাধারণত সবচেয়ে সহজ বলে মনে করা হয় | তুলনামূলক কঠিন |
| ফ্লেক্সিবিলিটি | অনেক বেশি (নিজে টুল বেছে নিতে হয়) | মাঝারি | কম, তবে কাঠামো নির্দিষ্ট |
| বিল্ট-ইন ফিচার | কম (রাউটিং, স্টেট আলাদা লাইব্রেরি) | মাঝারি (অফিসিয়াল রাউটার ও স্টেট লাইব্রেরি আছে) | বেশি (রাউটিং, ফর্ম, HTTP ক্লায়েন্ট ইত্যাদি সহ) |
| ডেটা বাইন্ডিং | সাধারণত এক-মুখী (one-way) | এক-মুখী ও দ্বি-মুখী দুটোই সম্ভব | দ্বি-মুখী (two-way) সাপোর্ট আছে |
| মোবাইল অ্যাপ | React Native | সরাসরি অফিসিয়াল সমাধান নেই (তৃতীয় পক্ষের টুল আছে) | Ionic ইত্যাদির সঙ্গে ব্যবহার করা হয় |
| সার্ভার-সাইড রেন্ডারিং | Next.js | Nuxt | Angular Universal (বা এর আধুনিক সমতুল্য) |
| কোন ক্ষেত্রে ভালো | নমনীয়তা ও বড় ইকোসিস্টেম চাইলে | দ্রুত শুরু ও সহজ কাঠামো চাইলে | বড় এন্টারপ্রাইজ প্রজেক্টে নির্দিষ্ট কাঠামো চাইলে |

গুরুত্বপূর্ণ নোট: উপরের তুলনা সাধারণ ধারণা ও আমার জ্ঞানের ওপর ভিত্তি করে। "শেখার সহজতা"-র মতো বিষয় ব্যক্তিগত অভিজ্ঞতার ওপর নির্ভর করে। জনপ্রিয়তা বা ব্যবহারকারীর সংখ্যার মতো কোনো পরিসংখ্যান আমি এখানে ইচ্ছে করেই দিইনি, কারণ আমি সেগুলোর সঠিক ও হালনাগাদ সংখ্যা নিশ্চিত নই। সেগুলো জানতে Stack Overflow Developer Survey বা npm trends-এর মতো উৎসে নিজে দেখে নিন।

### আরও জানতে (অফিসিয়াল ডকুমেন্টেশন)

- React: react.dev (এটিই এখন React-এর অফিসিয়াল ডকস সাইট বলে আমি জানি)
- Vue: vuejs.org
- Angular: angular.dev (আগে angular.io ছিল, এখন কোনটি প্রধান তা যাচাই করে নিন)

React, Vue ও Angular তিনটিরই ভার্সন ও ফিচার দ্রুত বদলায়, তাই আমার দেওয়া তথ্য পুরনো হতে পারে।

</details><br>






## 👨‍💻 Author

**Bayjid Alom**

> Progress is built through consistency, one line of code at a time.



