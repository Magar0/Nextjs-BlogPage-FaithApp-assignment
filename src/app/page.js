"use client"

import { useEffect, useState } from "react";
import Bottom from "./component/Bottom/Bottom";
import CourseDetails from "./component/CourseDetails/CourseDetails";
import Quote from "./component/Quote/Quote";
import Subscription from "./component/Subscription/Subscription";


const Home = () => {

  const [data, setData] = useState()

  const fetchData = async () => {
    const res = await fetch('/api')
    const jsonData = await res.json()
    setData(jsonData.parsedData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {
        data &&
        <>
          <section className="body flex relative">
            <CourseDetails data={data} />
            <Subscription data={data} />
          </section>
          <section className="bottom">
            <Bottom data={data} />
            <Quote data={data} />
          </section>
        </>
      }
    </>
  )
}

export default Home;