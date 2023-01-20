/** @format */

export const JoinTheTeam = () => {
  return (
    <div className=" relative w-full mt-[480px] m-auto -z-10 bg-slate-50 grid grid-cols-1 md:grid md:grid-cols-2 md:mt-[628px] ">
      <div>
        <article className="flex flex-col items-center justify-center  mt-12 sm:-z-10 ">
          <h3 className=" block mt-4 text-left font-bold text-2xl font-mono ">
            JOIN TEAM THAVAGE
          </h3>
          <p className=" block w-[480px] text-left mt-8 font-mono text-base items-baseline">
            We are looking for the hardest workers in the room. Those who ignore
            the norm and instead, strive to set the standard for the crowd
            around them. When you join Team Thavage you represent RAW Nutrition
            and eveything we stand for. If you are accepted you will recive:
          </p>
          <ul className="w-[480px] text-left mt-4  ">
            <li className=" font-semibold font-mono ">
              • Customized athlete discount code to share.
            </li>
            <li className="font-semibold font-mono">
              • Commission on sales brought in using your code, and potential to
              earn free product/apparel.
            </li>

            <li className="font-semibold font-mono">
              • Early access to new product launches, Team Thavage exclusive
              apparel, and more.
            </li>
            <li className="font-semibold font-mono">
              • Special offers from Raw Nutrition
            </li>
          </ul>
        </article>
        <div className=" flex relative m-auto justify-center items-center ">
          <button className="  bg-black h-12 w-48 rounded-md  mt-8  items-center shadow-md text-slate-50 ">
            Join Teame Thavage
          </button>
        </div>
      </div>
      <div className=" items-center ml-8 md:ml-12 md:mt-12 md:mr-8   md:mt-8 md:mb-8">
        <img
          src="./workouTeam/teamBumstead.webp"
          className=" sm:w-[480px] sm:h-[480px] md:h-[400px] xl:w-[600px] xl:h-[600px]  rounded-xl  "></img>
      </div>
    </div>
  )
}
