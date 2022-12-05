const About = (props) =>{
    return (
      <>
        <div>
          <h1>Name = {props.name}</h1>
          <h2>Email = {props.email}</h2>
          <h3>Age = {props.age}</h3>
        </div>
      </>
    );
}

export default About;