// import logo from './logo.svg';
import './App.css';

function App(props) {
 const {employee}=props;
    
return(
  <div className="container">

  <div className="sub-container">

    <div className="image">
      <img src={employee.profileImg} alt="" className="profile-pic" />
      </div>

    <div className="main_name">
      <p className="name">{employee.name}</p>
    </div>

    <div className="address">
      <p>Location</p>
      <h3>{employee.location}</h3>
    </div>

    <div className="blood">
      <p>Blood group</p>
      <h3>{employee.bloodGroup}</h3>
    </div>

    <div className="age">
      <p>Age</p>
      <h3>{employee.age}</h3>
    </div>

  </div>
  
</div>
)
}




export default App;


