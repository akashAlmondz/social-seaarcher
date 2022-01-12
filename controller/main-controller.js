require('dotenv').config()
const axios = require('axios')
const TwitterClient = require('twitter-api-client').TwitterClient
const needle = require('needle');

const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });


exports.data=async(req,res)=>{
    let app=req.body.app
    let url=req.body.url

   data=await axios.get(`https://api.instagram.com/oauth/authorize?client_id=${app}&redirect_uri=${url}&scope=user_profile,user_media&response_type=code`)
   console.log(data);

   //    .then((response) => {
//     res.send(response) 
//   })
// .catch((err) => {
//     console.error(err)
//     res.status(500).send(err)
// })
 
    res.status(200).json({
        data:"hello"
    })

}
exports.data1=(req,res)=>{

    res.status(200).json({
        data:"helllo"
    })

}

exports.twitter=(req,res)=>{
    data=[];
    const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = process.env.BEARER_TOKEN;

const endpointUrl = 'https://api.twitter.com/2/tweets/search/recent'
const endpoint1='https://api.twitter.com/2/users/by/username/'
 param=req.params.param
async function getRequest() {

    // These are the parameters for the API request
    // specify Tweet IDs to fetch, and any additional fields that are required
    // by default, only the Tweet ID and text are returned
    const params = {
        'query': `${param}`,
        'tweet.fields': 'author_id'
    }

    const res = await needle('get', endpointUrl, params, {
        headers: { 
            // "User-Agent": "v2FullArchiveJS",
            "authorization": `Bearer ${token}`
        }
    })
    
    const res1 = await needle('get', endpoint1, params, {
        headers: {
            // "User-Agent": "v2FullArchiveJS",
            "authorization": `Bearer ${token}`
        }
    })
 
 
    if (res.body) {
      
        data.push(res.body);
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest();
        data.map(x=>{
            console.log("hello",x.data)
        })
        res.json({
            recent_tweets: data.map(x=>{
                x.data
            })
        })
        // console.dir(response, {
        //     depth: null
        // });

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();
}


exports.instagram=async (req,res)=>{
    
    const username = req.params.query
   console.log(username);
    axios.get(`https://www.instagram.com/explore/tags/${username}/?__a=1`) 
        .then((response) => {
            res.send(response.data) 
        })
        .catch((err) => {
            console.error(err)
            res.status(500).send(err)
        }) 
        // try {
        //     const {
        //     data
        //     } = await axios.get(`https://www.instagram.com/${username}/?__a=1`) 
            
        //     user = data.graphql.user
        //     let followers = user.edge_followed_by.count
        //     let following = user.edge_follow.count
        //     let fullname = user.full_name
        //     let user_name = user.username
        //     let verified = user.is_verified
        //     let private = user.is_private
        //     let posts = user.edge_owner_to_timeline_media.count
        //     let profile_pic = user.profile_pic_url_hd
        //     console.log(`${user_name} has ${followers} and follows ${following}. His full name is ${fullname}. His pic is ${profile_pic}`)
        //     res.json({
        //         followers:followers,
        //         following:following,
        //         fullname:fullname,
        //         user_name:user_name,
        //         profile_pic:profile_pic,
        //         verified:verified,
        //         private:private,
        //         posts:posts
        //     })
        //     } catch (error) {
        //     console.log(`USER NOT FOUND`)
        //     // throw Error(error);
        //     }
}