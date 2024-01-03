import style from './courseDetails.module.css'

const CourseDetails = ({ data }) => {
    return (
        <div className={`w-3/5 px-20 pt-6 ${style.courseDetails}`}>

            <div>
                <h3 className='font-bold text-2xl mb-5 '>About the course</h3>
                <p>{data.course.about.html_content}</p>
            </div>

            <div>
                <h3 className='font-bold text-2xl my-5'>What to expect from the course</h3>

                <ul>
                    {data.course.what_to_expect.html_content.map((ele, ind) => (
                        <li key={ind}>{ele}</li>
                    ))}

                </ul>
            </div>

            <div>
                <h3 className='font-bold text-2xl my-5' >Key topics covered</h3>
                <ul>
                    {
                        data.course.key_topics.html_content.map((ele, ind) => (
                            <li key={ind}>{ele}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CourseDetails;