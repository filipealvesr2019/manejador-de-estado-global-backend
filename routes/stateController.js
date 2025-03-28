import State from "../models/stateModel";


// salvar estado no banco de dados
export async function setState(req, res) {
    const {key, value} = req.body;
    await State.findOneAndUpdate({key}, {value}, {upsert: true})
}