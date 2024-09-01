import cv from "../assets/Ashish_Kumar_Verma_Resume.pdf";
import pic from "../assets/pic.jpg";
import "../index.css";
function Banner() {
  const to_Mail = () => {
    // Define the Gmail URL with pre-filled fields
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=avi5200786@gmail.com&su=SUBJECT&body=BODY";

    // Open the Gmail URL in a new tab
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };
  const handleDownloadCV = () => {
    // Replace 'path_to_your_cv.pdf' with the actual path to your CV file
    const cvUrl = cv;

    // Create an anchor element
    const anchorElement = document.createElement("a");

    // Set the href attribute to the CV URL
    anchorElement.href = cvUrl;

    // Set the download attribute to specify the suggested filename
    anchorElement.download = "Ashish_kumar_Verma.pdf";

    // Append the anchor element to the document body
    document.body.appendChild(anchorElement);

    // Trigger a click event on the anchor element to start the download
    anchorElement.click();

    // Remove the anchor element from the document body
    document.body.removeChild(anchorElement);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row my-20 gap-10 sm:justify-center sm:items-center">
      <div className="lg:w-3/5 flex flex-col ml-10  justify-center gap-5 ">
        <div className="font-bold text-6xl leading-tight">
          <div className="hidden lg:block">
            Hi, <br />
            My name is <br />
            Ashish Verma. <br />I build things for web.
          </div>
          <div className="lg:hidden  text-center text-6xl sm:text-sm">
            Hi, My name is Ashish Verma. I build things for web.
          </div>
        </div>
        <div className="flex gap-10 lg:justify-start justify-center">
          <div className="">
           <button onClick={to_Mail} className="bg-black  text-white lg:px-16  lg:py-5 px-6 py-3 rounded 
            font-semibold text-lg hover:bg-white hover:text-black border-2 border-black
             hover:border-black transition-all ease-in-out duration-300" href="https://mail.google.com/mail/?view=cm&fs=1&to=avi5200786@gmail.com&su=SUBJECT&body=BODY" target="_blank">Contact Me</button>

          
          </div>
          <div className="">
            <button
              onClick={handleDownloadCV}
              className="bg-black  text-white lg:px-16  lg:py-5 px-6 py-3  rounded font-semibold text-lg hover:bg-white hover:text-black border-2 border-black hover:border-black transition-all ease-in-out duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-2/5 flex justify-center">
        <img
          className="image hover:scale-110 transition ease-in-out duration-300 h-full"
          src={pic}
        />
      </div>
    </div>
  );
}

export default Banner;
