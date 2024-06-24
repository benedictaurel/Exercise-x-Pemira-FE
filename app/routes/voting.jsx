import Navbar from "../Navbar";
import logoOffline from "./images/offline.png";
import logoOnline from "./images/online.png";

function VotingMethodOffline() {
  return (
    <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="vote-now-button grow px-7 py-0.5 w-full bg-yellow-400 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <button className="w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[38%] items-center justify-center max-md:ml-0 max-md:w-full">
              <h2 className="z-10 my-auto text-5xl font-bold tracking-normal text-center text-white leading-[70.2px] max-md:mt-10 max-md:text-4xl">
                OFFLINE
              </h2>
            </div>
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full max-md:mt-4">
              <img
                loading="lazy"
                src={logoOffline}
                className="grow mt-0 w-full aspect-[1.12] max-md:-mt-1"
                alt="Offline voting"
              />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

function VotingMethodOnline() {
  return (
    <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="vote-now-button grow px-7 py-0.5 w-full bg-yellow-400 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <button className="w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full max-md:mt-0">
              <img
                loading="lazy"
                src={logoOnline}
                className="grow mt-0 w-full aspect-[1.12] max-md:-mt-1"
                alt="Online voting"
              />
            </div>
            <div className="flex flex-col w-[38%] items-center justify-center max-md:w-full">
              <h2 className="z-10 my-auto text-5xl font-bold tracking-normal text-center text-white leading-[70.2px] max-md:mt-4 max-md:text-4xl max-md:mb-10">
                ONLINE
              </h2>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

function Voting() {
  return (
    <div className="flex flex-col items-center pb-20 bg-white">
      <Navbar />
      <div className="mt-20 text-5xl font-bold tracking-normal text-center text-sky-900 leading-[72.9px] max-md:mt-10 max-md:text-4xl">
        Choose your
      </div>
      <div className="mt-2.5 text-5xl font-bold tracking-normal text-center text-yellow-400 leading-[72.9px] max-md:text-4xl">
        Voting Method
      </div>
      <div className="mt-20 w-full max-w-[1298px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <VotingMethodOffline />
          <VotingMethodOnline />
        </div>
      </div>
    </div>
  );
}

export default Voting;
