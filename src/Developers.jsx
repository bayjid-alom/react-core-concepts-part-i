export default function Developers({ developer }) {
    // console.log(developer);

    return (
        <div style={{
            borderLeft: '4px solid aqua',
            paddingLeft: '10px',
            borderRadius: '8px'
        }}>
            <h3>Name : {developer}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus!</p>
        </div>
    )
}