console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};


function loginUser (email, password, callBack){
    setTimeout (timer, 5000, callBack)
    function timer (){
        let email = 'tamo.bunturi@gmail.com';
        console.log('We have data of user:');
        console.log(email);
        };
        callBack({userEmail : email});{
        };
};

function getUserVideos(email, callBack){
    setTimeout (timer, callBack, 2000)
    function timer (){
        callBack(usersDB[email])
    };
    callBack([video]);{
    };
};

videoDetails(video, callBack);{
    setTimeout(callBack, 2000);{
        callBack(video.title);
    };
};

const getPassedUsersFirstVideoTitle = (user) ;{
    loginUser(user, 1234, (user) => {
        console.log("user:", user);
        getUserVideos(user.userEmail, (videos) =>{
            console.log("videos: ", videos);
            videoDetails(videos[0], (title) => {
                console.log("title:" , title);
            });
        });
    });
};

console.log("finish")
