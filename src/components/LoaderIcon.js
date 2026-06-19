import Loader from "../assets/spinner.gif";

function LoaderIcon() {
  return (
    <div className="spinner">
      <img src={Loader} alt="loading.." />
    </div>
  );
}

export default LoaderIcon;
