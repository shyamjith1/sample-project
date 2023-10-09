import { useFormik } from "formik";
import "./App.css";
import axios from "axios";




function App() {
  const form = useFormik({
    initialValues: {
      id: "",
      number: "",
    },
  
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:3001', values).then(res => {
        alert('saved')
      })
    },
  });


  const { values, handleChange, handleSubmit } = form;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">id</label>
          <input
            name="reg_number"
            value={values.reg_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">number</label>
          <input name="dob" value={values.dob} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
git config --global user.email "shyamshyamjith821@gmail.com"
