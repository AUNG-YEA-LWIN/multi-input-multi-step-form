import React, { useState } from 'react';
import { Container, Stack, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MultiInput() {
  const [inputList, setInputList] = useState([{ firstName: '', lastName: '' }]);
  console.log(inputList);

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: '', lastName: '' }]);
  };

  // AungYea Lwin
  // KyawYea Lwin
  // MayOo Khin

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    console.log(list);
    list.splice(index,1);
    setInputList(list);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    console.log(list);
    setInputList(list);
  };

  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} className="p-3">
          <h5 className="mt-3 mb-4 fw-bold">
            Dynamically add/remove input fields with React JS
          </h5>
          {inputList.map((x, i) => {
            return (
              <Stack direction="horizontal" gap={3} key={i}>
                <div className="form-group col-md-4">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id={`fname${i}`}
                    value={x.firstName}
                    className="form-control"
                    placeholder="Enter First Name"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id={`lname${i}`}
                    value={x.lastName}
                    className="form-control"
                    placeholder="Enter Last Name"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div className="form-group col-md-4 mt-4">
                  {inputList.length !== 1 && (
                    <Button
                      type="reset"
                      className="btn btn-danger rounded"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </Button>
                  )}
                  {inputList.length-1 === i && (
                    <Button
                      className="btn btn-success rounded ms-1"
                      onClick={handleAddClick}
                    >
                      Add More
                    </Button>
                  )}
                </div>
              </Stack>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default MultiInput;
