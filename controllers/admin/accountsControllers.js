const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')
const md5 = require('md5')
const Role = require('../../models/rolesModel')
const Accounts = require('../../models/accountsModel')

// [GET] /admin/accounts
module.exports.accounts = async (req, res, next) => {
    let find = {
        deleted: false
    }

    const accounts = await Accounts.find(find).select("-password -token")
    
    for(const account of accounts) {
        const role = await Role.findOne({
            _id: account.role_id,
            deleted: false
        })
        account.role = role
    }

    res.render('admin/pages/accounts/accounts', { 
        pageTitle: 'Danh sách tài khoản',
        accounts: accounts
    })
}

// [GET] /admin/accounts/create
module.exports.create = async (req, res, next) => {
    const roles = await Role.find({
        deleted: false
    })
    
    res.render('admin/pages/accounts/create', { 
        pageTitle: 'Tạo tài khoản',
        roles: roles
    })
}

// [POST] /admin/accounts/create
module.exports.createPost = async (req, res, next) => {
    try {
        const emailExist = await Accounts.findOne({
            email: req.body.email,
            deleted: false
        })
    
        if(emailExist) {
            res.redirect('/admin/accounts/create')
        } else {
            req.body.password = md5(req.body.password)
        
            const accounts = new Accounts(req.body)
            await accounts.save()
    
            res.redirect('/admin/accounts')
        }
    } catch (error) {
        next(error)
    }
}

// [GET] /admin/accounts/edit
module.exports.edit = async (req, res, next) => {
    const id = req.params.id

    let find = {
        _id: id,
        deleted: false
    }

    const accounts = await Accounts.findOne(find)

    const roles = await Role.find({
        deleted: false
    })

    res.render('admin/pages/accounts/edit', { 
        pageTitle: 'Sửa tài khoản',
        accounts: accounts,
        roles: roles
    })
}

// [PATCH] /admin/accounts/edit
module.exports.editPatch = async (req, res, next) => {
    const id = req.params.id

    if(req.body.password) {
        req.body.password = md5(req.body.password)
    } else {
        delete req.body.password
    }

    await Accounts.updateOne({ _id: id}, req.body)

    res.redirect("back")
}