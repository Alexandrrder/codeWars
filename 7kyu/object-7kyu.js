function combine(...arr) {
  const result = {}
  for(let i = 0; i < arr.length; i++){
    const keys = Object.keys(result)
    for(key in arr[i]){
      if(keys.includes(key)) {
        result[key] = result[key] + arr[i][key]
      } else {
        result[key] = arr[i][key]
      }
    }
  }
  return result;
}
//
for(let i = 0; i < questions.length; i++){
  questions[i].usersAnswer = null;
}
//
function addProperty(obj, prop, value) {
  if (obj.hasOwnProperty(prop)) {
    throw new Error('Property already exists');
  } else {
    obj[prop] = value;
  }
}
//
const whosOnline = (friends) => {
  let result = {
    online: [],
    offline: [],
    away: []
  };

  if (friends.length === 0) {
    return {};
  }

  for (let friend of friends) {
    if (friend.status === 'online') {
      if (friend.lastActivity <= 10) {
        result.online.push(friend.username);
      } else {
        result.away.push(friend.username);
      }
    } else if (friend.status === 'offline') {
      result.offline.push(friend.username);
    }
  }
  
  if (result.online.length === 0) {
    delete result.online;
  }
  return result;
};


