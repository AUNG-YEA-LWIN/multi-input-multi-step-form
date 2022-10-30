import React, { useState } from 'react';
import './DynamicInput.css';

const DynamicallyInput = () => {
  const [serviceList, setServiceList] = useState([
    { service: '' }
  ]);
  // console.log(serviceList);

  const handleServiceAdd = () => {
    setServiceList([...serviceList, {service: ''}]);
  }

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index,1);
    setServiceList(list);
  }

  const handleServiceChange = (e,index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  }

  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service">Service(s)</label>
        {serviceList.map((singleService, index) => (
          <div className="services" key={index}>
            <div className="first-division">
              <input type="text" name="service" id="service" value={singleService.service} onChange={(e) => handleServiceChange(e,index)} required />
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button type="button" className="add-btn" onClick={handleServiceAdd}>
                  <span>Add a Service</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length > 1 && (
                <button type="button" className="remove-btn" onClick={() => handleServiceRemove(index)}>
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {
          serviceList.map((singleService,index) => (
            <ul key={index}>
              {
                singleService.service && <li>{singleService.service}</li>
              }
            </ul>
          ))
        }
      </div>
    </form>
  );
};

export default DynamicallyInput;
