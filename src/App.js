import React from 'react'
import ComponentDetails from './ComponentDetails';
import faker from 'faker';

function App() {
  return (
    <div  className="ui container comments">
      <ComponentDetails image={faker.image.image()} author="Ahmad" date="Today at 10:00 PM" text="Nice blog post!" />
      <ComponentDetails image={faker.image.image()} author="Ahmad" date="Today at 10:00 PM" text="Nice blog post!" />
      <ComponentDetails image={faker.image.image()} author="Ahmad" date="Today at 10:00 PM" text="Nice blog post!" />
      
       
    </div>
  );
}

export default App;
