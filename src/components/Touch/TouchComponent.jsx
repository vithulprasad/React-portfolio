function TouchComponent() {
  return (
    <div className="w-full h-[1000px]" style={{fontFamily:"myFont"}}>
       <div className="w-full h-full flex ">
          <div className="w-1/2 h-full p-6 ">
             <div className=" h-full">
                 <div className="w-full h-[15%] flex justify-center items-center text-4xl">Get In Touch</div>
                  <div className="w-full h-[60%] p-5">
                      <div className="w-full h-full border shadow-lg p-3">
                          <div className="w-full h-20 flex justify-around my-7 ">
                            <div className="w-[48%] h-full mb-4">
                               <h1 className="text-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">first Name</h1>
                               <div className="w-full h-2/3 "> <input className="w-full h-full text-xl border border-fuchsia-600 border-solid" type="text" /></div>
                            </div>
                             <div className="w-[48%] h-full ">
                                <h1 className="text-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Last Name</h1>
                                <div className="w-full h-2/3 "> <input className="w-full h-full border border-fuchsia-600 border-solid  text-xl" type="text" /></div>
                             </div>
                            
                          </div>
                          <div className="w-full h-20 flex justify-around my-7 ">
                            <div className="w-[48%] h-full mb-4">
                               <h1 className="text-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">E-mail</h1>
                               <div className="w-full h-2/3 "> <input className="w-full h-full border border-fuchsia-600 border-solid text-xl" type="text" /></div>
                            </div>
                             <div className="w-[48%] h-full ">
                                <h1 className="text-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Phone Number</h1>
                                <div className="w-full h-2/3 "> <input className="w-full h-full border border-fuchsia-600 border-solid text-xl" type="text" /></div>
                             </div>
                            
                          </div>
                          <div className="w-full h-[700px] flex justify-around p-7">
                             <div className="w-full h-1/3 bg-violet-800 border   border-fuchsia-600 border-solid ">
                                <textarea className="w-full h-full" >Enter something...</textarea>
                             </div>
                          </div>
                      </div>
                  </div>
                 <div className="w-full h-[5%] flex justify-center items-center">
                    <button className="border w-2/3 h-full flex justify-center items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500">Sent Message  <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>   </span></button>
                 </div>
             </div>
          </div>

          <div className="w-1/2 h-full"style={{fontFamily:"myFont"}}>
              <div className="w-full h-1/2 " >
                 <div className="w-full h-14  text-2xl flex items-center">Connect me with</div>
                 <div className="w-full h-[85%] ">
                    <div className="w-2/3 h-[50%] ">
                        <img className="h-full w-2/3" src="https://i.pinimg.com/564x/a0/92/d2/a092d2c836247f517f73e2ba3161dc43.jpg" alt="" />
                    </div>
                    <div className="w-full h-[40%] ">
                        <div className="w-full h-[25%] flex  ">
                            <div className="h-full w-[40px] ">
                                <img src="https://i.pinimg.com/564x/93/87/90/938790b17acb5b3b8236d65ce8c4fc45.jpg" alt="" />
                            </div>
                            <div><a className="underline pl-4 hover:text-rose-500" href="https://instagram.com/eramangapam?igshid=OGQ5ZDc2ODk2ZA==">vidhul prasad </a></div>
                        </div>
                        <div className="w-full h-[25%] flex ">
                            <div className="h-full w-[40px] ">
                              <img src="https://i.pinimg.com/564x/04/a1/6a/04a16adf31c893c93eb1ddade4910480.jpg" alt="" />
                            </div>
                            <div><a className="underline pl-4 hover:text-blue-500" href="https://github.com/vithulprasad">vidhul prasad </a></div>
                        </div>
                        <div className="w-full h-[25%] flex ">
                            <div className="h-full w-[40px] ">
                              <img src="https://i.pinimg.com/564x/b0/28/c2/b028c2e59043116dfc0da6ec6fd26d70.jpg" alt="" />
                            </div>
                            <div>adfadsfadsfdsfd</div>
                        </div>
                        <div className="w-full h-[25%] flex ">  
                             <div className="h-full w-[40px] ">
                               <img src="https://i.pinimg.com/564x/b5/66/fa/b566fa1473df5b662b54babb764a46f2.jpg" alt="" />
                             </div>
                             <div><a className="underline pl-4 hover:text-blue-600"  href="https://x.com/vidhul007?t=zXQwkCRIiElLT9E1Ve4FeQ&s=08"> Vidhul prasad</a></div>
                        </div>
                    </div>
                 </div>
              </div>
              <div className="w-full h-1/2">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15642.197458080575!2d75.8082426183062!3d11.44021832002759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba667a2bba46c63%3A0xffd291b5ddbdf123!2sIndeevaram!5e0!3m2!1sen!2sin!4v1699027162449!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" ></iframe>
              </div>
          </div>
       </div>
    </div>
  )
}

export default TouchComponent
