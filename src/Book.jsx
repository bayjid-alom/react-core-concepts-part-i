import Library from "./Library";

export default function Book({ book }) {
    console.log(book); // received an object from Library.jsx

    return <li>Name : {book.name}  ~  Price : {book.price}</li>
}