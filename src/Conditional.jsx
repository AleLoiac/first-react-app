function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        // same as return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

export default function Animals() {
  const animals = ["Lion", "Zebra", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

function LoadList(props) {
  if (!props.cars) {
    return <div>Loading...</div>;
  }

  if (props.cars.length === 0) {
    return <div>There are no cars in the list!</div>;
  }

  return (
    <ul>
      {props.cars.map((car) => {
        return <li key={car}>{car}</li>;
      })}
    </ul>
  );
}

export function Cars() {
  const cars = [];

  return (
    <div>
      <h1>Cars: </h1>
      <LoadList cars={cars} />
    </div>
  );
}
