import "./styling.css";

function Banner () {
    return (
        <div className="banner">
            <h1>Orbit Report</h1>
            <p>
            Click on the buttons to see the satellites in that orbit type
            </p>
        </div>
    );
}

export default Banner;


// export default class Banner extends Component {
//     render() {
//         return (
//             <div className="banner">
//                 <h1>Orbit Report</h1>
//                 <p>
//                 Click on the buttons to see the satellites in that orbit type
//                 </p>
//             </div>
//         )
//     }
// }

