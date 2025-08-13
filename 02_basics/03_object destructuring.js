const course = {
  courseName: "javascript",
  coursePrice: 5400,
  courseInstructor: "Hitesh Chaudhary",
  courseDuration: "1 Year",
};

// console.log(course.courseInstructor); // writing this way is inefficient and repetetive and long, we have destructure property to deal with this

// De-structuring

const { courseInstructor, courseDuration, coursePrice, courseName } = course;
// console.log(courseInstructor);
// console.log(courseDuration);
// console.log(coursePrice);
// console.log(courseName);

const {coursePrice:price} = course // can assign different name to the key
// console.log(price);

 // JSON : Javascript object notation

    
    





