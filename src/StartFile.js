import React, { Component } from "react";

import Counter from "./Counter";
import Total from "./Total";

// state data for 3 counters
const data = [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }];

class App extends Component {
  render() {
    return (
      <div>
        {data.map(counter => (
          <Counter key={counter.id} value={counter.value} />
        ))}
        <Total />
      </div>
    );
  }
}
export default App;
