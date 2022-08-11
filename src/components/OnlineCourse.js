import React from "react"

function OnlineCourse({course, grid}) {

    const cost = course.free  ? "WATCH FOR FREE" : "PREMIUM";
    const pay = course.free ? "free" : "premium";
     
    return (
        <section>
            {
                grid ? 
                    <div className="oc-card">
                        <img className="oc-card-img" src={course.img} alt="" />
                        <p className={`oc-card-${pay}`}>{cost}</p>
                        <p className="oc-card-tutorials">{course.tutorials} Tutorials</p>
                        <p className="oc-card-title">{course.title}</p>
                        <div className="oc-card-progress"></div>
                        <p className="oc-card-percent">0% Watched</p>
                        <p className="oc-card-steps">0/{course.tutorials} Steps </p>
                    </div> :
                    <div className="oc-long">
                        <img className="oc-long-img" src={course.img} alt=""/>  
                        <p className={`oc-card-${pay}`}>{cost}</p>   
                        <p className="oc-long-tutorials">{course.tutorials} Tutorials</p>
                        <p className="oc-long-title">{course.title}</p>
                        <div className="oc-long-progress"></div>
                        <p className="oc-long-percent">0% Watched</p>
                        <p className="oc-long-steps">0/{course.tutorials} Steps </p>
                    </div>
            }
        </section>
    )
}

export default OnlineCourse