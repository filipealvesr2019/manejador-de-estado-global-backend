const State = require("../models/stateModel");


// salvar estado no banco de dados
 async function setState(req, res) {
    const {key, value} = req.body;
    await State.findOneAndUpdate({key}, {value}, {upsert: true});
    res.json({success: true})
}

// recuperar estado
 async function getState(req, res){
    const { key } = req.params;
    const state = await State.findOne({ key });
    res.json(state ? state.value : null )


}
module.exports = { setState, getState };
