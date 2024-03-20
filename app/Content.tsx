import AboutMe from "./AboutMe";
import Work from "./Work";
import GitHubCalendarComponent from "./GitHubCalendar";
import TypeWriterComponent from "./TypeWriterComponent";
import FramerMotionComponent from "./FramerMotionComponent";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="h-screen w-screen overflow-y-auto ">
      <div className="p-3 px-5 mt-12 font-bold text-xl text-color">Hi,I'm</div>
      <FramerMotionComponent />
      <TypeWriterComponent />
      <div className=" max-w-[720px] text-slate-200 px-5 p-2 desc-color  text-[13px] md:text-[15px] my-4  ">
        I am a seasoned Full Stack Developer and DevOps Engineer with a
        comprehensive skill set that spans foundational JavaScript, asynchronous
        programming, and in-depth knowledge of Node.js runtime. My expertise
        extends to databases, covering both NoSQL (Mongo) and SQL (Postgres),
        and I am a TypeScript advocate, proficient from beginner to advanced
        levels. From mastering backend communication protocols and Express.js to
        advanced system design involving message queues, PubSubs, and Redis, I
        bring a holistic approach to crafting robust solutions. On the frontend,
        I excel in React, state management using recoil, and CSS principles like
        Flexbox, while also having a deep dive into UI frameworks, particularly
        Tailwind. With a strong grasp of Docker, AWS, and advanced DevOps
        practices like Kubernetes and CI/CD, I've successfully contributed to
        diverse projects, including GSoC initiatives and end-to-end development
        of applications like Paytm/Wallet, Zerodha, and Zapier. My commitment to
        continuous learning and a passion for pushing technological boundaries
        define my approach to delivering excellence in every project I
        undertake.
      </div>
      <GitHubCalendarComponent />
      <AboutMe />
      <Work />
      {/* CONTACT */}
      {/* <div className='mt-[5rem] h-[auto]  w-[750px] border-x border-white' >
                     <div className='stroke-yellow-300 text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }} > {"<"}Contact me {"/>"}   </div>
               </div> */}
      <Footer />
    </div>
  );
};

export default Body;
