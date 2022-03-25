const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION).then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))
}