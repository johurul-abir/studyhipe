import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { regStudent } from "../../features/auth/authApiSlice";

const RegModal = ({ reg_modal, set_reg_modal }) => {
  const dispatch = useDispatch();

  //get input value state
  const { input, handleInputChange } = useForm({
    name: "",
    auth: "",
    password: "",
  });

  //create register
  const handleRegisterSbumit = () => {
    dispatch(regStudent(input));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Modal show={reg_modal} onHide={() => set_reg_modal(false)}>
              <ModalHeader>
                <h3>Register New Student</h3>
                <CloseButton onClick={() => set_reg_modal(false)} />
              </ModalHeader>
              <ModalBody>
                <div className="item my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={handleInputChange}
                    value={input.name}
                  />
                </div>

                <div className="item my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone or email"
                    name="auth"
                    onChange={handleInputChange}
                    value={input.auth}
                  />
                </div>

                <div className="item my-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                    value={input.password}
                  />
                </div>
                <div className="item my-3 text-center">
                  <button
                    className="btn btn-success"
                    onClick={handleRegisterSbumit}
                  >
                    Submit Now
                  </button>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegModal;
