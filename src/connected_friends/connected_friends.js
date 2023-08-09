const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
  const users = Object.keys(graph);

  //if graph is empty(has no keys)
  if (users.length === 0) {
    //return false
    return false;
  }

  // if startUser is equal to endUser
  if (startUser === endUser) {
    //return true
    return true;
  }

  //initialize a new array that constains startUser
  const enqueued = [startUser];
  // initialize a new empty queue
  const discovered = new Queue();

  //enqueue startUser
  discovered.enqueue(startUser);

  // while discovered isnt empty
  while (discovered.first) {
    // dequeue a value from discovered and name it user
    const user = discovered.dequeue();

    const following = graph[user];

    //for each friend followedUser in graph[user]
    for (const followedUser of following) {
      // if followedUser is equal to endUser
      if (followedUser === endUser) {
        //return true
        return true;
      }

      //if enqueued doesnt include followedUser
      if (!enqueued.includes(followedUser)) {
        // add followedUser to enqueued
        enqueued.push(followedUser);
        // enqueue friend to discovered
        discovered.enqueue(followedUser);
      }
    }
  }
  // otherwise return false
  return false;
};

module.exports = connected;
