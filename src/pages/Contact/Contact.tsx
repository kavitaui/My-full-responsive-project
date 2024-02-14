import { memo, useEffect, useState } from 'react';

import FooterDesign2 from 'components/Footer/FooterDesign2';
import IconDisplay from 'components/HomeContent/IconDisplay';
import { JSONContent } from 'components/HomeContent/JSONContent';
import Navbar from 'components/Navbar/Navbar';
import { useConfig } from 'config/config';
import useTitle from 'hooks/useTitle';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Contact.css";

const Contact: React.FC = () => {
  const { app } = useConfig()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    phoneno: "",
    subject: "",
    message: ""
  });


  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('')
  const validateValues = (inputValues: unknown) => {

    let errors = {};
    if (inputValues?.name?.length <= 3) {
      errors.name = "Name is too short";
    }
    if (inputValues?.email.length < 1) {
      errors.email = "Email is too short"
    }
    if (inputValues?.phoneno.length < 3) {
      errors.phoneno = "Phoneno is not less then 10 digit"
    }
    if (inputValues?.subject.length < 3) {
      errors.subject = "subject is not less then 5 digit"
    }
    if (inputValues?.message.length < 10) {
      errors.message = "message is not less then 10 digit"
    }

    return errors;
  }
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value })
    let err = validateValues(inputFields)
    setErrors(err);


  }
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    debugger;
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true)


  }
  const finishSubmit = () => {
    console.log(inputFields)

  }
  useEffect(() => {
    debugger;
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
      setInputFields({
        name: "",
        email: "",
        phoneno: "",
        subject: "",
        message: ""
      })
      setMessage('Form Submitted Sucessfully');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      setSubmitting(false);
    }
    if (Object.keys(errors).length > 0 && submitting) {
      finishSubmit();
      setInputFields({
        name: "",
        email: "",
        phoneno: "",
        subject: "",
        message: ""
      })
      setMessage('Did you fill in the form properly?');
    }
    else {
      setSubmitting(false);
    }



  }, [errors])





  return (
    <> <div className='page-title-area'>
        <div className='container'>

          <Navbar color="red" />
         <div className='page-title-content'>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>
     
      <div className='divider'>

      </div>
      <div className='lines'>
        <div className='line'></div>
      </div>
     

     </div>
      <div className='contact-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Get in Touch</h2>
            <p>The IT industry offers a sea of options, from platforms, programming languages methodologies, technologies, tools, and more.</p>
          </div>

        </div>


      </div>
      <div className='contact-form'>
        <form onSubmit={handleSubmit}>
          <div className='container'>

            <div className='col-12'>
              <div className='row form-content'>

                <div className='col-lg-6 col-md-6 col-sm-6 form-group'>


                  <input type="text" name="name" className="form-control img-fluid " id="validationServer03" placeholder="Eg: Sarah Tylor" value={inputFields.name} onChange={handleChange} />
                  {errors.name ? (<p className='error'>Please enter your name</p>
                  ) : null} </div>
                <div className='col-lg-6 col-md-6 col-sm-6 form-group'>


                  <input type="text" name="email" className="form-control img-fluid " id="validationServer03" placeholder="hello@sarah.com" value={inputFields.email} onChange={handleChange} />
                  {errors.email ? (<p className='error'>Please enter your Email</p>
                  ) : null}
                </div>



                <div className='col-lg-6 col-md-6 col-sm-6 form-group'>


                  <input type="text" name="phoneno" className="form-control img-fluid " id="validationServer03" placeholder="Enter your phone number" value={inputFields.phoneno} onChange={handleChange} />
                  {errors.phoneno ? (<p className='error'>Please enter your Phoneno</p>
                  ) : null}
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 form-group'>


                  <input type="text" name="subject" className="form-control img-fluid " id="validationServer03" placeholder="Enter your subject" value={inputFields.subject} onChange={handleChange} />
                  {errors.subject ? (<p className='error'>Please enter your subject</p>
                  ) : null}
                </div>



              </div>
              <div className='container'>
                <div className='col-12'>
                  <div className="form-group">

                    <textarea className="form-control1 img-fluid" id="exampleFormControlTextarea1" name="message" placeholder="Enter message" rows="10" onChange={handleChange} value={inputFields.message}></textarea>

                    {errors.message ? (<p className='error'>Please enter your Message</p>
                    ) : null} </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary trail-button" data-toggle="button" aria-pressed="false"   > SendMesssage</button>
            {message && (
              <div className='pop-up'>
                <p>{message}</p>
              </div>
            )

            }
          </div>

        </form>

      </div>
      <div className='iframe-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19100.35874221626!2d-6.160681858655919!3d53.24393495578233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670808acb8271f%3A0xc47abf9692a560d!2sCherrywood%2C%20Dublin%2C%20D18%20T8Y6!5e0!3m2!1sen!2sie!4v1707831129930!5m2!1sen!2sie" width="100%" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='contact-info-area ptb-100'>
        <div className='container'>
          <div className='contact-info-inner'>
            <h2>Have any question in mind please call or mail us</h2>
            <div className='container'>
              <div className='row justify-content-center'>
                <IconDisplay data={JSONContent.myContact} design="my-design3" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <FooterDesign2 />

    </>
  )
}

export default memo(Contact)
