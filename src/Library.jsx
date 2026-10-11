import Book from './Book.jsx'

export default function Library({ books }) {
    // console.log(books); // [{books}]

    return (
        <div style={{
            borderLeft: '4px solid aqua',
            paddingLeft: '10px',
            borderRadius: '8px',
        }}>
            <h3>My national central Library.</h3>
            <p>Address : Tejgaon, Dhaka-1207</p>
            <p>Book collection : {books.length}</p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    )
}