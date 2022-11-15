import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import FormInput from "../../components/FormInput/FormInput";
import "./complainForm.css";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../../components/topbar/TopBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addRequestFailure,
  addRequestStart,
  addRequestSuccess,
} from "../../redux/requestRedux";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../common/firebase";
import { publicRequest } from "../../requestMethods";
import emailjs from "@emailjs/browser";

const ComplainForm = () => {
  const dispatch = useDispatch();
  const isFetchingReq = useSelector((state) => state.request.isFetchingReq);
  const [values, setValues] = useState({
    name: "",
    date: "",
    jobId: "",
    employeeId: "",
  });
  const [complaintfile, setComplaintFile] = useState("");
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "required!",
      label: "Full Name",
      //pattern: "^[A-Za-z]{8,16}$",
      required: true,
    },
    {
      id: 2,
      name: "date",
      type: "date",
      placeholder: "service date",
      errorMessage: "required!",
      label: "Service Date",
      required: true,
    },
    {
      id: 3,
      name: "jobId",
      type: "text",
      placeholder: "Job Number",
      errorMessage: "required!",
      label: "Job Number",
      //pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "employeeId",
      type: "text",
      placeholder: "Laborer Number",
      errorMessage: "required!",
      label: "Laborer Number",
      //pattern: `^[0-9]{10}$`,
      required: true,
    },
  ];

  //this is for notify messages
  function notify(msg) {
    toast(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const sendEmail = (newrequest) => {
   

    emailjs
      .send(
        "service_tsuwa8c",
        "template_4pzjxe4",
        newrequest,
        "0BGsoBC7vVFTsSPOt"
      )
      .then(
        (result) => {
          console.log("d");
        },
        (error) => {
          console.log("s");
        }
      );
  };

  //This function uploads the reciet fire store
  //make new request
  const addRequest = async (request, distpatch) => {
    try {
      const res = await publicRequest.post(`/complaint/`, request);
      distpatch(addRequestSuccess(res.data));
      notify("successfully added complaint!");
      setTimeout(function () {
        window.location.reload();
      }, 4000);
    } catch (err) {
      console.log(err);
      //distpatch(addRequestFailure(err));
      notify("something went wrong!");
    }
  };

  async function addRequestTodatabase() {
    // console.log(recietfile);

    const imgRef = ref(storage, `complaint-${complaintfile.lastModifiedDate}`);
    uploadBytes(imgRef, complaintfile)
      .then(() => {
        getDownloadURL(imgRef)
          .then((url) => {
            console.log(`uploded img successfully ${url}`);
            const newComplaint = {
              ...values,
              photo: url,
            };
            //console.log(newComplaint);
            sendEmail(newComplaint);
            addRequest(newComplaint, dispatch);
          })
          .catch((err) => {
            //console.log(err);
            notify("something went wrong!");
          });
      })
      .catch((err) => {
        //console.log(err.message);
        notify("something went wrong!");
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addRequestStart());
    addRequestTodatabase();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <TopBar />
      <ToastContainer />
      <div className="form-dev">
        <form onSubmit={handleSubmit}>
          <h1>Find Your Worker!!!</h1>
          <div className="form-data">
            <div className="form-input">
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>
            <div className="form-file">
          

              <div className="file-input-text">
                <label>Your Complaint</label>
                <textarea
                  name="description"
                  className="dif-input"
                  onChange={onChange}
                  required
                ></textarea>
              </div>
              <div className="file-input-reciept">
                <label>Upload the photo</label>
                <input
                  name="photo"
                  type="file"
                  onChange={(e) => {
                    setComplaintFile(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <button type="submit">
            {isFetchingReq ? "Please Wait!!!" : "Submit Your Complaint!!"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ComplainForm;
