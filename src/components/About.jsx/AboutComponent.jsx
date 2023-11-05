

function AboutComponent() {
  return (
    <div className="w-full p-4">
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center">
          <div className="w-2/3 h-[50px] flex justify-between text-xl lg:text-2xl" style={{ fontFamily: "myFont" }}>
            About Me <span className=""> Trainee In</span>
          </div>
          <div className="w-2/3 h-[200px] lg:w-3/4 lg:h-[400px]"><img src="./brocamp logo.png" alt="Brocamp Logo" className="w-full h-full object-contain" /></div>
          <div className="w-2/3 h-[200px] lg:w-3/4 lg:h-[400px] flex justify-start" style={{ fontFamily: "myFont" }}>
            <div className="w-2/3 h-full flex justify-center">
              <p className="text-base lg:text-xl">
                <span className="text-red-600 text-2xl lg:text-3xl">I Love coding</span> Completed a diploma in computer engineering, and after completing the diploma, I joined Brocamp. Brocamp is a place that I consider my turning point. I spent around one year working there and went through everything. Now, I understand the value of hard work and achieving goals.
              </p>
            </div>
          </div>
          <div className="w-2/3 h-[300px] lg:w-3/4 lg:h-[600px] flex justify-end" style={{ fontFamily: "myFont" }}>
            <div className="w-2/3 h-full">
              <p className="text-base lg:text-xl">My main strength is that I am a self-taught developer, which makes me more confident in this field. I have a good knowledge of <span className="text-green-300 text-2xl lg:text-3xl">MERN stack</span>, as well as a strong understanding of <span className="text-orange-300 text-xl lg:text-2xl">GIT</span>, <span className="text-blue-300 text-base lg:text-xl">HOSTING A PROJECT</span>, and <span className="text-pink-300 text-2xl lg:text-3xl">FIGMA</span>. I always maintain coding standards and stay up-to-date with the latest technology. My favorite framework is <span className="text-red-600 text-2xl lg:text-3xl">NEXT.js</span>. I'm looking forward to gaining more knowledge and mastering everything.</p>
            </div>
          </div>
          <div className="w-2/3 h-[200px] lg:w-3/4 lg:h-[400px]" style={{ fontFamily: "myFont" }}>
            <div className="w-full h-10 flex justify-around">
              <div className="w-1/3 flex justify-center text-yellow-300 text-xl lg:text-2xl"><h1>JavaScript</h1></div>
              <div className="w-2/3 h-10 pt-2">
                <div className="w-full  bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${70}%` }}>
                    {`${70}%`}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-10 flex justify-around">
              <div className="w-1/3 flex justify-center text-blue-600 text-xl lg:text-2xl"><h1>React.js</h1></div>
              <div className="w-2/3 h-10 pt-2">
                <div className="w-full  bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${75}%` }}>
                    {`${75}%`}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-10 flex justify-around">
              <div className="w-1/3 flex justify-center text-green-600 text-xl lg:text-2xl"><h1>Node.js</h1></div>
              <div className="w-2/3 h-10 pt-2">
                <div className="w-full  bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${73}%` }}>
                    {`${73}%`}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-10 flex justify-around">
              <div className="w-1/3 flex justify-center text-red-600 text-xl lg:text-2xl"><h1>Express.js</h1></div>
              <div className="w-2/3 h-10 pt-2">
                <div className="w-full  bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${69}%` }}>
                    {`${69}%`}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-10 flex justify-around">
              <div className="w-1/3 flex justify-center text-green-600 text-xl lg:text-2xl"><h1>MongoDB</h1></div>
              <div className="w-2/3 h-10 pt-2">
                <div className="w-full  bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${78}%` }}>
                    {`${78}%`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full p-3 justify-center items-center text-base lg:text-xl" style={{ fontFamily: "myFont" }}>
          <div className="w-2/3 h-[300px] lg:w-3/4 lg:h-[400px]"><img src="./MERN STACK.jpeg" alt="MERN Stack" className="w-full h-full object-contain" /></div>
          <div className="w-2/3 h-[300px] lg:w-3/4 lg:h-[400px] text-red-700">
            Having good time management, reading books, love football, communication skills, leadership qualities, patience, typing skills, confidence, good work ethic, following YouTube, GeekforGeek, Stack Overflow, and more for searching and finding.
            <samp className="text-green-400 text-2xl" style={{ fontFamily: "myFont" }}>
              Favorite Quote: <br />
              <span className="text-orange-400" style={{ fontFamily: "myFont" }}>Every Master Once a Beginner</span>
            </samp>
          </div>
          <div className="w-2/3 h-[300px]  flex justify-center">
            <img className="h-[300px] lg:h-[500px]" src="./Free Vector _ Code typing concept illustration.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
