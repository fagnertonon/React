const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggeDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) return req.status(400).json({ error: 'Dev not exists' });

        if(targetDev.Likes.include(loggeDev._id)){
            console.log('Match');
        }
        loggeDev.Likes.push(targetDev._id);

        await loggeDev.save();

        return res.json(loggeDev);
    }
};