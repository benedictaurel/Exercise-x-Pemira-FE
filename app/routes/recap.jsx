import Navbar from "../Navbar";
import leftButton from "./images/leftButton.svg";
import profilePicture from "./images/profile.svg";
import lineProfile from "./images/lineProfile.svg";

const CandidateCard = ({ title, number, name, department, tagline }) => (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <h2 className="flex-auto mx-auto mb-10 text-3xl font-bold tracking-normal leading-6 text-yellow-400 max-sm:mt-10 max-sm:-mb-5 max-sm:text-3xl max-sm:font-bold max-sm:tracking-normal max-sm:leading-6 max-sm:text-yellow-400">
            {title}
        </h2>
        <div className="flex flex-col grow items-start px-12 py-11 w-full text-lg font-bold tracking-normal leading-6 text-white bg-sky-900 rounded-[40px] max-md:px-5 max-md:mt-10">
            <img loading="lazy" src={profilePicture} alt="Profile" className="self-center max-w-full aspect-square w-[133px]" />
            <img loading="lazy" src={lineProfile} alt="" className="self-stretch mt-8 w-full border-white border-solid aspect-[100] border-[3px] stroke-[3px] stroke-white" />
            <p className="mt-9 ml-6 max-md:ml-2.5">No. Urut {number}</p>
            <p className="mt-5 ml-6 max-md:ml-2.5">{name}</p>
            <p className="mt-5 ml-6 max-md:ml-2.5">{department}</p>
            <p className="mt-5 ml-6 max-md:ml-2.5"># {tagline}</p>
        </div>
    </div>
);

function SubmitVotes() {
    const candidates = [
        { title: "Calon Fraksi", number: "1", name: "Nama", department: "Teknik xx Tahun", tagline: "Tagline" },
        { title: "Calon Ketua IM", number: "2", name: "Nama", department: "Teknik xx Tahun", tagline: "Tagline" },
        { title: "Calon Ketua BEM", number: "3", name: "Nama", department: "Teknik xx Tahun", tagline: "Tagline" }
    ];

    return (
        <div className="flex flex-col items-center pb-20 bg-white">
            <Navbar />
            <div className="flex flex-col self-center mt-20 w-full max-w-[1223px] max-md:mt-10 max-md:max-w-full">
                <section className="flex gap-5 justify-between items-start max-w-full text-5xl font-bold tracking-normal leading-6 whitespace-nowrap w-[822px] max-md:flex-wrap max-md:text-4xl">
                    <a href="/ketuaBEM" className="back-next-button">
                        <button className="flex gap-3 items-center pr-5 border-yellow-400 border-solid border-[3px] rounded-[999px] text-lg font-extrabold tracking-normal leading-6 text-sky-900 w-[145px] aspect-[2.7]">
                            <img loading="lazy" src={leftButton} alt="" className="shrink-0 self-stretch my-auto aspect-square w-[53px]" />
                            <span className="self-stretch my-auto">Back</span>
                        </button>
                    </a>
                    <div className="items-center flex gap-5 px-5 mt-2 max-md:text-4xl max-md:justify-center max-md:gap-3 max-md:mx-auto">
                        <span className="grow my-auto text-sky-900 max-md:text-4xl max-md:text-center">SUBMIT</span>
                        <span className="justify-center px-4 py-5 text-white bg-yellow-400 max-md:text-4xl max-md:px-2 max-md:py-3 max-md:text-center">VOTE</span>
                    </div>
                </section>
                <section className="self-center mt-10 w-full max-w-[1175px] max-md:mt-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 self-center px-5 max-w-full text-3xl font-bold tracking-normal leading-6 text-yellow-400 w-[1276px] max-md:flex-wrap" />
                                <div className="mt-7 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        {candidates.map((candidate, index) => (
                                            <CandidateCard key={index} {...candidate} />
                                        ))}
                                    </div>
                                </div>
                                <button className="submit-button justify-center self-center px-9 py-4 mt-24 -mr-px text-lg font-extrabold tracking-normal leading-6 text-center text-sky-900 whitespace-nowrap bg-yellow-400 rounded-[999px] max-md:px-5 max-md:mt-10 max-md:mr-2.5">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SubmitVotes;
