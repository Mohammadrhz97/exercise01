import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-14">
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full bg-gray-100 bg-transparent shadow-2xl flex flex-col p-4 md:my-0 my-8 hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-2xl flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
