import { Card, CardBody } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleNotice = () => {
  const { id } = useParams();
  //const dispatch = useDispatch();
  const { notice } = useSelector((state) => state.notice);
  const singleNotice = notice.find((data) => data._id == id);

  return (
    <>
      <div className="single-notice">
        <div className="bg-primary p-3 mb-1">
          <h1 className="text-light text-center">Notice</h1>
        </div>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-12">
              <Card>
                <CardBody>
                  <h3>{singleNotice?.title}</h3>
                </CardBody>
                <p>
                  <strong>Notice Date:</strong>
                </p>
                <img src={singleNotice?.photo} alt="" />
                <p className="pt-3">{singleNotice?.text}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNotice;
