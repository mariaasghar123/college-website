import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d340d19-6a42-4fa2-984f-cf1bb876b114");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
   <div className="contact">
    <div className="contact-col">
      <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
      <p>Feel free to contact us for more details </p>
      <ul>
        <li><img src={mail_icon} alt="" /> mariaasghar74@gmail.com </li>
        <li> <img src={phone_icon} alt="" />+9236 890 798 </li>
        <li> <img src={location_icon} alt="" />sadiqabad, District Rahim yar khan </li>
      </ul>
    </div>
    <div className="contact-col">
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" placeholder='enter your name' required/>
        <label> phone no</label>
        <input type="tel" placeholder='type your number' required/>
        <label>write message</label>
        <textarea name="message" rows="6" placeholder='write your message'></textarea>
        <button className='btn dark-btn'
        >Submit <img src={white_arrow}/> </button>
      </form>
      <span>{result}</span>
    </div>
   </div>
  )
}

export default Contact