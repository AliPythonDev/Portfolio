import React, { Fragment } from 'react'
import Link from 'next/link';

const Work = () => {
    return (
        <div className='mt-[5rem] h-[auto] w-[360px]  md:w-[720px] ' >
            <div className='stroke-yellow-300 text-[5rem] md:text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }} > {"<"}Work {"/>"}   </div>
            <div className='flex flex-col  justify-center m-auto md:flex-row' >
                {/* PROJECT 1 */}
                {/* <Link href={'https://github.com/AliPythonDev'}> */}
                <div className='border-slate-700   border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                    <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >
                        <span>Book Recommender System</span><span><a target='blank' href="https://github.com/AliPythonDev"><img className='pt-1' width={18} src="link.png" alt="" /></a></span>
                    </div>
                    <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                    <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                        <img src="/project1.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-cover transition-all duration-200 ' alt="" />
                    </div>
                    <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH USED </div>
                    <div className='flex flex-wrap w-[400px]' >
                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                            <div className='rounded-md '>  <img src={"/numpy.png"} width={24} alt="" /></div> <div>{"Numpy"}</div>
                        </div>
                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                            <div className='rounded-md '>  <img src={"/pandas.png"} width={24} alt="" /></div> <div>{"Pandas"}</div>
                        </div>
                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                            <div className='rounded-md '>  <img src={"/scikit-learn.png"} width={24} alt="" /></div> <div>{"scikit-learn"}</div>
                        </div>
                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                            <div className='rounded-md '>  <img src={"/flask.png"} width={24} alt="" /></div> <div>{"Flask"}</div>
                        </div>
                    </div>
                </div>
                {/* </Link> */}
                {/* project 2 */}
                <Fragment>
                    {/* <Link href={'https://my-funds-sage.vercel.app'}> */}
                    {/* <div className='border-slate-700 border rounded-md w-[330px] min-h-[300px] m-5 p-1  h-[505px]  hover:bg-slate-900 duration-300 transition-all  ' >
                            <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2   ' >
                            <span>My Funds - Wallet App </span><span><img className='pt-1' width={18} src="link.png" alt="" /></span>

                            </div>
                            <hr className='w-[70%] mb-4  text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                            <div className='w-[95%]  object-cover  h-[auto] m-auto '  >
                                <img src="/project2.png" className='cursor-pointer   opacity-75 hover:opacity-100 h-[10rem] object-cover transition-all duration-200 ' alt="" />
                                <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH USED </div>
                                <div className='flex flex-wrap w-[400px]' >
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/react.png"} width={24} alt="" /></div> <div>{"React"}</div>
                                    </div>
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/postgres.png"} width={24} alt="" /></div> <div>{"Postgres"}</div>
                                    </div>
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/prisma.png"} width={24} alt="" /></div> <div>{"Prisma"}</div>
                                    </div>
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/express.png"} width={24} alt="" /></div> <div>{"Express JS"}</div>
                                    </div>
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/typescript.png"} width={24} alt="" /></div> <div>{"Typescript"}</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </Link> */}
                </Fragment>

            </div>
        </div>
    )
}

export default Work