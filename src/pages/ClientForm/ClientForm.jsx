import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import FormInput from "../../components/FormInput/FormInput";
import "./clientform.css";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../../components/topbar/TopBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addRequestFailure,
  addRequestStart,
  addRequestSuccess,
} from "../../redux/requestRedux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../common/firebase";
import { publicRequest } from "../../requestMethods";
import emailjs from "@emailjs/browser";

const ClientForm = () => {
  const dispatch = useDispatch();
  const citiesdata = useSelector((state) => state.data.cities);
  const reqErr = useSelector((state) => state.request.requestErr);
  const requests = useSelector((state) => state.request.requests);
  const isFetchingReq = useSelector((state) => state.request.isFetchingReq);

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    address: "",
    telNumber: "",
    nicNumber: "",
    description: "",
    recieptfile: "dssdf",
    servicedate: "",
  });
  const [selectType, setType] = useState("");
  const [selecterr, seterr] = useState("");

  const [recietfile, setRecietfile] = useState("");

  const form = useRef();

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "full name should be 8-16 characters and shouldn't include any special character!",
      label: "Full Name",
      //pattern: "^[A-Za-z]{8,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage:
        "Addres should be 3-16 characters and shouldn't include any special character!",
      label: "Address",
      //pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "telNumber",
      type: "text",
      placeholder: "Contact Number",
      errorMessage: "Contact Number should be 10 characters !",
      label: "Contact Number",
      //pattern: `^[0-9]{10}$`,
      required: true,
    },
    {
      id: 5,

      name: "nicNumber",
      type: "text",
      placeholder: "NIC Number",
      errorMessage: "NIC Number should be 10 characters!",
      label: "NIC Number",
      //pattern: `^([0-9]{9}[x|X|v|V]|[0-9]{12})$`,
      required: true,
    },
  ];

  //this is for notify messages
  function notify(msg) {
    toast(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  // useEffect(() => {
  //   if(requests){
  //   }
  //   if(reqErr){
  //     notify("something went wrong!");
  //   }
  // }, [isFetchingReq]);

  const sendEmail = (newrequest) => {
    emailjs
      .send(
        "service_tsuwa8c",
        "template_v796gkh",
        newrequest,
        "0BGsoBC7vVFTsSPOt"
      )
      .then(
        (result) => {
          //console.log("d");
        },
        (error) => {
          //console.log("s");
        }
      );
  };
  //This function uploads the reciet fire store
  //make new request
  const addRequest = async (request, distpatch) => {
    try {
      const res = await publicRequest.post(`/request/`, request);
      const tempId = res.data.requestId
      res.data.requestId=`${tempId}`
      //console.log(res.data)

      sendEmail(res.data);
      distpatch(addRequestSuccess(res.data));
      notify("successfully added request!");
      setTimeout(function () {
        window.location.reload();
      }, 4000);
    } catch (err) {
      //console.log(err);
      distpatch(addRequestFailure(err));
      notify("something went wrong!");
    }
  };

  async function addRequestTodatabase() {
    // console.log(recietfile);
    const imgRef = ref(storage, `recietfile-${recietfile.lastModifiedDate}`);
    uploadBytes(imgRef, recietfile)
      .then(() => {
        getDownloadURL(imgRef)
          .then((url) => {
            // console.log(`uploded img successfully ${url}`);
            const newReq = {
              ...values,
              serviceType: selectType,
              recieptfile: url,
            };
            //console.log(newReq);
            //sendEmail(newReq);
            addRequest(newReq, dispatch);
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
    if (selectType) {
      dispatch(addRequestStart());
      addRequestTodatabase();
    } else {
      seterr("required job type!");
    }
  };

  //this is for get input values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSelectType = (e) => {
    setType(e.value);
    seterr("");
  };
  // const onSelectCity = (e) => {
  //   setCity(e.value);
  // };

  //services types list
  const options = [
    { value: "Plumbers", label: "Plumbers" },
    { value: "Electricians", label: "Electricians" },
    { value: "Painters", label: "Painters" },
    { value: "Masons", label: "Masons" },
    { value: "Tillers", label: "Tillers" },
    { value: "Carpenters", label: "Carpenters" },
    { value: "Lawn maintenance ", label: "Lawn maintenance " },
    { value: "Gardeing", label: "Gardeing" },
    { value: "Dog cleaners ", label: "Dog cleaners " },
    { value: "Sofa cleaners", label: "Sofa cleaners" },
    { value: "Other cleaning services ", label: "Other cleaning services " },
    { value: "Well cleaners and diggers", label: "Well cleaners and diggers" },
    { value: "Coconut pluckers", label: "Coconut pluckers" },
    { value: "Chair weaver", label: "Chair weaver" },
  ];

  //select options
  // const cities = citiesdata.map((city) => ({
  //   value: city._id,
  //   label: city.name_en,
  // }));

  return (
    <>
      <TopBar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}

      <div className="form-dev">
        <form onSubmit={handleSubmit} ref={form}>
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
         
              <div className="file-input-select">
                <label>Job types</label>
                <Select
                  name="serviceType"
                  className="dif-input"
                  options={options}
                  onChange={onSelectType}
                />
                <h5>{selecterr}</h5>
              </div>
              <div className="file-input-select">
                <label>Service Date</label>
                <input
                  name="servicedate"
                  type="date"
                  onChange={onChange}
                  required
                />
              </div>
              {/* <div className="file-input-select">
              <label>Service Required</label>
              <Select
                name="serviceType"
                className="dif-input"
                options={cities}
                onChange={onSelectCity}
                required
              />
            </div> */}
              <div className="file-input-text">
                <label>Tell us a little bit about your job</label>
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
                  name="recieptfile"
                  type="file"
                  onChange={(e) => {
                    setRecietfile(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <button type="submit">
            {isFetchingReq ? "Please Wait!!!" : "Book Now!"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ClientForm;
