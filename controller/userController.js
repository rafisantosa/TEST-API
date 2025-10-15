const User = require ('../models/users')

exports.getAllUsers = (req,res)=>{
    User.findAll()
    .then(users=> res.json(users))
    .catch(error => res.status(500).json({message:'Internal Server Errors',error:error}))
}
exports.getUsers = async (req,res)=>{
    const id = parseInt(req.params.id);
    try{
        const user = await User.findByPk(id);

        if (!user){
            return res.status(400).send({
                message:"Data Not Found!"
            });}

        res.status(200).json({
            user
        });
    }
    catch(error){
        res.status(200).json({
            message:"Internal Server Error !"
        });
    }
}

exports.createUser = async (req,res)=>{
   const {nama,jurusan,email,no_telp,alamat}= req.body;

   if (!nama||!jurusan||!email||!no_telp||!alamat){
    return res.status(400).send({
        message:"nama, jurusan, email,no_telp, and alamat cannot be empty! "
    });
   }
   
   try{
        const newUser= await User.create({
            nama,
            jurusan,
            email,
            no_telp,
            alamat
        });
        res.status(200).json({
            message:"User registered successfully",
            newUser:newUser
        });
    }catch(error){
        res.status(200).json({
            message:"User regist unsuccessfully"
        });
    }
}

exports.updateUser = async (req,res)=>{
    const id = parseInt(req.params.id);
    const {nama,jurusan,email,no_telp,alamat}= req.body;

    if (!nama||!jurusan||!email||!no_telp||!alamat){
        return res.status(400).send({
            message:"nama, jurusan, email,no_telp, and alamat cannot be empty! "
        });
       }

    try{
        const user = await User.findByPk(id);
            if (!user){
                return res.status(400).send({
                    message:"Data Not Found!"
                });}else{
                    user.nama = nama;
                    user.jurusan = jurusan;
                    user.email = email;
                    user.no_telp = no_telp;
                    user.alamat = alamat;
                    await user.save();

                    res.status(200).json({
                        message:"User update successfully",
                        UpdatedUser : user
                    });
                }
    }
    catch(error){
        res.status(200).json({
            message:"Internal Server Error !"
        });
    }
}


exports.deleteUser = async (req,res)=>{
    const id = parseInt(req.params.id);
    try{
        const user = await User.findByPk(id);

        if (!user){
            return res.status(400).send({
                message:"Data Not Found!"
            });}
        user.destroy();
        res.status(200).json({
            message:"Data Deleted!",
            user
        });
    }
    catch(error){
        res.status(200).json({
            message:"Internal Server Error !"
        });
    }
}
