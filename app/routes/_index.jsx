import axios from 'axios';
import logo from "./images/LOGO_BA_TRANS.png";

export const meta = () => {
  return [
    { title: "Tugas Pake Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const LoginInfo = () => {

  const handleGetData = async () => {
    try {
      const res = await axios.get('https://latihan-express.vercel.app/user');
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const display_name = data.get('display_name');
    const password = data.get('password');
    const npm = data.get('npm');

    try {
      const res = await axios.post('https://latihan-express.vercel.app/user', {
        npm,
        display_name,
        password
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col bg-stone-100">
      <div className="w-full bg-zinc-100 min-h-[162px] max-md:max-w-full" />
      <div className="flex flex-col items-center px-16 pb-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex z-10 flex-col pb-6 mt-0 mb-80 max-w-full rounded-md border border-solid bg-zinc-100 border-stone-300 w-[551px] max-md:mb-10">
          <div className="px-10 rounded-md border border-solid bg-stone-200 border-stone-300 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                  <div className="text-6xl font-medium text-stone-500 max-md:text-4xl">
                    SSO
                  </div>
                  <div className="mt-4 text-lg text-neutral-500">
                    Single Sign On - DEV
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                <img
                  src={logo}
                  className="self-stretch my-auto w-full aspect-[1.09] max-md:mt-4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-14 mt-8 max-md:px-5 max-md:max-w-full">
            <div className="text-lg italic text-neutral-400 max-md:max-w-full">
              <span className="font-bold">
                Masukkan username dan password UI Anda/
              </span>
              <br />
              Enter your username and password:
            </div>
            <form method="post" onSubmit={handleSubmit}>
              <input
                type="text"
                name="display_name"
                className="shrink-0 mt-5 bg-white rounded border border-solid border-stone-300 h-[74px] w-full max-md:max-w-full"
                placeholder="   Username"
              />
              <input
                type="password"
                name="password"
                className="shrink-0 mt-5 bg-white rounded border border-solid border-stone-300 h-[74px] w-full max-md:max-w-full"
                placeholder="   Password"
              />
              <input
                type="text"
                name="npm"
                className="shrink-0 mt-5 bg-white rounded border border-solid border-stone-300 h-[74px] w-full max-md:max-w-full"
                placeholder="   NPM"
              />
              <div className="flex gap-72 justify-between self-center mt-9 max-w-full w-[298px]">
                <button type="button" className="my-auto text-2xl" onClick={handleGetData}>
                  test
                </button>
                <button type="submit" className="justify-center px-6 py-5 text-2xl text-white whitespace-nowrap rounded-lg bg-stone-500 max-md:px-5 max-md:mr-2.5">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;