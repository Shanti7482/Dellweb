// switch

// mini app based on user

/*let user="student";

switch(user)
{
    case "admin":
        console.log("You have got full access to the website");
        break;
    case "mentor":
        console.log("You have got course access");
        break;
    case "student":
        console.log("You have got access to purchased couse access");
        break;
    default:
        console.log("You are normal user");
}*/

// Date:

// const now = new Date();
// console.log(now)
// console.log(now.toString());
// console.log(now.getFullYear());
// console.log(now.);
/*let name = ["abhishek", "sushil", "vivek"];
let middleName = [1,2,3,4,5];
let lastName = ["ABC", "def", "kumar"];

let fullName = name.concat(middleName ,lastName);

console.log(fullName);*/

// let number = [1,2,3,4,5,6,7,8,9];

// console.log(number.copyWithin(2,5,8));

// let name = ["abhishek", "sushil", "mayank"];

// console.log(name.includes("abhishek"));
// console.log(name.indexOf("abhishek"));
// console.log(Array.isArray(name));

// Objects

/*let userDetailsCourse = {
    firstName : "abhishek",
    lastName : "Kumar",
    role : "student",
    loginCount : "25",
    googleLogin : true,
    courselist : [],
    buyCourse : function(courseName)
    {
        this.courselist.push(courseName);
    },
    getCourseCount : function ()
    {
        return `${this.firstName} is have a course count of ${this.courselist.length}`
    },
    getCouse : function ()
    {
        for(let x of this.courselist)
            console.log(x);

    },
};

userDetailsCourse.buyCourse("c");
userDetailsCourse.buyCourse("c++");
userDetailsCourse.buyCourse("Python");
console.log(userDetailsCourse.getCourseCount());

userDetailsCourse.getCouse();*/

// function course()
// {
//     console.log("Welcome to the JavaScript");
// }

// setTimeout(course,20000)

// setTimeout(()=>
// {
//     console.log("Hello,Abhishek")
// }
//   ,2000) //2000 yani 2 second

//Set Interval

/*setInterval(()=>
{
    const t = new Date();
    // console.log(t.toString());
    console.log(t.toLocaleTimeString())
    //console.log((new Date()).getTime());
},1000)*/

// forEach

// const arr = ["hey","hi","hello","abhishek"];

/*arr.forEach((val) => 
{
    return console.log(val);
});*/

// arr.forEach((val) => console.log(val));

/*const arr = [1,2,4,5,6]

arr.map((val) => console.log(val**2))*/