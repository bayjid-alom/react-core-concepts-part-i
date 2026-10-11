import './App.css'

export default function Singers({ singer }) {
    // console.log(singer);   //{id: 1, name: 'Raj Barman', age: 35}

    return (
        <div style={{
            borderLeft: '4px solid yellowgreen',
            paddingLeft: '10px',
            borderRadius: '8px'
        }}>
            <h3>Name : {singer.name}</h3>
            <p>Age : {singer.age}</p>
        </div>
    )
}