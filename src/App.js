import React from "react";

import Person from "./Person";
import "./styles.css";

class App extends React.Component {
  state = {
    Person: [
      { id: 2233, name: "Ajay", age: 21 },
      { id: 2245, name: "Harshada", age: 20 },
      { id: 2256, name: "Disha", age: 22 },
      { id: 2265, name: "Kunal", age: 21 },
      { id: 2276, name: "Iyer", age: 24 }
    ],
    changePerson: true
  };

  handleClick = val => {
    this.setState({
      Person: [
        { name: val, age: 40 },
        { name: "Harshada", age: 30 },
        { name: "Disha", age: 32 },
        { name: "Kunal", age: 31 },
        { name: "Iyer", age: 64 }
      ]
    });
  };

  HandleNameChange = (event, personId) => {
    const personIndex = this.state.Person.findIndex(p => {
      return p.id === personId;
    });

    const per = { ...this.state.Person[personIndex] };
    per.name = event.target.value;

    const persons = { ...this.state.Person };

    persons[personIndex] = per;

    this.setState({ Person: persons });
  };

  handleToggle = () => {
    console.log(this.state.changePerson);
    const value = this.state.changePerson;
    this.setState({ changePerson: !value });
    console.log(this.state.changePerson);
  };

  deleteHandler = index => {
    // const persons = this.state.Person.slice();//slice makes a copy of the original array
    const persons = [...this.state.Person]; //does same as above code
    persons.splice(index, 1);
    this.setState({ Person: persons });

    //console
    const pers = persons.map(per => per.name);
    console.log(pers);
  };

  render() {
    return (
      <div>
        <button className="bt" onClick={() => this.handleToggle()}>
          Toggle
        </button>
        {this.state.changePerson ? (
          <div>
            {this.state.Person.map((event, index) => {
              return (
                <Person
                  delete={() => this.deleteHandler(index)}
                  name={event.name}
                  age={event.age}
                  key={event.id}
                  change={event => {
                    this.HandleNameChange(event, event.id);
                  }}
                />
              );
            })}
            <center>
              <button className="bt" onClick={() => this.handleClick("Tiwari")}>
                Click
              </button>
            </center>
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;
