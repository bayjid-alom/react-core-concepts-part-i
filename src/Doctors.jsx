export default function Doctors({ doctor }) {
    // console.log(doctor);
    // {id: 2, name: 'Dr. Karim', age: 45, specialization: 'Neurology'}

    return (
        <section style={{
            borderLeft: '4px solid yellowgreen',
            paddingLeft: '10px',
            borderRadius: '8px',
            marginBottom: '10px',
        }}>
            <p>Doctor ID: {doctor.id}</p>
            <p>Doctor Name: {doctor.name}</p>
            <p>Age: {doctor.age}</p>
            <p>Specialization: {doctor.specialization}</p>
        </section>
    )
}