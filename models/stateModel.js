import mongoose from 'mongoose';

const stateShema = new mongoose.Sheama({
    key: String,
    value: mongoose.Schema.Types.Mixed
});

export default mongoose.model("State", stateShema)


