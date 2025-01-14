import config from "utils/config";
import GithubIcon from "public/icones/social/github.svg";

const Login = () => (
  <div
    className="flex flex-row flex-wrap justify-center 
  m-0 mt-10 w-full sm:w-52 md:w-64"
  >
    <a
      className="btn-green flex flex-row flex-wrap 
        justify-center grow-0 py-0 m-0 ml-0.5 rounded-l-none"
      href="#"
    >
      <p className="text-sm m-0 mt-1 ml-1 py-1">ثبت نام</p>
    </a>
    <a
      className="btn-light flex flex-row flex-wrap 
        justify-center items-center grow py-0 m-0 mr-0.5 rounded-r-none"
      href={config.login}
    >
      <p className="text-sm m-0 mt-1 pl-2 py-1">ورود با</p>
      <p className="text-sm m-0 mt-1 ml-0.5 px-0 py-1">Github</p>
      <GithubIcon className="icon fill-slate-800 mb-0.5" />
    </a>
  </div>
);

export default Login;
