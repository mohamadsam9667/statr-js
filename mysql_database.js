const mysql=require('mysql2')


const pool=mysql.createPool({
    host:"localhost",
    user:'root',
    password:"87654321",
    database:"startcode",
    

}).promise();


const getShowerDatabase=async()=>{
const [shower]=await pool.query("select *from users ")
    return shower;
}


// const getShowerById=async(id)=>{
//     const [shower]=await pool.query
//     (`select *from users where id=${id} ` )
//         // return shower.insertId
//     }

// const insertTitle=async(firstname,lastname)=>{
//     const [result]=await pool.query
//     (`insert into users (firstname,lastname,gender) values (?,?,?)`,
//         [firstname,lastname,null]);
//         // console.log("Inserted ID:", result.insertId);
//         // console.log(resault.insertId)
//     return result
// }



const data=getShowerDatabase().then(inform=>{
    
    console.log(inform)

})




// const showById=getShowerById(1).then(anyinform=>{
//     console.log(anyinform)
// })



// const insertion=insertTitle('ali', 'ahmadi').then((drr) => {
//     console.log(drr);
//     console.log("id:="+drr.insertId)
//   })




const updater = async (id,firstname,lastname ) => {
    const [response] = await pool.query(
        `UPDATE users SET firstname = ?,lastname=? WHERE id = ?`, 
        [firstname,lastname,id]
    );
    return response;
};

updater(90, "banana","yrhdij").then((printer) => {
    console.log(printer);
});



