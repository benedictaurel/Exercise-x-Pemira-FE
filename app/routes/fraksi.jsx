import Navbar from "../Navbar";
import calonPertama from "./images/calonPertama.png";
import calonKedua from "./images/calonKedua.png";
import calonKetiga from "./images/calonKetiga.png";
import leftButton from "./images/leftButton.svg";
import rightButton from "./images/rightButton.svg";

const CandidateCard = ({ number, foto, name, department }) => (
  <div className="flex flex-col grow max-md:mt-10">
    <div className="z-10 text-center justify-center items-center px-16 py-5 text-4xl font-bold tracking-normal leading-6 text-sky-900 whitespace-nowrap bg-yellow-400 rounded-[30px_30px_0px_0px] max-md:px-5">
      {number}
    </div>
    <img loading="lazy" src={foto} alt={`Candidate ${number}`} className="w-full aspect-[1.43]" />
    <div className="text-center flex flex-col px-16 pt-5 pb-8 text-2xl font-bold tracking-normal leading-6 bg-sky-900 rounded-[0px_0px_30px_30px] max-md:px-5">
      <div className="text-yellow-400">{name}</div>
      <div className="mt-2.5 text-white">{department}</div>
    </div>
  </div>
);

function CalonFraksi() {
  const candidates = [
    { number: "01", foto: calonPertama, name: "Nama Kandidat", department: "Teknik xx Tahun" },
    { number: "02", foto: calonKedua, name: "Nama Kandidat", department: "Teknik xx Tahun" },
    { number: "03", foto: calonKetiga, name: "Nama Kandidat", department: "Teknik xx Tahun" },
  ];

  return (
    <div className="flex flex-col items-center pb-20 bg-white">
        <Navbar />
        <section className="flex gap-5 justify-between px-5 mt-20 w-full text-5xl font-bold tracking-normal leading-6 whitespace-nowrap max-w-[1271px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <a href="/voting" className="back-next-button">
            <button className="flex gap-3 items-center pr-5 border-yellow-400 border-solid border-[3px] rounded-[999px] text-lg font-extrabold tracking-normal leading-6 text-sky-900 w-[145px] aspect-[2.7]">
              <img loading="lazy" src={leftButton} alt="" className="shrink-0 self-stretch my-auto aspect-square w-[53px]" />
              <span className="self-stretch my-auto">Back</span>
            </button>
          </a>
          <div className="flex gap-4 my-auto max-md:text-4xl max-md:gap-2 max-md:mx-auto">
            <h1 className="grow text-sky-900 max-md:text-4xl">Calon</h1>
            <h1 className="flex-auto text-yellow-400 max-md:text-4xl">FRAKSI</h1>
          </div>
          <a href="/ketuaIM" className="back-next-button">
            <button className="flex gap-4 items-center pl-9 bg-yellow-400 rounded-[999px] text-lg font-extrabold tracking-normal leading-6 text-sky-900">
              <span className="z-10 self-stretch my-auto">Next</span>
              <img loading="lazy" src={rightButton} alt="" className="shrink-0 self-stretch my-auto aspect-square w-[53px]" />
            </button>
          </a>
        </section>
        
        <section className="px-5 mt-14 w-full max-w-[1175px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {candidates.map((candidate, index) => (
                    <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <CandidateCard {...candidate} />
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
}

export default CalonFraksi;