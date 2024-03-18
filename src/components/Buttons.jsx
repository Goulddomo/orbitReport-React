import satData from "./satData";




const Buttons = ({ filterByType, setSat, displaySats }) => {
// filterByType = props.filterByType;
// setSat = props.setSat;
// displaySats = props.displaySats;
return (
  <div>
{displaySats.map((sat, id) => {
  return (
    <button onClick={() => {filterByType(sat)}} key={id}>
      {sat} Orbit
    </button>
  );

})}
    <button onClick={() => setSat(setData)}>All Orbits
    </button>
    </div>
  );
};

export default Buttons;