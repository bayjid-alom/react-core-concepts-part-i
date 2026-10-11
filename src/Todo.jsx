// conditional rendering : 01
// export default function Todo({ task, isDone }) {
//     return (
//         <li>Task : {task}</li>
//     )
// }



// conditional rendering : 02
// export default function Todo({ task, isDone, time = 0 }) {
//     if (isDone == true) {
//         return <li>Done : {task} - Duration : {time}m</li>
//     }

//     return <li>To be done : {task} - Duration : {time}m</li>
// }






// Condtional Rendering : 03 Ternaary
// Condition ? true : false

// export function Todo({ task, isDone, time = 0 }) {
//     return isDone
//         ? <li>Done : {task} Duration : {time}m</li>
//         : <li>Pending : {task}</li>
// }




// conditional rendering : 4 && Operator
// export function Todo({ task, isDone, time = 0 }) {
//     return isDone && <li>Done : {task} ~ Duration - {time}m</li>
// }



// conditional rendering :  5 || Operator
// export function Todo({ task, isDone, time = 0 }) {
//     return isDone || <li>Pending : {task} ~ Duration - {time}m</li>
// }




// conditional rendering : 06 Use variable
export default function Todo({ task, isDone, time = 0 }) {
    const displayTime = time ? time : 5;
    let listItem;

    if (isDone == true) {
        listItem = <p>Done : {task} ~ Duration : {displayTime}m</p>
    } else {
        listItem = <p>To be done : {task} - Duration : {displayTime}m</p>
    }

    return listItem;
}


