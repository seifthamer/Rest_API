const User = require('../models/userSchema')

// GET METHOD 
const getUser = async (req,res)=> {
    try{
        const user = User.find()
        res.status(201).json({msg:"find all the data", user})
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

// POST METHOD
const addUser = async (req,res)=> {
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).json({msg:"user added", user})
    } catch (err) {
        res.status(500).json({msg: err.message})
    }

}

// PUT METHOD
const updateUser = async (req,res)=> {
    try{
        const user = await User.findByIdAndUpdate({_id:req.params.id},{...req.body})
        if (!user) 
        return res.status(404).json({msg:"user not found"})
        res.status(201).json({msg:"user updated", user:{...user._doc, ...req.body}})
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

// DELETE METHOD
const deleteUser = async (req,res)=> {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user)
         return res.status(404).json({msg:"user not found"})
        res.status(201).json({msg:"user deleted", user})
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}
module.exports = {getUser,addUser,updateUser,deleteUser}