import React from "react";
import '../css/Comments.css';

function TraineeComments() {
    const displayData = () => {
        return (
            <>
                <div className="comment-box"  >
                    <div className="comment--collectionpictures">
                        <img className="comment--picture" src="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg" alt={"photo not available"} />
                        <img className="comment--sidepicture" src="https://www.dummies.com/wp-content/uploads/494382.image1.jpg" alt={"photo not available"} />
                    </div>
                    <p className="comment--linedivider"> _________________________________________ </p>
                    <p className="comment--commentname"> Ludris Valery - <strong className="italic"> Music Student</strong> </p>
                    <p className="comment--message"> My instructor very good at assessing a student’s abilities and interests and adjusting his lessons accordingly. He makes the lessons fun and challenging. </p>
                </div>

                <div className="comment-box"  >
                    <div className="comment--collectionpictures">
                        <img className="comment--picture" src="https://www.bayleybulletin.com/wp-content/uploads/2016/08/Ashlynn-Fayth-Smith-900.jpg" alt={"photo not available"} />
                        <img className="comment--sidepicture" src="https://www.dummies.com/wp-content/uploads/494382.image1.jpg" alt={"photo not available"} />
                    </div>
                    <p className="comment--linedivider"> _________________________________________ </p>
                    <p className="comment--commentname">  Sarra Merob - <strong className="italic"> Martial Arts Student</strong> </p>
                    <p className="comment--message"> Absolutely wonderful experience. The best Sensei to go for Martial Arts. Sensei Best is wonderful with working with all ages. Great energy and sense of humor. Very supportive environment. Hoping to join back again soon! </p>
                </div>

                <div className="comment-box"  >
                    <div className="comment--collectionpictures">
                        <img className="comment--picture" src="https://vrs.amsi.org.au/wp-content/uploads/sites/84/2017/12/tobinsouth_vrs_2017-18.jpeg" alt={"photo not available"} />
                        <img className="comment--sidepicture" src="https://www.dummies.com/wp-content/uploads/494382.image1.jpg" alt={"photo not available"} />
                    </div>
                    <p className="comment--linedivider"> _________________________________________ </p>
                    <p className="comment--commentname"> Merlyn Kliment  - <strong className="italic"> Sports Student</strong> </p>
                    <p className="comment--message"> Alan Best has had a tremendous amount of experience. He works not only as an instructor, but as a mentor. I have watched the affect he has on personal growth with his students, and it is an intangible skill which stars cannot account for.  </p>
                </div>
            </>
        )
    }
    return (<div className="comment-container">
        <h1 className="comment-title"> What our students from around the world say</h1>
        <div className="comment-main">{displayData()}</div>
    </div>);
}
export default TraineeComments
