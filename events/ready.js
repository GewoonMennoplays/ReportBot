module.exports = async(client, message) => {

    client.user.setStatus('online');
    client.user.setActivity("Developing | !help", {type:"PLAYING"});
};