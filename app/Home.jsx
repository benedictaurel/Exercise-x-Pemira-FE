import Navbar from "./Navbar";
import logoOffline from "./routes/images/offline.png";
import logoOnline from "./routes/images/online.png";

const CandidateCard = ({ title }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex grow gap-5 items-end px-20 pt-20 pb-9 w-full text-base font-semibold tracking-normal leading-6 text-white bg-sky-900 rounded-3xl max-md:px-5 max-md:mt-6">
      <div className="mt-36 max-md:mt-10">{title}</div>
      <div className="shrink-0 mt-36 w-5 aspect-[1.43] max-md:mt-10">&#8594;</div>
    </div>
  </div>
);

const VotingOption = ({ title, imageSrc }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full items-center">
    <div className="flex flex-col grow px-16 pt-10 pb-4 text-4xl font-bold tracking-normal leading-6 text-sky-900 rounded-3xl border border-solid border-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h3 className="text-center">{title}</h3>
      <img loading="lazy" src={imageSrc} alt={`${title}`} className="self-center mt-4 max-w-full aspect-[1.14] w-[289px]" />
    </div>
  </div>
);

const FAQContainer = ({ children }) => (
  <div className="flex items-center justify-between px-6 py-4 mt-8 bg-yellow-400 rounded-full">
    <span className="text-lg font-semibold text-black pl-4">{children}</span>
    <span className="text-black">&#9660;</span>
  </div>
);

function MyComponent() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Navbar />
      {/* Gambar */}
      <div className="mt-24 max-w-full bg-zinc-300 h-[236px] w-[514px] max-md:mt-10" />
      {/* Gambar */}
      <span className="text-lg block shrink-0 mt-10 font-semibold mx-64 text-center text-black px-4 py-2 rounded-lg max-md:max-w-full max-md:mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam, velit sit amet posuere congue, lacus mauris dictum est, id luctus sapien ligula id urna. Phasellus convallis justo sit amet elit condimentum, id ultricies quam consectetur. In eget nibh consequat, lobortis massa quis, placerat ante. Fusce eu sollicitudin magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ut nisi justo. Aliquam porttitor fermentum tortor, quis sagittis dui porttitor eget.
      </span>
      <section className="px-14 py-11 mt-36 w-full border border-solid border-zinc-400 max-w-[1175px] rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
            {/* Gambar */}
            <div className="shrink-0 mx-auto bg-zinc-300 h-[197px] w-[197px] max-md:mt-10" />
            {/* Gambar */}
          </div>
          <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto tracking-normal text-yellow-400 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl font-bold tracking-normal leading-6 text-yellow-400 max-md:max-w-full max-md:text-4xl">
                <span className="text-sky-900">WHAT IS</span> <span className="text-yellow-400">PEMIRA</span><span className="text-sky-900">?</span>
              </h2>
              <span className="block shrink-0 mt-8 text-justify text-black px-2 py-2 rounded-lg max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam, velit sit amet posuere congue, lacus mauris dictum est, id luctus sapien ligula id urna. Phasellus convallis justo sit amet elit condimentum, id ultricies quam consectetur. In eget nibh consequat, lobortis massa quis, placerat ante. Fusce eu sollicitudin magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ut nisi justo. Aliquam porttitor fermentum tortor, quis sagittis dui porttitor eget.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-16 py-14 mt-20 w-full border border-solid border-zinc-400 max-w-[1175px] rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-5xl font-bold text-center tracking-normal leading-6 text-yellow-400 max-md:max-w-full max-md:text-4xl">
          <span className="text-sky-900">GET TO KNOW YOUR</span> <span className="text-yellow-400">CANDIDATE</span>
        </h2>
        <span className="block shrink-0 mt-8 text-center text-black px-4 py-2 rounded-lg max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam, velit sit amet posuere congue, lacus mauris dictum est, id luctus sapien ligula id urna. Phasellus convallis justo sit amet elit condimentum, id ultricies quam consectetur. In eget nibh consequat, lobortis massa quis, placerat ante. Fusce eu sollicitudin magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ut nisi justo. Aliquam porttitor fermentum tortor, quis sagittis dui porttitor eget.
        </span>
        <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <CandidateCard title="See CaFrak" />
            <CandidateCard title="See CaKa IM" />
            <CandidateCard title="See CaKa BEM" />
          </div>
        </div>
      </section>
      <section className="mt-32 text-5xl font-bold tracking-normal leading-6 whitespace-nowrap text-center max-md:mt-10 max-md:text-4xl">
        <h2>
          <span className="justify-center px-3 py-1 text-white bg-yellow-400 max-md:text-4xl">VOTE</span>
          <span className="my-auto text-sky-900 max-md:text-4xl"> NOW</span>
        </h2>
      </section>
      <span className="block shrink-0 mt-10 mx-64 text-center text-black px-4 py-2 rounded-lg max-md:max-w-full max-md:mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam, velit sit amet posuere congue, lacus mauris dictum est, id luctus sapien ligula id urna. Phasellus convallis justo sit amet elit condimentum, id ultricies quam consectetur. In eget nibh consequat, lobortis massa quis, placerat ante. Fusce eu sollicitudin magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ut nisi justo. Aliquam porttitor fermentum tortor, quis sagittis dui porttitor eget.
      </span>
      <div className="mt-16 w-full max-w-[1114px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <VotingOption title="OFFLINE VOTING" imageSrc={logoOffline} />
          <VotingOption title="ONLINE VOTING" imageSrc={logoOnline} />
        </div>
      </div>
      <button className="vote-now-button justify-center px-8 py-5 mt-16 text-2xl font-extrabold tracking-normal leading-6 text-center text-sky-900 bg-yellow-400 rounded-[999px] max-md:px-5 max-md:mt-10">
        VOTE NOW
      </button>
      <section className="mt-80 max-md:mt-10 max-md:max-w-full text-center">
        <h2 className="text-5xl font-bold tracking-normal leading-6 text-sky-900 max-md:max-w-full max-md:text-4xl">
          FREQUENTLY ASKED QUESTION
        </h2>
        <FAQContainer>
          What is Lorem Ipsum?
        </FAQContainer>
        <FAQContainer>
          Where does it come from?
        </FAQContainer>
        <FAQContainer>
          Why do we use it?
        </FAQContainer>
        <FAQContainer>
          Where can i get some?
        </FAQContainer>
        <FAQContainer>
          How many people use Lorem Ipsum?
        </FAQContainer>
        <FAQContainer>
          What is the function of Lorem Ipsum?
        </FAQContainer>
        <FAQContainer>
          When did Lorem Ipsum first appear?
        </FAQContainer>
      </section>
      <footer className="self-stretch mt-72 w-full bg-sky-900 min-h-[380px] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}

export default MyComponent;
