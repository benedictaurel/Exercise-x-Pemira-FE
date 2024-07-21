import logoUI from './images/logoUI.png';
import "/app/styles/styles.css";

function InputField({ placeholder, type, className }) {
    return (
        <div className={`justify-center items-start px-3 py-3.5 mt-2 text-base leading-5 text-black whitespace-nowrap rounded border border-solid ${className} max-md:pr-5`}>
            <label className="sr-only" htmlFor={`input-${placeholder.toLowerCase()}`}>
                {placeholder}
            </label>
            <input
                type={type}
                id={`input-${placeholder.toLowerCase()}`}
                placeholder={placeholder}
                className="w-full bg-transparent outline-none"
            />
        </div>
    );
}

function SingleSignOn() {
    return (
        <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
            <section className="flex flex-col items-center px-16 pt-10 pb-16 mt-24 max-w-full bg-white rounded-3xl shadow-md w-[528px] max-md:px-5 max-md:my-auto">
                <div className="flex flex-col max-w-full w-[302px]">
                    <div className="flex gap-5 justify-between items-start px-px">
                        <div className="flex flex-col mt-4">
                            <h1 className="text-5xl font-bold text-yellow-300">SSO</h1>
                            <p className="mt-0 text-base font-semibold text-black">
                                Single Sign On
                            </p>
                        </div>
                        <img
                            loading="lazy"
                            src={logoUI}
                            alt="Logo UI"
                            className="shrink-0 mt-5 aspect-square w-[63px]"
                        />
                    </div>
                    <form>
                    <InputField
                        placeholder="Username"
                        type="text"
                        className="bg-white border-yellow-400"
                    />
                    <InputField
                        placeholder="Password"
                        type="password"
                        className="bg-gray-200 border-gray-300"
                    />
                    </form>
                    <div className="flex gap-3.5 mt-3 text-xs leading-5 text-sky-900 font-[350]">
                        {/* <a href="#guest"> */}
                            Guest Account
                        {/* </a> */}
                        <span className="box-border relative shrink-0 mr-0 ml-0 h-auto leading-5 text-sky-950">
                            |
                        </span>
                        {/* <a href="#help" className="flex-auto"> */}
                            Help
                        {/* </a> */}
                    </div>
                    <button className="vote-now-button justify-center items-center px-16 py-3.5 mt-11 text-sm font-bold leading-5 text-white bg-yellow-300 rounded-[999px] w-full max-md:px-5 max-md:mt-10">
                        Sign In
                    </button>
                </div>
            </section>
        </div>
    );
}
  
export default SingleSignOn;